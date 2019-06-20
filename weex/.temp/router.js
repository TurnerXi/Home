import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Home from '@/page/home'
import Interest from '@/page/interest'
import Community from '@/page/community'
import My from '@/page/my'

Vue.use(Router)

export const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/interest', name: 'interest', component: Interest },
    { path: '/community', name: 'community', component: Community },
    { path: '/my', name: 'my', component: My },
  ]
})
