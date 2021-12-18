import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'enter'},
            component: () => import('./views/Login.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            meta: {layout: 'enter'},
            component: () => import('./views/Registration.vue')
        },
        {
            path: '/',
            name: 'home',
            meta: {layout: 'app'},
            component: () => import('./views/Home.vue')
        },
        {
            path: '/category',
            name: 'category',
            meta: {layout: 'app'},
            component: () => import('./views/Category.vue')
        },
        {
            path: '/detail',
            name: 'detail',
            meta: {layout: 'app'},
            component: () => import('./views/Detail.vue')
        },
        {
            path: '/history',
            name: 'history',
            meta: {layout: 'app'},
            component: () => import('./views/History.vue')
        },
        {
            path: '/planning',
            name: 'planning',
            meta: {layout: 'app'},
            component: () => import('./views/Planning.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {layout: 'app'},
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/record',
            name: 'record',
            meta: {layout: 'app'},
            component: () => import('./views/Record.vue')
        }
    ]
})