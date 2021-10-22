import Swup from 'swup'
import SwupA11yPlugin from '@swup/a11y-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'
import SwupJsPlugin from '@swup/js-plugin'

const options = [
  {
    from: '(.*)', // meaning any
    to: '(.*)', // meaning any
    out: (next) => {
      console.log('out')
      next()
    },
    in: (next) => {
      console.log('in')
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
