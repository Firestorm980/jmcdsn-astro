import Swup from 'swup'
import SwupA11yPlugin from '@swup/a11y-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'
import SwupJsPlugin from '@swup/js-plugin'
import { animate, stagger } from 'motion'
import { emitEvent } from './util'

const options = [
  {
    from: '(.*)', // meaning any
    to: '(.*)', // meaning any
    out: (next) => {
      animate('.section', { opacity: [1, 0] }, { duration: 1 }).finished.then(next)
    },
    in: (next) => {
      // Reinit any code highlights
      emitEvent('highlight:init')
      animate('.section', { opacity: [0, 1] }, { duration: 1, delay: stagger(0.2) }).finished.then(next)
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
