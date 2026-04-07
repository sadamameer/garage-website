<script setup>
import { RouterLink } from 'vue-router'
import RevealSection from '@/components/RevealSection.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import CTASection from '@/components/CTASection.vue'
import { site } from '@/config/site'
</script>

<template>
  <div>
    <RevealSection>
      <section
        class="relative overflow-hidden border-b border-zinc-200 bg-zinc-950 py-20 dark:border-zinc-800 sm:py-28"
        aria-labelledby="about-hero-heading"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80"
            alt=""
            class="h-full w-full object-cover"
            width="2000"
            height="1333"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        </div>
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="reveal-base text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            About our shop
          </p>
          <h1
            id="about-hero-heading"
            class="reveal-base mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl"
          >
            A modern garage built on honest diagnostics and careful workmanship
          </h1>
          <p class="reveal-base mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            {{ site.name }} exists for drivers who want straight answers, fair pricing, and repairs done with attention
            to detail. We are independent, locally staffed, and focused on long-term relationships — not quick
            upsells.
          </p>
        </div>
      </section>

      <section
        class="py-20 sm:py-24"
        aria-labelledby="story-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div class="reveal-base">
              <SectionHeader
                heading-id="story-heading"
                eyebrow="Our story"
                title="From a two-bay shop to a full-service team"
                description="What started as a small operation focused on diagnostics and brakes grew into a complete auto repair facility — still guided by the same principle: treat every vehicle like it belongs to someone we know."
              />
              <p class="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Today we invest in tooling, training, and processes so our technicians can work efficiently without
                cutting corners. Our service advisors translate technical findings into decisions you can make with
                confidence.
              </p>
            </div>
            <div class="reveal-base space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Mission
              </h3>
              <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Deliver safe, reliable repairs with transparent communication — so you always understand what we did,
                why we did it, and what to watch for next.
              </p>
              <h3 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Service philosophy
              </h3>
              <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                We prioritize safety and reliability first, then help you plan non-urgent items around your budget. No
                scare tactics — just clear priorities and realistic timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-24"
        aria-labelledby="values-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading-id="values-heading"
            eyebrow="What we stand for"
            title="Values you should expect from any shop — we work hard to keep them"
            align="center"
            class="mx-auto max-w-3xl text-center"
          />
          <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="card in [
                {
                  t: 'Certified technicians',
                  b: 'Ongoing training on modern systems, tooling, and manufacturer service practices.',
                },
                {
                  t: 'Transparent pricing',
                  b: 'Written estimates with line items. We contact you before any additional work.',
                },
                {
                  t: 'Honest diagnostics',
                  b: 'Testing and verification before we recommend parts — we show evidence, not guesses.',
                },
                {
                  t: 'Quality parts',
                  b: 'Components that meet or exceed OEM specifications for the application.',
                },
                {
                  t: 'Quality workmanship',
                  b: 'Torque specs, inspections, and road tests where appropriate — done once, done right.',
                },
                {
                  t: 'Customer-first service',
                  b: 'Respect for your schedule, your questions, and your budget.',
                },
              ]"
              :key="card.t"
              class="reveal-base rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 class="font-display text-base font-semibold text-zinc-900 dark:text-white">
                {{ card.t }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {{ card.b }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        class="py-20 sm:py-24"
        aria-labelledby="team-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div class="reveal-base overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=80"
                alt="Clean service bays with organized tooling"
                class="aspect-[4/3] w-full object-cover"
                width="1400"
                height="1050"
                loading="lazy"
              >
            </div>
            <div class="reveal-base">
              <SectionHeader
                heading-id="team-heading"
                eyebrow="The shop floor"
                title="Experienced people and a workspace designed for precision"
                description="Our technicians collaborate across diagnostics and mechanical repair. The shop is laid out for efficiency — so we spend time fixing, not searching for tools."
              />
              <div class="mt-8 flex flex-wrap gap-3">
                <span
                  class="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >ASE-style training</span>
                <span
                  class="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >Modern diagnostics</span>
                <span
                  class="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >Quality control checks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="border-t border-zinc-200 bg-zinc-100/80 py-16 dark:border-zinc-800 dark:bg-zinc-900/40"
        aria-labelledby="cta-about-heading"
      >
        <div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div class="reveal-base max-w-xl">
            <h2
              id="cta-about-heading"
              class="font-display text-2xl font-semibold text-zinc-900 dark:text-white"
            >
              Ready for an inspection or estimate?
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Tell us what you are experiencing — we will recommend the right type of appointment.
            </p>
          </div>
          <RouterLink
            to="/quote"
            class="reveal-base inline-flex rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800"
          >
            Request a Quote
          </RouterLink>
        </div>
      </section>

      <CTASection />
    </RevealSection>
  </div>
</template>
