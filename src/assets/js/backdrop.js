import { debounce, prefersReducedMotion } from './utils'

function init () {
  const isPrefersReducedMotion = prefersReducedMotion()

  if (isPrefersReducedMotion) {
    return
  }

  const backdrop = document.querySelector('.site-backdrop')

  const handleDocumentPointerMove = debounce((event) => {
    const { clientX, clientY } = event

    backdrop.animate(
      { transform: `translate3d(${clientX}px, ${clientY}px, 0)` },
      { duration: 2000, fill: 'forwards', ease: 'ease-out' }
    )
  })

  document.addEventListener('pointermove', handleDocumentPointerMove)
}

init()
