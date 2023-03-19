import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import AstroPWA from '@vite-pwa/astro'
import siteData from './src/data/site.json'

// https://astro.build/config
export default defineConfig({
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: 'https://firestorm980.github.io',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  base: '/jmcdsn-astro',
  integrations: [
    sitemap(),
    mdx(),
    image(),
    AstroPWA({
      strategies: 'injectManifest',
      manifest: {
        name: siteData.title,
        short_name: siteData.title,
        description: siteData.description,
        icons: [
          {
            src: 'assets/images/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/images/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        theme_color: '#f39c12',
        background_color: '#f39c12',
        display: 'standalone'
      },
      injectManifest: {
        globPatterns: [
          '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
          '/offline/index.html',
          '/404.html'
        ]
      },
      devOptions: {
        enabled: import.meta.env.DEV
      }
    })
  ]
})
