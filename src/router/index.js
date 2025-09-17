import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/public/HomePage.vue'),
    }
  ],
scrollBehavior(to, from, savedPosition) {
  // Always scroll to top, but wait for the next tick to ensure DOM is ready
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
  })
}
})

export default router