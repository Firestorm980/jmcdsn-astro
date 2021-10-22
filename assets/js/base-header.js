const body = document.querySelector('body')
const header = document.getElementById('site-header')

const resize = () => {
  const { height } = header.getBoundingClientRect()
  body.style.setProperty('--height-header', `${Math.ceil(height)}px`)
}

window.addEventListener('resize', resize)
resize()
