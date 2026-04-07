<script setup>
const steps = [
  {
    title: 'Request a Quote',
    body: 'Share your vehicle details and what you are experiencing. We respond with next steps and timing.',
  },
  {
    title: 'Vehicle Inspection',
    body: 'We inspect, test, and document findings — focused on safety, reliability, and your driving conditions.',
  },
  {
    title: 'Approval & Estimate',
    body: 'You receive a written estimate with prioritized recommendations. No surprises, no pressure.',
  },
  {
    title: 'Quality Repair & Delivery',
    body: 'Repairs are completed with quality parts and clear documentation. We review the work before you leave.',
  },
]
</script>

<template>
  <ol class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    <li
      v-for="(step, index) in steps"
      :key="step.title"
      class="reveal-base relative rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <span
        class="mb-4 inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
      >
        {{ index + 1 }}
      </span>
      <h3 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
        {{ step.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {{ step.body }}
      </p>
    </li>
  </ol>
</template>
