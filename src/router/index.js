import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 第一步：增加了字段 requireAuth 用来判断该路由是否需要登录（第二步在main.js）
export default new Router({
  routes: [
    {
      path: '/', // 登录
      name: 'Login',
      component: resolve => require(['@/views/common/login'], resolve)
    }, {
      path: '/home',
      name: 'Home',
      meta: {
        requireAuth: true // 判断是否需要登录
      },
      component: resolve => require(['@/views/sweetheart/home'], resolve)
    },
    {
      path: '/album', // 相册
      name: 'Album',
      meta: {
        requireAuth: true // 判断是否需要登录
      },
      component: resolve => require(['@/views/sweetheart/album/album'], resolve)
    }
  ]
})
