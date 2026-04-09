/**
 * API server for quote & contact forms — sends mail via SMTP using server-side env only.
 * Run: npm run dev:server  (see root package.json)
 *
 * Never put SMTP credentials in VITE_* variables; they are exposed to the browser.
 */

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {
  createMailer,
  sendQuoteEmail,
  sendContactEmail,
} from './mail.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')

dotenv.config({ path: path.join(rootDir, '.env') })

const PORT = Number(process.env.API_PORT || process.env.PORT || 3001)
const FRONTEND_ORIGIN = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173').trim()

const app = express()
app.use(
  cors({
    origin: FRONTEND_ORIGIN === '*' ? true : FRONTEND_ORIGIN.split(',').map((o) => o.trim()),
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept'],
  }),
)
app.use(express.json({ limit: '128kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

function validateQuote(body) {
  const required = [
    'fullName',
    'email',
    'phone',
    'vehicleMake',
    'vehicleModel',
    'vehicleYear',
    'serviceNeeded',
    'preferredDate',
    'message',
  ]
  const missing = required.filter((k) => !body[k] || String(body[k]).trim() === '')
  if (missing.length) {
    return { error: `Missing fields: ${missing.join(', ')}` }
  }
  return null
}

app.post('/api/quote', async (req, res) => {
  const err = validateQuote(req.body || {})
  if (err) {
    res.status(400).json({ ok: false, message: err.error })
    return
  }

  try {
    const mailer = createMailer()
    const payload = {
      fullName: String(req.body.fullName).trim(),
      email: String(req.body.email).trim(),
      phone: String(req.body.phone).trim(),
      vehicleMake: String(req.body.vehicleMake).trim(),
      vehicleModel: String(req.body.vehicleModel).trim(),
      vehicleYear: String(req.body.vehicleYear).trim(),
      serviceNeeded: String(req.body.serviceNeeded).trim(),
      preferredDate: String(req.body.preferredDate).trim(),
      message: String(req.body.message).trim(),
      submittedAt: req.body.submittedAt || new Date().toISOString(),
    }
    await sendQuoteEmail(mailer, payload)
    res.json({ ok: true, message: 'Thanks — we received your quote request.' })
  } catch (e) {
    console.error('[api/quote]', e)
    res.status(500).json({
      ok: false,
      message: 'Could not send email. Verify SMTP settings on the server.',
    })
  }
})

function validateContact(body) {
  if (!body?.name || !String(body.name).trim()) return 'Name is required.'
  if (!body?.email || !String(body.email).trim()) return 'Email is required.'
  if (!body?.message || String(body.message).trim().length < 8) return 'Message is too short.'
  return null
}

app.post('/api/contact', async (req, res) => {
  const v = validateContact(req.body || {})
  if (v) {
    res.status(400).json({ ok: false, message: v })
    return
  }

  try {
    const mailer = createMailer()
    const payload = {
      name: String(req.body.name).trim(),
      email: String(req.body.email).trim(),
      phone: String(req.body.phone || '').trim(),
      topic: String(req.body.topic || 'general').trim(),
      message: String(req.body.message).trim(),
    }
    await sendContactEmail(mailer, payload)
    res.json({ ok: true, message: 'Thanks — we will follow up shortly.' })
  } catch (e) {
    console.error('[api/contact]', e)
    res.status(500).json({
      ok: false,
      message: 'Could not send email. Verify SMTP settings on the server.',
    })
  }
})

app.listen(PORT, () => {
  console.info(`Mail API listening on http://localhost:${PORT}`)
  console.info(`CORS allowed origin(s): ${FRONTEND_ORIGIN}`)
})
