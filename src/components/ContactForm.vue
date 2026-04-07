<script setup>
import { computed, reactive, ref } from 'vue'
import { submitContactMessage } from '@/services/contactService'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  topic: 'general',
  message: '',
})

const touched = reactive({})
const errors = reactive({})
const submitting = ref(false)
const submitError = ref('')
const success = ref(false)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.name.trim()) errors.name = 'Enter your name.'
  if (!form.email.trim()) errors.email = 'Enter your email.'
  else if (!emailRe.test(form.email.trim())) errors.email = 'Enter a valid email.'
  if (!form.message.trim() || form.message.trim().length < 8) {
    errors.message = 'Add a short message (8+ characters).'
  }
  return Object.keys(errors).length === 0
}

function touch(field) {
  touched[field] = true
}

function showError(field) {
  return Boolean(touched[field] && errors[field])
}

const isDisabled = computed(() => submitting.value || success.value)

function fieldClass(field) {
  return [
    'mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-zinc-950 dark:text-zinc-100',
    showError(field)
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20 dark:border-red-500'
      : 'border-zinc-200 focus:border-red-700 focus:ring-red-700/15 dark:border-zinc-700',
  ]
}

async function onSubmit() {
  ;['name', 'email', 'message'].forEach((k) => {
    touched[k] = true
  })
  submitError.value = ''
  if (!validate()) return
  submitting.value = true
  try {
    const result = await submitContactMessage({ ...form })
    if (!result.ok) {
      submitError.value = result.message || 'Unable to send.'
      return
    }
    success.value = true
  } catch {
    submitError.value = 'Network error. Please call the shop.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <div
      v-if="success"
      class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/40"
      role="status"
    >
      <p class="font-semibold text-emerald-900 dark:text-emerald-100">Message sent</p>
      <p class="mt-2 text-sm text-emerald-800 dark:text-emerald-200/90">
        Thank you — a member of our team will respond shortly.
      </p>
    </div>
    <form
      v-else
      class="space-y-5"
      novalidate
      @submit.prevent="onSubmit"
    >
      <p
        v-if="submitError"
        class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200"
        role="alert"
      >
        {{ submitError }}
      </p>
      <div>
        <label
          class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
          for="contact-name"
        >Name</label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          autocomplete="name"
          :disabled="isDisabled"
          :class="fieldClass('name')"
          @blur="touch('name')"
        >
        <p
          v-if="showError('name')"
          class="mt-1 text-xs text-red-700 dark:text-red-400"
        >
          {{ errors.name }}
        </p>
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            for="contact-email"
          >Email</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :disabled="isDisabled"
            :class="fieldClass('email')"
            @blur="touch('email')"
          >
          <p
            v-if="showError('email')"
            class="mt-1 text-xs text-red-700 dark:text-red-400"
          >
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            for="contact-phone"
          >Phone <span class="font-normal text-zinc-500">(optional)</span></label>
          <input
            id="contact-phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            :disabled="isDisabled"
            :class="fieldClass('phone')"
            @blur="touch('phone')"
          >
        </div>
      </div>
      <div>
        <label
          class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
          for="contact-topic"
        >Topic</label>
        <select
          id="contact-topic"
          v-model="form.topic"
          :disabled="isDisabled"
          :class="fieldClass('topic')"
          @blur="touch('topic')"
        >
          <option value="general">General inquiry</option>
          <option value="service">Service question</option>
          <option value="billing">Billing / estimate</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
          for="contact-message"
        >Message</label>
        <textarea
          id="contact-message"
          v-model="form.message"
          rows="4"
          :disabled="isDisabled"
          :class="fieldClass('message')"
          @blur="touch('message')"
        />
        <p
          v-if="showError('message')"
          class="mt-1 text-xs text-red-700 dark:text-red-400"
        >
          {{ errors.message }}
        </p>
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-red-700 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:opacity-60 sm:w-auto sm:px-8"
        :disabled="isDisabled"
      >
        {{ submitting ? 'Sending…' : 'Send message' }}
      </button>
    </form>
  </div>
</template>
