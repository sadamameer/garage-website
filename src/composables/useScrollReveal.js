import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Observes a root element and toggles .is-revealed on children with .reveal-base.
 */
export function useScrollReveal() {
  const rootRef = ref(null)
  let observer

  onMounted(() => {
    const root = rootRef.value
    if (!root || typeof IntersectionObserver === 'undefined') {
      root?.querySelectorAll('.reveal-base').forEach((el) => el.classList.add('is-revealed'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    root.querySelectorAll('.reveal-base').forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { rootRef }
}
