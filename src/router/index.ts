import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/Home', component: () => import('../views/Home/index.vue') },
	{ path: '/', component: () => import('@/components/Weather/sakura/sakura.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
