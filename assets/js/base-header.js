import { debounce } from './util'

const body = document.querySelector('body')
const header = document.getElementById('site-header')

const resize = () => {
  const { height } = header.getBoundingClientRect()
  body.style.setProperty('--height-header', `${Math.ceil(height)}px`)
}

const bind = () => {
  window.addEventListener('resize', debounce(resize))
}

resize()
bind()
