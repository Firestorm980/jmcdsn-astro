import Swup from 'swup'
import SwupA11yPlugin from '@swup/a11y-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'
import SwupJsPlugin from '@swup/js-plugin'
import { close } from './base-header'

/**
 * Helper function to animate multiple elements.
 *
 * @param {Array} elements Array of nodes to animate.
 * @param {Array} keyframes Array of keyframe objects.
 * @param {Object} options The animation options.
 * @returns Array of animations with promises.
 */
const animateAll = (elements, keyframes, options) => {
  const { stagger, delay } = options
  const animations = elements.map((element, index) => {
    const optionsWithStagger = { ...options, delay: stagger ? stagger * index : delay }

    return new Promise((resolve) => {
      const animation = element.animate(
        keyframes,
        optionsWithStagger
      )
      animation.addEventListener('finish', resolve, { once: true })
    })
  })

  return animations
}

const options = [
  {
    from: '(.*)', // meaning any
    to: '(.*)', // meaning any
    out: async (next) => {
      // Close the navigation
      close()

      // Get elements
      const sections = Array.from(document.querySelectorAll('.section'))

      // Create all animations
      const animations = animateAll(
        sections,
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 300, stagger: 200, fill: 'forwards' }
      )

      // Wait for them to finsih
      await Promise.all(animations)

      // Keep going!
      next()
    },
    in: async (next) => {
      // Get elements
      const sections = Array.from(document.querySelectorAll('.section'))

      // Create all animations
      const animations = animateAll(
        sections,
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 1000, fill: 'forwards' }
      )

      // Wait for them to finsih
      await Promise.all(animations)

      // Keep going!
      next()
    }
  }
]

const init = () => {
  // eslint-disable-next-line no-unused-vars
  const swup = new Swup({
    animateHistoryBrowsing: true,
    containers: ['#swup'],
    plugins: [
      new SwupA11yPlugin(),
      new SwupBodyClassPlugin(),
      new SwupProgressPlugin(),
      new SwupScrollPlugin(),
      new SwupJsPlugin(options)
    ]
  })
}

init()
