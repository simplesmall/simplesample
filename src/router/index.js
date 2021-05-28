import Vue from 'vue'
import Router from 'vue-router'

import dispatch from '../components/dispatch'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dispatch',
      component: dispatch
    }, {
      path: '/details',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
