<script setup>
import RevealSection from '@/components/RevealSection.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import CTASection from '@/components/CTASection.vue'
import { faqItems } from '@/data/faq'
</script>

<template>
  <div>
    <RevealSection>
      <section
        class="border-b border-zinc-200 bg-zinc-100/90 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-20"
        aria-labelledby="faq-page-heading"
      >
        <div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p class="reveal-base text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-500">
            FAQ
          </p>
          <h1
            id="faq-page-heading"
            class="reveal-base mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Common questions
          </h1>
          <p class="reveal-base mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Practical answers about inspections, estimates, and how we work with customers day to day.
          </p>
        </div>
      </section>

      <section
        class="py-16 sm:py-20"
        aria-label="Frequently asked questions"
      >
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion :items="faqItems" />
        </div>
      </section>

      <CTASection
        eyebrow="Still unsure?"
        title="Call the shop or request a quote online"
        description="If your question is vehicle-specific, a quick conversation often saves time."
      />
    </RevealSection>
  </div>
</template>
