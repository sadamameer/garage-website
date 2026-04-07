import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Northridge Auto Care | Auto Repair & Service in the GTA',
      description:
        'Certified technicians, honest diagnostics, and transparent estimates for auto repair in the Greater Toronto Area.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About Us | Northridge Auto Care',
      description:
        'Our mission, values, and commitment to transparent pricing and quality workmanship at Northridge Auto Care.',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'Services | Northridge Auto Care',
      description:
        'Brake service, oil changes, tires, alignment, diagnostics, A/C, seasonal maintenance, and more — GTA auto repair.',
    },
  },
  {
    path: '/quote',
    name: 'quote',
    component: () => import('@/views/QuoteView.vue'),
    meta: {
      title: 'Request a Quote | Northridge Auto Care',
      description:
        'Request a written estimate: share your vehicle details and service needs with Northridge Auto Care.',
    },
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('@/views/TestimonialsView.vue'),
    meta: {
      title: 'Testimonials | Northridge Auto Care',
      description:
        'Customer feedback on diagnostics, repairs, and service quality at Northridge Auto Care.',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FAQView.vue'),
    meta: {
      title: 'FAQ | Northridge Auto Care',
      description:
        'Frequently asked questions about inspections, estimates, seasonal maintenance, and payment options.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact | Northridge Auto Care',
      description:
        'Phone, email, hours, and service area for Northridge Auto Care in the GTA.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

const defaultDescription =
  'Northridge Auto Care — certified auto repair, honest diagnostics, and transparent estimates for drivers across the Greater Toronto Area.'

function setMetaDescription(content) {
  let el = document.querySelector('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

router.afterEach((to) => {
  const base = 'Northridge Auto Care'
  document.title = typeof to.meta.title === 'string' ? to.meta.title : base
  setMetaDescription(
    typeof to.meta.description === 'string' ? to.meta.description : defaultDescription,
  )
})

export default router
