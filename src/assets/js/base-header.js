const header = document.getElementById('site-header')
const navigation = document.getElementById('site-header-navigation')
const buttons = document.querySelectorAll('.site-header__button')

export const close = (focus) => {
  const isOpen = false
  const handleTransitionend = () => {
    const focusElement = document.querySelector('.site-header__button[data-action="open"]')

    if (focus) {
      focusElement.focus()
    }
  }

  navigation.addEventListener('transitionend', handleTransitionend, { once: true })
  navigation.setAttribute('aria-hidden', !isOpen)
  navigation.setAttribute('data-open', isOpen)

  buttons.forEach(button => {
    button.setAttribute('aria-expanded', isOpen)
    button.setAttribute('data-open', isOpen)
  })
}

export const open = (focus) => {
  const isOpen = true
  const handleTransitionend = () => {
    const focusElement = document.querySelector('.site-header__button[data-action="close"]')

    if (focus) {
      focusElement.focus()
    }
  }

  navigation.addEventListener('transitionend', handleTransitionend, { once: true })
  navigation.setAttribute('aria-hidden', !isOpen)
  navigation.setAttribute('data-open', isOpen)

  buttons.forEach(button => {
    button.setAttribute('aria-expanded', isOpen)
    button.setAttribute('data-open', isOpen)
  })
}

const onHeaderClick = (event) => {
  const { target, detail } = event
  const focus = detail === 0

  if (!target.matches('.site-header__button')) {
    return
  }

  const isOpen = navigation.getAttribute('data-open') === 'true'

  if (isOpen) {
    close(focus)
  } else {
    open(focus)
  }
}

const onNavigationKeydown = (event) => {
  const { shiftKey, key, target } = event
  const isOpen = navigation.getAttribute('data-open') === 'true'

  // Not open? Skip.
  if (!isOpen) {
    return
  }

  // Close the navigation on escape.
  if (key === 'Escape') {
    close(true)
    return
  }

  // Don't care about any other keys now but tab.
  if (key !== 'Tab') {
    return
  }

  const focusableArray = Array.from(navigation.querySelectorAll('a, input, button'))
  const first = focusableArray[0]
  const last = focusableArray[focusableArray.length - 1]

  if (first === target && shiftKey) {
    event.preventDefault()
    last.focus()
  }

  if (last === target && !shiftKey) {
    event.preventDefault()
    first.focus()
  }
}

const onNavigationClick = (event) => {
  const { target } = event

  if (!target.matches('a') && !target.matches('.site-header__backdrop')) {
    return
  }

  close()
}

const setup = () => {
  const isOpen = false

  navigation.setAttribute('aria-hidden', !isOpen)
  navigation.setAttribute('data-open', isOpen)

  buttons.forEach(button => {
    button.setAttribute('aria-controls', 'site-header-navigation')
    button.setAttribute('aria-expanded', isOpen)
    button.setAttribute('data-open', isOpen)
  })
}

const bind = () => {
  header.addEventListener('click', onHeaderClick)
  navigation.addEventListener('click', onNavigationClick)
  navigation.addEventListener('keydown', onNavigationKeydown)
}

setup()
bind()
