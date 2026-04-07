<script setup>
import { computed, reactive, ref } from 'vue'
import { submitQuoteRequest } from '@/services/quoteService'
import { quoteServiceOptions } from '@/data/serviceCatalog'

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  serviceNeeded: '',
  preferredDate: '',
  message: '',
})

const touched = reactive({})
const errors = reactive({})
const submitting = ref(false)
const submitError = ref('')
const success = ref(false)

const fieldIds = {
  fullName: 'quote-full-name',
  email: 'quote-email',
  phone: 'quote-phone',
  vehicleMake: 'quote-make',
  vehicleModel: 'quote-model',
  vehicleYear: 'quote-year',
  serviceNeeded: 'quote-service',
  preferredDate: 'quote-date',
  message: 'quote-message',
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[\d\s().+-]{10,}$/

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])

  if (!form.fullName.trim()) errors.fullName = 'Enter your full name.'
  if (!form.email.trim()) errors.email = 'Enter your email address.'
  else if (!emailRe.test(form.email.trim())) errors.email = 'Enter a valid email address.'
  if (!form.phone.trim()) errors.phone = 'Enter a phone number we can reach you on.'
  else if (!phoneRe.test(form.phone.replace(/\s/g, ''))) errors.phone = 'Use a valid phone number (digits and optional formatting).'
  if (!form.vehicleMake.trim()) errors.vehicleMake = 'Enter the vehicle make.'
  if (!form.vehicleModel.trim()) errors.vehicleModel = 'Enter the vehicle model.'
  const y = String(form.vehicleYear).trim()
  const yi = parseInt(y, 10)
  const current = new Date().getFullYear()
  if (!y) errors.vehicleYear = 'Enter the model year.'
  else if (!/^\d{4}$/.test(y) || yi < 1980 || yi > current + 1) {
    errors.vehicleYear = `Use a 4-digit year between 1980 and ${current + 1}.`
  }
  if (!form.serviceNeeded) errors.serviceNeeded = 'Select the service you need.'
  if (!form.preferredDate) errors.preferredDate = 'Choose a preferred appointment date.'
  if (!form.message.trim() || form.message.trim().length < 12) {
    errors.message = 'Describe the issue in at least a few words (12+ characters).'
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

async function onSubmit() {
  Object.keys(form).forEach((k) => {
    touched[k] = true
  })
  submitError.value = ''
  if (!validate()) return

  submitting.value = true
  try {
    const result = await submitQuoteRequest({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      vehicleMake: form.vehicleMake.trim(),
      vehicleModel: form.vehicleModel.trim(),
      vehicleYear: String(form.vehicleYear).trim(),
      serviceNeeded: form.serviceNeeded,
      preferredDate: form.preferredDate,
      message: form.message.trim(),
    })
    if (!result.ok) {
      submitError.value = result.message || 'Something went wrong. Please try again.'
      return
    }
    success.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch {
    submitError.value = 'Network error. Please call the shop or try again shortly.'
  } finally {
    submitting.value = false
  }
}

function fieldClass(field) {
  return [
    'mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600',
    showError(field)
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20 dark:border-red-500 dark:focus:ring-red-500/25'
      : 'border-zinc-200 focus:border-red-700 focus:ring-red-700/15 dark:border-zinc-700 dark:focus:border-red-500 dark:focus:ring-red-500/20',
  ]
}
</script>

<template>
  <div>
    <div
      v-if="success"
      class="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/40"
      role="status"
      aria-live="polite"
    >
      <p class="font-display text-xl font-semibold text-emerald-900 dark:text-emerald-100">
        We received your request
      </p>
      <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-800 dark:text-emerald-200/90">
        Our service desk will review your details and follow up by phone or email. If this is urgent,
        please call the shop directly.
      </p>
    </div>

    <form
      v-else
      class="space-y-6"
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

      <div class="grid gap-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.fullName"
          >Full name</label>
          <input
            :id="fieldIds.fullName"
            v-model="form.fullName"
            type="text"
            autocomplete="name"
            :class="fieldClass('fullName')"
            :disabled="isDisabled"
            @blur="touch('fullName')"
          >
          <p
            v-if="showError('fullName')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.fullName }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.email"
          >Email address</label>
          <input
            :id="fieldIds.email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :class="fieldClass('email')"
            :disabled="isDisabled"
            @blur="touch('email')"
          >
          <p
            v-if="showError('email')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.email }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.phone"
          >Phone number</label>
          <input
            :id="fieldIds.phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            placeholder="(905) 555-0198"
            :class="fieldClass('phone')"
            :disabled="isDisabled"
            @blur="touch('phone')"
          >
          <p
            v-if="showError('phone')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.phone }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.vehicleMake"
          >Vehicle make</label>
          <input
            :id="fieldIds.vehicleMake"
            v-model="form.vehicleMake"
            type="text"
            autocomplete="organization"
            :class="fieldClass('vehicleMake')"
            :disabled="isDisabled"
            @blur="touch('vehicleMake')"
          >
          <p
            v-if="showError('vehicleMake')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.vehicleMake }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.vehicleModel"
          >Vehicle model</label>
          <input
            :id="fieldIds.vehicleModel"
            v-model="form.vehicleModel"
            type="text"
            :class="fieldClass('vehicleModel')"
            :disabled="isDisabled"
            @blur="touch('vehicleModel')"
          >
          <p
            v-if="showError('vehicleModel')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.vehicleModel }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.vehicleYear"
          >Vehicle year</label>
          <input
            :id="fieldIds.vehicleYear"
            v-model="form.vehicleYear"
            type="text"
            inputmode="numeric"
            maxlength="4"
            :class="fieldClass('vehicleYear')"
            :disabled="isDisabled"
            @blur="touch('vehicleYear')"
          >
          <p
            v-if="showError('vehicleYear')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.vehicleYear }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.serviceNeeded"
          >Service needed</label>
          <select
            :id="fieldIds.serviceNeeded"
            v-model="form.serviceNeeded"
            :class="fieldClass('serviceNeeded')"
            :disabled="isDisabled"
            @blur="touch('serviceNeeded')"
          >
            <option
              v-for="opt in quoteServiceOptions"
              :key="String(opt.value) + opt.label"
              :value="opt.value"
              :disabled="opt.value === ''"
            >
              {{ opt.label }}
            </option>
          </select>
          <p
            v-if="showError('serviceNeeded')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.serviceNeeded }}
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.preferredDate"
          >Preferred appointment date</label>
          <input
            :id="fieldIds.preferredDate"
            v-model="form.preferredDate"
            type="date"
            :class="fieldClass('preferredDate')"
            :disabled="isDisabled"
            @blur="touch('preferredDate')"
          >
          <p
            v-if="showError('preferredDate')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.preferredDate }}
          </p>
        </div>

        <div class="sm:col-span-2">
          <label
            class="text-sm font-medium text-zinc-800 dark:text-zinc-200"
            :for="fieldIds.message"
          >Describe the issue</label>
          <textarea
            :id="fieldIds.message"
            v-model="form.message"
            rows="5"
            :class="fieldClass('message')"
            :disabled="isDisabled"
            placeholder="Symptoms, warning lights, recent repairs, or maintenance due…"
            @blur="touch('message')"
          />
          <p
            v-if="showError('message')"
            class="mt-1.5 text-xs font-medium text-red-700 dark:text-red-400"
          >
            {{ errors.message }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-lg bg-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="isDisabled"
        >
          <span v-if="submitting">Sending…</span>
          <span v-else>Submit request</span>
        </button>
        <p class="text-xs text-zinc-500 dark:text-zinc-500">
          By submitting, you agree we may contact you about this request. We do not sell your information.
        </p>
      </div>
    </form>
  </div>
</template>
