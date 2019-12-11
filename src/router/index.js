import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/common/main'
import Lover from '@/components/lover/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/lover',
      component: Lover
    }
  ]
})
