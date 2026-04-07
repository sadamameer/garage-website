<script setup>
import ServiceIcon from '@/components/ServiceIcon.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <article
    class="reveal-base group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
  >
    <div
      class="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-red-700 transition group-hover:border-red-200 group-hover:bg-red-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-red-500 dark:group-hover:border-red-900/50 dark:group-hover:bg-red-950/30"
    >
      <ServiceIcon :name="icon" icon-class="h-6 w-6" />
    </div>
    <h3 class="mt-5 font-display text-lg font-semibold text-zinc-900 dark:text-white">
      {{ title }}
    </h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>
    <div class="mt-5">
      <slot name="footer" />
    </div>
  </article>
</template>
