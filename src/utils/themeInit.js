export const THEME_KEY = 'northridge-theme'

export function initThemeFromStorage() {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    const mode =
      stored === 'dark' || stored === 'light' ? stored : prefersDark ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', mode === 'dark')
  } catch {
    /* private mode / SSR */
  }
}
