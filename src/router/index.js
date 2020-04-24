import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

import findMusic from './find-music-router'
import songDetail from './song-detail-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/find-music',
        children: [
            findMusic,
            songDetail
        ]
    }
];

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
