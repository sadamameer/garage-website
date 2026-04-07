/**
 * Quote submission layer.
 *
 * Production pattern:
 * 1. Implement a server endpoint (Node, serverless, etc.) that accepts POST JSON.
 * 2. The server reads the recipient address from its own environment (never trust the client for routing).
 * 3. Set VITE_QUOTE_API_URL to that endpoint (e.g. https://api.yourdomain.ca/quote).
 * 4. Send the same payload shape as `buildQuotePayload` from this module.
 *
 * VITE_QUOTE_RECEIVER_EMAIL is exposed for documentation and for non-production demos only.
 * In production, keep the destination email on the server.
 */

import { getQuoteConfig } from '@/config/env'

function buildQuotePayload(formValues) {
  const cfg = getQuoteConfig()
  return {
    ...formValues,
    submittedAt: new Date().toISOString(),
    /** Hint for server routing in dev/staging — replace with server-side config in prod. */
    intendedRecipient: cfg.receiverEmail || undefined,
  }
}

/**
 * @param {Record<string, string>} formValues — validated field map from QuoteForm
 * @returns {Promise<{ ok: boolean, message?: string }>}
 */
export async function submitQuoteRequest(formValues) {
  const payload = buildQuotePayload(formValues)
  const { apiUrl } = getQuoteConfig()

  if (!apiUrl) {
    // Mock path for frontend-only phase: deterministic delay, no network.
    await new Promise((r) => setTimeout(r, 900))
    if (import.meta.env.DEV) {
      console.info('[quoteService] Mock submit — connect VITE_QUOTE_API_URL to POST:', payload)
    }
    return { ok: true, message: 'Your request was recorded (demo mode).' }
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    return {
      ok: false,
      message: text || 'We could not send your request. Please call the shop or try again.',
    }
  }

  return { ok: true, message: 'Thanks — we received your quote request.' }
}
