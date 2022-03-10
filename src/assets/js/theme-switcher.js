const themeSwitcher = document.getElementById('theme-switcher')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const currentTheme = window.localStorage.getItem('theme')

const selectTheme = (theme) => {
  themeSwitcher.querySelector(`input[value="${theme}"]`).checked = true
  document.querySelector('html').setAttribute('data-theme', theme)
  window.localStorage.setItem('theme', theme)
}

const onThemeSwitcherChange = () => {
  const theme = themeSwitcher.querySelector('input:checked').value
  selectTheme(theme)
}

const bind = () => {
  themeSwitcher.addEventListener('change', onThemeSwitcherChange)
}

const setup = () => {
  if (currentTheme) {
    selectTheme(currentTheme)
  } else {
    if (prefersDark) {
      selectTheme('dark')
    } else {
      selectTheme('light')
    }
  }
}

setup()
bind()
