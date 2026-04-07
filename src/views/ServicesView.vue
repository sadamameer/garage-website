<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import RevealSection from '@/components/RevealSection.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ServiceIcon from '@/components/ServiceIcon.vue'
import CTASection from '@/components/CTASection.vue'
import { serviceCatalog } from '@/data/serviceCatalog'

const expanded = ref(null)

function toggle(id) {
  expanded.value = expanded.value === id ? null : id
}

const details = {
  'general-repair':
    'We address mechanical failures across engine, drivetrain, and accessory systems with documented findings and prioritized recommendations.',
  brakes:
    'Brake inspections include measurement of pad and rotor condition, hose and line checks, and fluid condition where applicable.',
  'oil-change':
    'Oil and filter service uses the correct viscosity and specification for your engine, with interval guidance based on how you drive.',
  tires:
    'Tire work includes torque-to-spec lug nuts, road-force balancing when needed, and tread wear documentation.',
  alignment:
    'Alignment checks consider suspension wear and tire condition; adjustments are made to manufacturer angles where hardware allows.',
  diagnostics:
    'Diagnostics combine scan tool data with physical testing — we do not replace parts based on codes alone.',
  battery:
    'Battery testing includes load or conductance testing and verification of charging system output at the battery.',
  suspension:
    'Suspension and steering work targets noise, wander, uneven tire wear, and safety-related component condition.',
  hvac:
    'Climate control service may include leak detection, refrigerant recovery where required, and actuator or compressor diagnosis.',
  seasonal:
    'Seasonal visits focus on fluids, filters, belts, tires, and battery health relevant to upcoming weather.',
  safety:
    'Safety inspections follow a structured checklist; results are reviewed with you before any repair authorization.',
  preventive:
    'Preventive maintenance aligns with manufacturer intervals and your driving environment to reduce unplanned downtime.',
}
</script>

<template>
  <div>
    <RevealSection>
      <section
        class="border-b border-zinc-200 bg-zinc-100/90 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-20"
        aria-labelledby="services-heading"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading-id="services-heading"
            eyebrow="Services"
            title="Professional auto repair and maintenance"
            description="Straightforward categories — each visit starts with understanding your concern, inspecting the vehicle, and agreeing on next steps."
          />
        </div>
      </section>

      <section
        class="py-16 sm:py-20"
        aria-label="Service categories"
      >
        <div class="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          <article
            v-for="item in serviceCatalog"
            :key="item.id"
            class="reveal-base overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div class="flex gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-red-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-red-500"
                >
                  <ServiceIcon
                    :name="item.icon"
                    icon-class="h-6 w-6"
                  />
                </div>
                <div>
                  <h2 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                    {{ item.title }}
                  </h2>
                  <p class="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {{ item.short }}
                  </p>
                </div>
              </div>
              <button
                type="button"
                class="shrink-0 self-start rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
                :aria-expanded="expanded === item.id"
                :aria-controls="`detail-${item.id}`"
                @click="toggle(item.id)"
              >
                {{ expanded === item.id ? 'Hide detail' : 'Learn more' }}
              </button>
            </div>
            <div
              :id="`detail-${item.id}`"
              class="grid transition-[grid-template-rows] duration-300 ease-out"
              :class="expanded === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden border-t border-zinc-100 dark:border-zinc-800">
                <p class="px-6 py-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:px-6 sm:pl-[5.5rem]">
                  {{ details[item.id] || item.short }}
                </p>
                <div class="flex flex-wrap gap-3 px-6 pb-6 sm:pl-[5.5rem]">
                  <RouterLink
                    to="/quote"
                    class="text-sm font-semibold text-red-700 hover:text-red-800 dark:text-red-500"
                  >
                    Request a Quote →
                  </RouterLink>
                  <RouterLink
                    to="/contact"
                    class="text-sm font-semibold text-zinc-700 hover:text-zinc-900 dark:text-zinc-300"
                  >
                    Schedule Service →
                  </RouterLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CTASection
        eyebrow="Book service"
        title="Not sure which category fits?"
        description="Describe what you are hearing, feeling, or seeing on the dash — we will point you to the right inspection."
      />
    </RevealSection>
  </div>
</template>
