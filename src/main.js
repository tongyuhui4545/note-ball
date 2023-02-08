import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import ViewNotes from '@/views/viewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'

import './assets/main.css'

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path:'/',
            name:'notes',
            component: ViewNotes
        },
        {
            path:'/stats',
            name:'stats',
            component: ViewStats
        },
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app');


