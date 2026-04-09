/**
 * Frontend env. SMTP credentials must live on the API server only (see server/index.js).
 */

export function getQuoteConfig() {
  const raw = (import.meta.env.VITE_QUOTE_API_URL ?? '').trim()
  /** In dev, default to Vite proxy → mail API unless explicitly overridden. */
  const apiUrl = raw || (import.meta.env.DEV ? '/api/quote' : '')
  return {
    receiverEmail: import.meta.env.VITE_QUOTE_RECEIVER_EMAIL || '',
    apiUrl,
  }
}

export function getContactConfig() {
  const raw = (import.meta.env.VITE_CONTACT_API_URL ?? '').trim()
  const apiUrl = raw || (import.meta.env.DEV ? '/api/contact' : '')
  return { apiUrl }
}
