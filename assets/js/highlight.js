import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

const init = () => {
  hljs.registerLanguage('javascript', javascript)
  hljs.highlightAll()
}

const bind = () => {
  document.addEventListener('highlight:init', init)
}

init()
bind()
