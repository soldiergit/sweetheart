import Vue from 'vue'
import Router from 'vue-router'
import Lover from '@/components/lover/index'
import Album from '@/components/lover/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Lover
    },
    {
      path: '/album',
      component: Album
    }
  ]
})
