import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 登录
      name: 'Login',
      component: resolve => require(['@/views/common/login'], resolve)
    }, {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/views/sweetheart/home'], resolve)
    },
    {
      path: '/diary', // 日记
      name: 'Diary',
      component: resolve => require(['@/views/sweetheart/diary/diary'], resolve)
    },
    {
      path: '/album', // 相册
      name: 'Album',
      component: resolve => require(['@/views/sweetheart/album/album'], resolve)
    }
  ]
})
