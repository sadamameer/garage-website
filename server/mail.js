import nodemailer from 'nodemailer'

function requireEnv(name) {
  const v = process.env[name]
  if (!v || !String(v).trim()) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return String(v).trim()
}

export function createMailer() {
  const host = requireEnv('SMTP_HOST')
  const port = Number(process.env.SMTP_PORT || 587)
  const secure =
    process.env.SMTP_SECURE === 'true' ||
    process.env.SMTP_SECURE === '1' ||
    port === 465

  const user = requireEnv('SMTP_USER')
  const pass = requireEnv('SMTP_PASS')

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

export function getFromAddress() {
  const from = process.env.SMTP_FROM?.trim()
  if (from) return from
  const user = process.env.SMTP_USER?.trim()
  if (!user) throw new Error('Set SMTP_FROM or SMTP_USER for the From header.')
  return user
}

export function getQuoteRecipient() {
  const a = process.env.MAIL_TO_QUOTE?.trim()
  const b = process.env.MAIL_TO?.trim()
  const c = process.env.QUOTE_RECIPIENT_EMAIL?.trim()
  if (a) return a
  if (b) return b
  if (c) return c
  throw new Error('Set MAIL_TO_QUOTE, MAIL_TO, or QUOTE_RECIPIENT_EMAIL in .env for the quote inbox.')
}

export function getContactRecipient() {
  const a = process.env.MAIL_TO_CONTACT?.trim()
  const b = process.env.MAIL_TO?.trim()
  const c = process.env.MAIL_TO_QUOTE?.trim()
  const d = process.env.CONTACT_RECIPIENT_EMAIL?.trim()
  if (a) return a
  if (b) return b
  if (c) return c
  if (d) return d
  throw new Error(
    'Set MAIL_TO_CONTACT, MAIL_TO, MAIL_TO_QUOTE, or CONTACT_RECIPIENT_EMAIL in .env for the contact inbox.',
  )
}

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function sendQuoteEmail(mailer, payload) {
  const to = getQuoteRecipient()
  const from = getFromAddress()
  const subject = `Quote request — ${esc(payload.fullName)} · ${esc(payload.vehicleYear)} ${esc(payload.vehicleMake)} ${esc(payload.vehicleModel)}`

  const lines = [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Vehicle: ${payload.vehicleYear} ${payload.vehicleMake} ${payload.vehicleModel}`,
    `Service: ${payload.serviceNeeded}`,
    `Preferred date: ${payload.preferredDate}`,
    `Submitted: ${payload.submittedAt || new Date().toISOString()}`,
    '',
    'Message:',
    payload.message,
  ]

  const text = lines.join('\n')

  const html = `
  <h2 style="font-family:system-ui,sans-serif;font-size:18px;">Quote request</h2>
  <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse;">
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Name</td><td>${esc(payload.fullName)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Email</td><td><a href="mailto:${esc(payload.email)}">${esc(payload.email)}</a></td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Phone</td><td><a href="tel:${esc(payload.phone)}">${esc(payload.phone)}</a></td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Vehicle</td><td>${esc(payload.vehicleYear)} ${esc(payload.vehicleMake)} ${esc(payload.vehicleModel)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Service</td><td>${esc(payload.serviceNeeded)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Preferred date</td><td>${esc(payload.preferredDate)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Submitted</td><td>${esc(payload.submittedAt)}</td></tr>
  </table>
  <p style="font-family:system-ui,sans-serif;font-size:14px;margin-top:20px;"><strong>Message</strong></p>
  <pre style="font-family:ui-monospace,monospace;font-size:13px;background:#f4f4f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${esc(payload.message)}</pre>
  `

  await mailer.sendMail({ from, to, replyTo: payload.email, subject, text, html })
}

export async function sendContactEmail(mailer, payload) {
  const to = getContactRecipient()
  const from = getFromAddress()
  const subject = `Website contact — ${esc(payload.topic)} — ${esc(payload.name)}`

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || '(not provided)'}`,
    `Topic: ${payload.topic}`,
    '',
    payload.message,
  ].join('\n')

  const html = `
  <h2 style="font-family:system-ui,sans-serif;font-size:18px;">Contact form</h2>
  <table style="font-family:system-ui,sans-serif;font-size:14px;">
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Name</td><td>${esc(payload.name)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Email</td><td><a href="mailto:${esc(payload.email)}">${esc(payload.email)}</a></td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Phone</td><td>${esc(payload.phone || '—')}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#555;">Topic</td><td>${esc(payload.topic)}</td></tr>
  </table>
  <p style="font-family:system-ui,sans-serif;font-size:14px;margin-top:16px;"><strong>Message</strong></p>
  <pre style="font-family:ui-monospace,monospace;font-size:13px;background:#f4f4f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${esc(payload.message)}</pre>
  `

  await mailer.sendMail({ from, to, replyTo: payload.email, subject, text, html })
}
