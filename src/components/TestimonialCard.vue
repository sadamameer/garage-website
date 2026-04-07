<script setup>
defineProps({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  detail: { type: String, default: '' },
  rating: { type: Number, default: 5 },
})
</script>

<template>
  <figure
    class="reveal-base flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
  >
    <div class="flex gap-0.5 text-amber-500" aria-label="Rating: 5 out of 5">
      <span
        v-for="n in 5"
        :key="n"
        class="text-amber-500"
        :class="n > rating ? 'opacity-25' : ''"
        aria-hidden="true"
      >
        ★
      </span>
    </div>
    <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
      “{{ quote }}”
    </blockquote>
    <figcaption class="mt-6 border-t border-zinc-100 pt-4 text-sm dark:border-zinc-800">
      <span class="font-semibold text-zinc-900 dark:text-white">{{ name }}</span>
      <span
        v-if="detail"
        class="mt-0.5 block text-zinc-500 dark:text-zinc-500"
      >{{ detail }}</span>
    </figcaption>
  </figure>
</template>
