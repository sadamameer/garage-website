import { ref, watch, onMounted } from 'vue'
import { THEME_KEY } from '@/utils/themeInit'

const theme = ref('light')

function applyDomTheme(value) {
  const root = document.documentElement
  if (value === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

function readTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    if (stored === 'dark' || stored === 'light') return stored
    return prefersDark ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function useTheme() {
  onMounted(() => {
    theme.value = readTheme()
    applyDomTheme(theme.value)
  })

  watch(theme, (v) => {
    localStorage.setItem(THEME_KEY, v)
    applyDomTheme(v)
  })

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(next) {
    if (next === 'dark' || next === 'light') theme.value = next
  }

  return { theme, toggle, setTheme }
}
