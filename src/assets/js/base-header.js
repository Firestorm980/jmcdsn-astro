const header = document.getElementById('site-header')
const navigation = document.getElementById('site-header-navigation')
const buttons = document.querySelectorAll('.site-header__button')

const close = (focus) => {
  const isOpen = false

  navigation.setAttribute('aria-hidden', !isOpen)
  navigation.setAttribute('data-open', isOpen)

  buttons.forEach(button => {
    button.setAttribute('aria-expanded', isOpen)
    button.setAttribute('data-open', isOpen)
  })
}

const open = (focus) => {
  const isOpen = true

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

  console.log(target)

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
}

setup()
bind()
