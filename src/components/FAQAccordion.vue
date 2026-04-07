<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
    // { id, question, answer }
  },
})

const openId = ref(null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40">
    <div
      v-for="item in items"
      :key="item.id"
      class="reveal-base"
    >
      <h3>
        <button
          type="button"
          :id="`faq-${item.id}-header`"
          class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-800/50 sm:px-6 sm:py-5 sm:text-base"
          :aria-expanded="openId === item.id"
          :aria-controls="`faq-${item.id}-panel`"
          @click="toggle(item.id)"
        >
          {{ item.question }}
          <span
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
            aria-hidden="true"
          >
            <svg
              class="h-4 w-4 transition"
              :class="openId === item.id ? 'rotate-180' : ''"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        :id="`faq-${item.id}-panel`"
        role="region"
        :aria-labelledby="`faq-${item.id}-header`"
        class="grid transition-[grid-template-rows] duration-300 ease-out"
        :class="openId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden">
          <p class="px-5 pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:px-6 sm:pb-6">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
