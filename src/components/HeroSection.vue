<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site'

defineProps({
  imageSrc: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=80',
  },
  imageAlt: {
    type: String,
    default: 'Technician performing vehicle service in a clean, modern service bay',
  },
})
</script>

<template>
  <section class="relative isolate overflow-hidden bg-zinc-950">
    <div class="absolute inset-0">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="h-full w-full object-cover object-center opacity-70"
        width="2000"
        height="1333"
        fetchpriority="high"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30"
        aria-hidden="true"
      />
    </div>

    <div class="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-24 pt-36 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:pb-28 lg:pt-40">
      <div class="max-w-2xl">
        <p
          class="reveal-base text-xs font-semibold uppercase tracking-[0.22em] text-red-400"
        >
          GTA · Auto repair & diagnostics
        </p>
        <h1
          class="reveal-base mt-4 font-display text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
        >
          Straight answers. Skilled repairs. A shop you can rely on.
        </h1>
        <p
          class="reveal-base mt-6 text-lg leading-relaxed text-zinc-300 text-balance"
        >
          From honest diagnostics to transparent estimates, our certified technicians focus on
          doing the job right — so you can drive with confidence through every Canadian season.
        </p>

        <div class="reveal-base mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <RouterLink
            to="/quote"
            class="inline-flex items-center justify-center rounded-lg bg-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Request a Quote
          </RouterLink>
          <a
            :href="`tel:${site.phoneTel}`"
            class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Call {{ site.phoneDisplay }}
          </a>
          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg px-2 py-3.5 text-sm font-semibold text-zinc-200 underline-offset-4 transition hover:text-white hover:underline sm:px-4"
          >
            Schedule Service
          </RouterLink>
        </div>

        <ul
          class="reveal-base mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400"
          aria-label="Service commitments"
        >
          <li class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
            Certified technicians
          </li>
          <li class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
            Transparent pricing
          </li>
          <li class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
            Realistic turnaround times
          </li>
        </ul>
      </div>

      <div
        class="reveal-base w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-2xl backdrop-blur-md lg:mb-2"
      >
        <p class="text-sm font-medium text-white">Book an inspection</p>
        <p class="mt-2 text-sm leading-relaxed text-zinc-400">
          Tell us what you are noticing — noise, warning light, or scheduled maintenance. We will
          review your vehicle and walk you through options before any work begins.
        </p>
        <RouterLink
          to="/quote"
          class="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
        >
          Start with a quote
        </RouterLink>
      </div>
    </div>
  </section>
</template>
