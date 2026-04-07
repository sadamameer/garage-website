<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site'

defineProps({
  eyebrow: { type: String, default: 'Ready when you are' },
  title: { type: String, default: 'Request a quote or speak with our service desk' },
  description: {
    type: String,
    default:
      'Whether it is a warning light, brake concern, or seasonal maintenance, we will outline honest options and clear pricing.',
  },
})
</script>

<template>
  <section class="relative overflow-hidden border-y border-zinc-200 bg-zinc-900 py-16 dark:border-zinc-800">
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
    >
      <div
        class="absolute -left-24 top-0 h-64 w-64 rounded-full bg-red-600/30 blur-3xl"
      />
      <div
        class="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-red-700/20 blur-3xl"
      />
    </div>
    <div class="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
      <div class="max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
          {{ eyebrow }}
        </p>
        <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-zinc-300 text-balance">
          {{ description }}
        </p>
      </div>
      <div class="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:w-auto lg:justify-end">
        <RouterLink
          to="/quote"
          class="inline-flex items-center justify-center rounded-lg bg-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800"
        >
          Request a Quote
        </RouterLink>
        <a
          :href="`tel:${site.phoneTel}`"
          class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
        >
          Call {{ site.phoneDisplay }}
        </a>
      </div>
    </div>
  </section>
</template>
