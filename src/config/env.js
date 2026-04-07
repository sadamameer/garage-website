export function getQuoteConfig() {
  return {
    receiverEmail: import.meta.env.VITE_QUOTE_RECEIVER_EMAIL || '',
    apiUrl: (import.meta.env.VITE_QUOTE_API_URL || '').trim(),
  }
}
