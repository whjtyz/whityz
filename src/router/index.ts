import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/Home', component: () => import('../views/Home/index.vue') },
	{ path: '/', component: () => import('@/views/Login/index.vue') },
	{ path: '/spring', component: () => import('@/views/Letter/spring.vue') },
	{ path: '/summer', component: () => import('@/views/Letter/summer.vue') },
	{ path: '/autumn', component: () => import('@/views/Letter/autumn.vue') },
	{ path: '/winter', component: () => import('@/views/Letter/winter.vue') }, 
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
