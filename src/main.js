// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'
// 自定义图标
import './assets/font-icon/iconfont.css'
// vuex管理全局变量、全局方法
import store from './store/store'

Vue.use(ElementUI)

Vue.config.productionTip = false

//  第二步：路由判断登录 根据路由配置文件的参数（第二步在router/index.js）
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (localStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
})
