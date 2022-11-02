import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: () => import('../views/Home/index.vue') },
	{ path: '/Login', component: () => import('@/views/Login/index.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
