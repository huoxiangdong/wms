import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: Root,
      children: [{
        path: '',
        component: () => import('./views/Entry.vue')
      },{
        path: '/stockout',
        component: () => import('./views/Stockout.vue')
      }]
    },

  ]
})