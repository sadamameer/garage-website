<script setup>
import { RouterLink } from 'vue-router'
import RevealSection from '@/components/RevealSection.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import CTASection from '@/components/CTASection.vue'
import { testimonials } from '@/data/testimonials'
</script>

<template>
  <div>
    <RevealSection>
      <section
        class="border-b border-zinc-200 bg-zinc-100/90 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-20"
        aria-labelledby="testimonials-page-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="reveal-base text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-500">
            Testimonials
          </p>
          <h1
            id="testimonials-page-heading"
            class="reveal-base mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Feedback from drivers across the GTA
          </h1>
          <p class="reveal-base mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            We are proud of the relationships we build. These notes reflect typical experiences — edited for privacy and
            brevity.
          </p>
        </div>
      </section>

      <section
        class="py-16 sm:py-20"
        aria-label="Customer testimonials"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-6 md:grid-cols-2">
            <TestimonialCard
              v-for="(t, i) in testimonials"
              :key="i"
              :quote="t.quote"
              :name="t.name"
              :detail="t.detail"
              :rating="t.rating"
            />
          </div>
          <p class="reveal-base mt-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Ready to book?
            <RouterLink
              to="/quote"
              class="font-semibold text-red-700 hover:text-red-800 dark:text-red-500"
            >Request a Quote</RouterLink>
            or
            <RouterLink
              to="/contact"
              class="font-semibold text-zinc-800 hover:text-zinc-900 dark:text-zinc-200"
            >contact the service desk</RouterLink>.
          </p>
        </div>
      </section>

      <CTASection />
    </RevealSection>
  </div>
</template>
