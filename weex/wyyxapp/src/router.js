/* global Vue */
import Router from 'vue-router'
import Home from '@/page/Home'
import Topic from '@/page/Topic'
import Catalog from '@/page/Catalog'
import Shopcart from '@/page/Shopcart'
import My from '@/page/My'

Vue.use(Router)

export const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/topic', name: 'topic', component: Topic },
    { path: '/catalog', name: 'catalog', component: Catalog },
    { path: '/shopcart', name: 'shopcart', component: Shopcart },
    { path: '/my', name: 'my', component: My }
  ]
})
