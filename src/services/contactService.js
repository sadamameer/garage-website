/**
 * Contact form submission — mirror of quoteService pattern.
 * Set VITE_CONTACT_API_URL when your backend is ready; otherwise mock success in development.
 */

const CONTACT_API = (import.meta.env.VITE_CONTACT_API_URL || '').trim()

export async function submitContactMessage(payload) {
  if (!CONTACT_API) {
    await new Promise((r) => setTimeout(r, 700))
    if (import.meta.env.DEV) {
      console.info('[contactService] Mock submit — set VITE_CONTACT_API_URL for production:', payload)
    }
    return { ok: true, message: 'Message sent (demo mode).' }
  }

  const res = await fetch(CONTACT_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    return { ok: false, message: text || 'Unable to send. Please call the shop.' }
  }

  return { ok: true, message: 'Thanks — we will follow up shortly.' }
}
