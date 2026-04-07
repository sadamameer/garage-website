<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site'
import { serviceCatalog } from '@/data/serviceCatalog'

const quick = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/quote', label: 'Request a Quote' },
  { to: '/contact', label: 'Contact' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    role="contentinfo"
  >
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-zinc-900"
            >NA</span>
            <span class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
              {{ site.name }}
            </span>
          </RouterLink>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {{ site.tagline }}
          </p>
          <div class="mt-6 flex gap-3">
            <a
              :href="site.social.facebook"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              aria-label="Facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" class="text-xs font-semibold">f</span>
            </a>
            <a
              :href="site.social.instagram"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              aria-label="Instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" class="text-xs font-semibold">in</span>
            </a>
            <a
              :href="site.social.google"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              aria-label="Google Maps"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" class="text-xs font-semibold">M</span>
            </a>
          </div>
        </div>

        <div class="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Quick links
            </p>
            <ul class="mt-4 space-y-2 text-sm">
              <li
                v-for="l in quick"
                :key="l.to"
              >
                <RouterLink
                  :to="l.to"
                  class="text-zinc-700 transition hover:text-red-700 dark:text-zinc-300 dark:hover:text-red-500"
                >{{ l.label }}</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Services
            </p>
            <ul class="mt-4 space-y-2 text-sm">
              <li
                v-for="s in serviceCatalog.slice(0, 6)"
                :key="s.id"
              >
                <RouterLink
                  to="/services"
                  class="text-zinc-700 transition hover:text-red-700 dark:text-zinc-300 dark:hover:text-red-500"
                >{{ s.title }}</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Contact
            </p>
            <ul class="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <a
                  :href="`tel:${site.phoneTel}`"
                  class="font-semibold transition hover:text-red-700 dark:hover:text-red-500"
                >{{ site.phoneDisplay }}</a>
              </li>
              <li>
                <a
                  :href="`mailto:${site.email}`"
                  class="transition hover:text-red-700 dark:hover:text-red-500"
                >{{ site.email }}</a>
              </li>
              <li class="leading-relaxed">
                {{ site.addressLine1 }}<br>
                {{ site.city }}, {{ site.province }} {{ site.postal }}<br>
                {{ site.country }}
              </li>
            </ul>
            <div class="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
              <p class="font-semibold text-zinc-900 dark:text-white">Hours</p>
              <p class="mt-2">{{ site.hours.weekdays }}</p>
              <p>{{ site.hours.saturday }}</p>
              <p>{{ site.hours.sunday }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500 md:flex-row md:items-center md:justify-between"
      >
        <p>{{ site.serviceArea }}</p>
        <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
