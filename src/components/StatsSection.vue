<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
    // { value, label }
  },
})
</script>

<template>
  <section class="border-y border-zinc-200 bg-zinc-100/80 py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      <div
        v-for="(s, i) in stats"
        :key="i"
        class="reveal-base text-center lg:text-left"
      >
        <p class="font-display text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {{ s.value }}
        </p>
        <p class="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {{ s.label }}
        </p>
      </div>
    </div>
  </section>
</template>
