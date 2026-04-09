/**
 * Contact form submission — POSTs to the mail API (see server/index.js).
 * Set VITE_CONTACT_API_URL for production (e.g. https://yourdomain.com/api/contact or /api/contact).
 */

import { getContactConfig } from '@/config/env'

export async function submitContactMessage(payload) {
  const { apiUrl } = getContactConfig()

  if (!apiUrl) {
    await new Promise((r) => setTimeout(r, 700))
    if (import.meta.env.DEV) {
      console.info(
        '[contactService] Mock submit — set VITE_CONTACT_API_URL for production or run the mail API:',
        payload,
      )
    }
    return { ok: true, message: 'Message sent (demo mode).' }
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  const raw = await res.text().catch(() => '')
  let data = null
  try {
    data = raw ? JSON.parse(raw) : null
  } catch {
    data = null
  }

  if (!res.ok) {
    return {
      ok: false,
      message:
        (data && typeof data.message === 'string' && data.message) ||
        raw ||
        'Unable to send. Please call the shop.',
    }
  }

  return {
    ok: true,
    message:
      (data && typeof data.message === 'string' && data.message) || 'Thanks — we will follow up shortly.',
  }
}
