import { cleanupOutdatedCaches, precacheAndRoute, matchPrecache } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { warmStrategyCache } from 'workbox-recipes'
import { setDefaultHandler, setCatchHandler } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'

// Fallback assets to cache
const FALLBACK_HTML_URL = '/offline/index.html'
const FALLBACK_STRATEGY = new CacheFirst()

// Get rid of old content.
cleanupOutdatedCaches()

// These two lines make sure the service worker immediately updates, without prompts.
self.skipWaiting()
clientsClaim()

// Warm the runtime cache with a list of asset URLs
warmStrategyCache({
  urls: [FALLBACK_HTML_URL],
  strategy: FALLBACK_STRATEGY
})

// Cache and route.
// The cache is generated automatically by workbox in our glob config.
precacheAndRoute(self.__WB_MANIFEST || [])

// Using https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#stale-while-revalidate
// Use the cache, if possible. Grab the newer resource from the network.
setDefaultHandler(new StaleWhileRevalidate())

// Uses the approach outlined on https://developer.chrome.com/docs/workbox/managing-fallback-responses/
// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(async ({ request }) => {
  // Fallback assets are precached when the service worker is installed, and are
  // served in the event of an error below. Use `event`, `request`, and `url` to
  // figure out how to respond, or use request.destination to match requests for
  // specific resource types.
  switch (request.destination) {
    case 'document':
      // FALLBACK_HTML_URL must be defined as a precached URL for this to work:
      return matchPrecache(FALLBACK_HTML_URL)

    default:
      // If we don't have a fallback, return an error response.
      return Response.error()
  }
})
