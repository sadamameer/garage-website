<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' }, // left | center
  /** For aria-labelledby on parent sections */
  headingId: { type: String, default: '' },
})
</script>

<template>
  <header
    class="max-w-3xl"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
  >
    <p
      v-if="eyebrow"
      class="reveal-base mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-500"
    >
      {{ eyebrow }}
    </p>
    <h2
      :id="headingId || undefined"
      class="reveal-base font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
      :class="align === 'center' ? 'text-balance' : ''"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="reveal-base mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
      :class="align === 'center' ? 'text-balance' : ''"
    >
      {{ description }}
    </p>
  </header>
</template>
