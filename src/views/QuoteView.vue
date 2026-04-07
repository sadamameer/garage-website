<script setup>
import { computed } from 'vue'
import QuoteForm from '@/components/QuoteForm.vue'
import RevealSection from '@/components/RevealSection.vue'
import { getQuoteConfig } from '@/config/env'
import { site } from '@/config/site'

const cfg = computed(() => getQuoteConfig())
</script>

<template>
  <div>
    <RevealSection>
      <section
        class="border-b border-zinc-200 bg-zinc-100/90 py-14 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-20"
        aria-labelledby="quote-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="reveal-base text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-500">
            Request a Quote
          </p>
          <h1
            id="quote-heading"
            class="reveal-base mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-900 text-balance dark:text-white sm:text-4xl"
          >
            Tell us about your vehicle — we will follow up with next steps
          </h1>
          <p class="reveal-base mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Complete the form with honest detail. A service advisor will review and contact you by phone or email. For
            urgent safety concerns, call {{ site.phoneDisplay }} directly.
          </p>
        </div>
      </section>

      <section
        class="py-14 sm:py-20"
        aria-label="Quote request form"
      >
        <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div class="reveal-base lg:col-span-7">
            <div class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
              <QuoteForm />
            </div>
            <p
              v-if="cfg.receiverEmail && !cfg.apiUrl"
              class="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500"
            >
              Demo mode: submissions are not emailed until you connect
              <code class="rounded bg-zinc-100 px-1 py-0.5 text-[11px] dark:bg-zinc-800">VITE_QUOTE_API_URL</code>
              to your backend. Receiver configured for handoff:
              <span class="font-medium text-zinc-700 dark:text-zinc-400">{{ cfg.receiverEmail }}</span>
            </p>
          </div>
          <aside class="reveal-base space-y-6 lg:col-span-5">
            <div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h2 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                What happens next
              </h2>
              <ol class="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <li>We review your vehicle details and symptoms.</li>
                <li>We suggest the right type of inspection or diagnostic appointment.</li>
                <li>After inspection, you receive a written estimate before work begins.</li>
              </ol>
            </div>
            <div class="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Prefer to talk?
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our service desk can book an inspection and answer questions about estimates, warranties, and timing.
              </p>
              <a
                :href="`tel:${site.phoneTel}`"
                class="mt-4 inline-flex rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Call {{ site.phoneDisplay }}
              </a>
            </div>
            <div class="rounded-2xl border border-dashed border-zinc-300 p-6 text-xs leading-relaxed text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
              <p class="font-semibold text-zinc-700 dark:text-zinc-300">Developer note</p>
              <p class="mt-2">
                Wire
                <code class="rounded bg-zinc-100 px-1 dark:bg-zinc-800">POST</code>
                to your API via
                <code class="rounded bg-zinc-100 px-1 dark:bg-zinc-800">VITE_QUOTE_API_URL</code>. Keep recipient email
                on the server. See
                <code class="rounded bg-zinc-100 px-1 dark:bg-zinc-800">src/services/quoteService.js</code>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RevealSection>
  </div>
</template>
