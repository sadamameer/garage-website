<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import RevealSection from '@/components/RevealSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import TrustBar from '@/components/TrustBar.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import StatsSection from '@/components/StatsSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import CTASection from '@/components/CTASection.vue'
import { serviceCatalog } from '@/data/serviceCatalog'
import { faqItems } from '@/data/faq'
import { testimonials } from '@/data/testimonials'
import { site } from '@/config/site'

const featured = computed(() => serviceCatalog.slice(0, 6))
const faqPreview = computed(() => faqItems.slice(0, 4))
const testimonialPreview = testimonials.slice(0, 4)

const stats = [
  { value: '18+', label: 'Years serving GTA drivers' },
  { value: '24k+', label: 'Vehicles serviced in-shop' },
  { value: '4.9 / 5', label: 'Average post-service rating' },
  { value: '62%', label: 'Customers who return within 12 months' },
]

const whyPoints = [
  {
    title: 'Experienced technicians',
    body: 'Our team trains continuously on modern vehicle systems — from advanced driver assists to hybrid components.',
  },
  {
    title: 'Clear estimates',
    body: 'You approve work before we proceed. Estimates are itemized so you can prioritize what matters most.',
  },
  {
    title: 'Reliable repairs',
    body: 'We stand behind workmanship with a straightforward warranty conversation at pickup — no fine print games.',
  },
  {
    title: 'Customer-first service',
    body: 'We explain findings in plain language, respect your time, and keep you updated if timelines change.',
  },
]
</script>

<template>
  <div>
    <RevealSection>
      <HeroSection />
      <TrustBar />

      <!-- Featured services -->
      <section
        class="py-20 sm:py-24"
        aria-labelledby="featured-services-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading-id="featured-services-heading"
            eyebrow="What we do"
            title="Complete care for daily drivers and family vehicles"
            description="From brake service and oil changes to diagnostics and seasonal maintenance — structured processes, quality parts, and honest recommendations."
          />
          <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              v-for="item in featured"
              :key="item.id"
              :title="item.title"
              :description="item.short"
              :icon="item.icon"
            >
              <template #footer>
                <RouterLink
                  to="/services"
                  class="text-sm font-semibold text-red-700 transition hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                >
                  View all services →
                </RouterLink>
              </template>
            </ServiceCard>
          </div>
        </div>
      </section>

      <!-- Why choose us -->
      <section
        class="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-24"
        aria-labelledby="why-heading"
      >
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div class="reveal-base order-2 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-xl dark:border-zinc-800 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80"
              alt="Technician reviewing diagnostics with attention to detail"
              class="h-full w-full object-cover opacity-90"
              width="1200"
              height="900"
              loading="lazy"
            >
          </div>
          <div class="order-1 lg:order-2">
            <SectionHeader
              heading-id="why-heading"
              eyebrow="Why Northridge"
              title="Built for drivers who want clarity, not pressure"
              description="We run a modern shop with old-school integrity: fix what needs fixing, prove what we found, and treat your vehicle like it is carrying what matters most."
            />
            <ul class="mt-10 space-y-6">
              <li
                v-for="point in whyPoints"
                :key="point.title"
                class="reveal-base flex gap-4"
              >
                <span
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-bold text-red-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-red-500"
                  aria-hidden="true"
                >✓</span>
                <div>
                  <p class="font-display font-semibold text-zinc-900 dark:text-white">
                    {{ point.title }}
                  </p>
                  <p class="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {{ point.body }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <StatsSection :stats="stats" />

      <!-- Process -->
      <section
        class="py-20 sm:py-24"
        aria-labelledby="process-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading-id="process-heading"
            eyebrow="How it works"
            title="A calm, transparent process from first call to pickup"
            description="No guesswork — you always know where things stand."
            align="center"
            class="mx-auto"
          />
          <div class="mt-14">
            <ProcessSection />
          </div>
        </div>
      </section>

      <!-- Testimonials preview -->
      <section
        class="border-y border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950 sm:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              heading-id="testimonials-heading"
              eyebrow="Client feedback"
              title="What drivers say after their visit"
              description="Real language from real appointments — edited only for privacy."
            />
            <RouterLink
              to="/testimonials"
              class="text-sm font-semibold text-red-700 transition hover:text-red-800 dark:text-red-500"
            >
              Read all testimonials →
            </RouterLink>
          </div>
          <div
            class="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
          >
            <div
              v-for="(t, i) in testimonialPreview"
              :key="i"
              class="min-w-[min(100%,320px)] shrink-0 snap-center sm:min-w-0"
            >
              <TestimonialCard
                :quote="t.quote"
                :name="t.name"
                :detail="t.detail"
                :rating="t.rating"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ preview -->
      <section
        class="py-20 sm:py-24"
        aria-labelledby="faq-preview-heading"
      >
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading-id="faq-preview-heading"
            eyebrow="FAQ"
            title="Answers to common questions"
            description="Straightforward information before you book."
            align="center"
            class="mx-auto"
          />
          <div class="mt-10">
            <FAQAccordion :items="faqPreview" />
          </div>
          <p class="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            <RouterLink
              to="/faq"
              class="font-semibold text-red-700 hover:text-red-800 dark:text-red-500"
            >View full FAQ</RouterLink>
          </p>
        </div>
      </section>

      <!-- Local trust -->
      <section
        class="border-t border-zinc-200 bg-zinc-100/80 py-20 dark:border-zinc-800 dark:bg-zinc-900/40 sm:py-24"
        aria-labelledby="local-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div class="reveal-base">
              <h2
                id="local-heading"
                class="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white"
              >
                Local shop values for Ontario roads
              </h2>
              <p class="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {{ site.serviceArea }} We understand salt, potholes, and rapid temperature swings — and how they affect
                brakes, suspension, batteries, and tires. Seasonal maintenance and winter readiness are part of how we help
                you stay predictable on the road.
              </p>
              <ul class="mt-8 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <li class="flex gap-2">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                    aria-hidden="true"
                  />
                  Winter tire changeover and storage coordination by appointment
                </li>
                <li class="flex gap-2">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                    aria-hidden="true"
                  />
                  Battery and charging system checks before deep cold sets in
                </li>
                <li class="flex gap-2">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                    aria-hidden="true"
                  />
                  Honest guidance on what can wait — and what should not
                </li>
              </ul>
            </div>
            <div
              class="reveal-base overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Service desk
              </p>
              <p class="mt-3 font-display text-xl font-semibold text-zinc-900 dark:text-white">
                Prefer to talk it through?
              </p>
              <p class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Call with your VIN handy if you have it — we will help you understand options and book the right type of
                inspection.
              </p>
              <a
                :href="`tel:${site.phoneTel}`"
                class="mt-6 inline-flex rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Call {{ site.phoneDisplay }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </RevealSection>
  </div>
</template>
