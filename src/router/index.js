import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //  不是用docker部署第二步：添加两个key『mode和base--是用来打包到服务器的』，docker时去掉(第一步在config/index.js的build)
  //  第三步：npm run build；在tomcat的webapps下新建『sweetheart』文件夹，将dist下的static和index.html复制进去即可
  // mode: 'history',
  // base: '/sweetheart/',
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
