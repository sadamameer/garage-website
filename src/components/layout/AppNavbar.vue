<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { site } from '@/config/site'

const route = useRoute()
const mobileOpen = ref(false)

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  },
)

watch(mobileOpen, (open) => {
  document.body.classList.toggle('overflow-hidden', open)
})

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden')
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <RouterLink
        to="/"
        class="group flex items-center gap-2 focus-visible:outline-offset-4"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-zinc-900"
        >NA</span>
        <span class="flex flex-col leading-tight">
          <span class="font-display text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
            {{ site.name }}
          </span>
          <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Auto repair · GTA
          </span>
        </span>
      </RouterLink>

      <nav
        class="hidden items-center gap-1 lg:flex"
        aria-label="Primary"
      >
        <RouterLink
          v-for="link in nav"
          :key="link.to"
          v-slot="{ isActive, href, navigate }"
          :to="link.to"
          custom
        >
          <a
            :href="href"
            class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            :class="
              isActive
                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white'
                : ''
            "
            @click="navigate"
          >{{ link.label }}</a>
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <a
          :href="`tel:${site.phoneTel}`"
          class="hidden text-sm font-semibold text-zinc-800 transition hover:text-red-700 xl:inline dark:text-zinc-200 dark:hover:text-red-500"
        >
          {{ site.phoneDisplay }}
        </a>
        <ThemeToggle />
        <RouterLink
          to="/quote"
          class="hidden rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 sm:inline-flex"
        >
          Request a Quote
        </RouterLink>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-800 transition hover:bg-zinc-50 lg:hidden dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          aria-label="Open menu"
          @click="mobileOpen = true"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="mobileOpen"
          class="fixed inset-0 z-[60] bg-zinc-950/60 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          @click="mobileOpen = false"
        />
      </Transition>
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="mobileOpen"
          id="mobile-nav"
          class="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,380px)] flex-col border-l border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div class="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
            <span class="font-display text-sm font-semibold text-zinc-900 dark:text-white">Menu</span>
            <button
              type="button"
              class="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              aria-label="Close menu"
              @click="mobileOpen = false"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav
            class="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
            aria-label="Mobile primary"
          >
            <RouterLink
              v-for="link in nav"
              :key="link.to"
              v-slot="{ isActive, href, navigate }"
              :to="link.to"
              custom
            >
              <a
                :href="href"
                class="rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
                :class="isActive ? 'bg-zinc-100 dark:bg-zinc-900' : ''"
                @click="navigate"
              >{{ link.label }}</a>
            </RouterLink>
            <RouterLink
              to="/quote"
              class="mx-1 mt-4 rounded-xl bg-red-700 px-4 py-3 text-center text-base font-semibold text-white"
              @click="mobileOpen = false"
            >
              Request a Quote
            </RouterLink>
            <a
              :href="`tel:${site.phoneTel}`"
              class="mx-1 mt-2 rounded-xl border border-zinc-200 px-4 py-3 text-center text-base font-semibold text-zinc-900 dark:border-zinc-800 dark:text-white"
            >
              Call {{ site.phoneDisplay }}
            </a>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
