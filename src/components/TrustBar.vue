<script setup>
const items = [
  { label: 'Certified Technicians', icon: 'badge' },
  { label: 'Honest Diagnostics', icon: 'search' },
  { label: 'Quality Parts', icon: 'parts' },
  { label: 'Transparent Pricing', icon: 'doc' },
  { label: 'Fast Turnaround', icon: 'clock' },
]
</script>

<template>
  <section
    class="border-y border-zinc-200/80 bg-white/90 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/90"
    aria-label="Trust highlights"
  >
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
      <div
        v-for="item in items"
        :key="item.label"
        class="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-red-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-red-500"
          aria-hidden="true"
        >
          <svg
            v-if="item.icon === 'badge'"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M12 15c-3.3 0-6-2.25-6-5V5l6-2 6 2v5c0 2.75-2.7 5-6 5z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <svg
            v-else-if="item.icon === 'search'"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg
            v-else-if="item.icon === 'parts'"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M4 7h16M4 12h10M4 17h16" />
          </svg>
          <svg
            v-else-if="item.icon === 'doc'"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M8 13h8M8 17h6" />
          </svg>
          <svg
            v-else
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </span>
        {{ item.label }}
      </div>
    </div>
  </section>
</template>
