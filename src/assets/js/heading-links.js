const init = () => {
  const isSingle = document.querySelector('body').classList.contains('single')
  const content = document.querySelector('.content')

  // Bail early
  if (!isSingle || !content) {
    return
  }

  const headings = content.querySelectorAll('h2,h3,h4,h5,h6')

  headings.forEach(heading => {
    const { textContent } = heading
    const { href, hash } = window.location
    const url = href.replace(hash, '')
    const link = document.createElement('a')

    // Create link
    link.setAttribute('href', `${url}#${heading.id}`)
    link.setAttribute('data-no-swup', true)
    link.classList.add('link')
    link.classList.add('link--heading')
    link.setAttribute('aria-label', `(Copy link for heading: ${textContent})`)
    link.textContent = '#'

    // Update heading
    heading.textContent = heading.textContent + ' '
    heading.appendChild(link)
  })
}

init()

// Rerun this when swup navigates.
document.addEventListener('swup:contentReplaced', init)
