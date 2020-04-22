import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Main from '@/views/main/main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/main',
        children: [
            {
                path: '/main',
                name: 'main',
                component: Main,
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
