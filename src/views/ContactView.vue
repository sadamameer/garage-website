<script setup>
import { RouterLink } from 'vue-router'
import ContactForm from '@/components/ContactForm.vue'
import RevealSection from '@/components/RevealSection.vue'
import { site } from '@/config/site'
</script>

<template>
  <div>
    <RevealSection>
      <section
        class="border-b border-zinc-200 bg-zinc-100/90 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-20"
        aria-labelledby="contact-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="reveal-base text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-500">
            Contact
          </p>
          <h1
            id="contact-heading"
            class="reveal-base mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Visit, call, or send a message
          </h1>
          <p class="reveal-base mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {{ site.serviceArea }} Winter tire appointments and seasonal readiness fill quickly — reach out early if you
            are planning a changeover.
          </p>
        </div>
      </section>

      <section
        class="py-16 sm:py-20"
        aria-label="Contact information and form"
      >
        <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div class="reveal-base space-y-8 lg:col-span-5">
            <div class="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Service desk
              </h2>
              <ul class="mt-4 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
                <li>
                  <span class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</span>
                  <a
                    :href="`tel:${site.phoneTel}`"
                    class="mt-1 inline-block font-semibold text-red-700 hover:text-red-800 dark:text-red-500"
                  >{{ site.phoneDisplay }}</a>
                </li>
                <li>
                  <span class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</span>
                  <a
                    :href="`mailto:${site.email}`"
                    class="mt-1 inline-block hover:text-red-700 dark:hover:text-red-500"
                  >{{ site.email }}</a>
                </li>
                <li>
                  <span class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Address</span>
                  <span class="mt-1 block leading-relaxed">
                    {{ site.addressLine1 }}<br>
                    {{ site.city }}, {{ site.province }} {{ site.postal }}<br>
                    {{ site.country }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h2 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Hours
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {{ site.hours.weekdays }}<br>
                {{ site.hours.saturday }}<br>
                {{ site.hours.sunday }}
              </p>
            </div>
            <div
              class="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-800/40"
              role="region"
              aria-label="Map placeholder"
            >
              <div class="aspect-[16/10] w-full bg-[length:24px_24px] bg-[linear-gradient(to_right,rgb(228_228_231/0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgb(228_228_231/0.7)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(63_63_70/0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(63_63_70/0.5)_1px,transparent_1px)]">
                <div class="flex h-full flex-col items-center justify-center p-6 text-center">
                  <p class="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Map embed placeholder
                  </p>
                  <p class="mt-2 max-w-xs text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Replace this block with your Google Maps or Mapbox embed. Coordinates for
                    {{ site.city }} can be dropped in at launch.
                  </p>
                  <a
                    :href="site.social.google"
                    class="mt-4 text-xs font-semibold text-red-700 hover:underline dark:text-red-500"
                    rel="noopener noreferrer"
                    target="_blank"
                  >Open in Google Maps →</a>
                </div>
              </div>
            </div>
          </div>
          <div class="reveal-base lg:col-span-7">
            <div class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
              <h2 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Send a message
              </h2>
              <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                For appointment changes or general questions. For vehicle-specific estimates, use
                <RouterLink
                  to="/quote"
                  class="font-semibold text-red-700 hover:underline dark:text-red-500"
                >Request a Quote</RouterLink>.
              </p>
              <div class="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  </div>
</template>
