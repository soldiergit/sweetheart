/* 2019-12-12 09:02:31 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { // 要设置的全局访问的state对象,要设置的初始属性值
  logonStatus: false,
  showVideoBackground: true,
  changableNum: 0
  // this.$store.state.logonStatus
}

const store = new Vuex.Store({
  state: state,
  getters: { // 实时监听state值的变化(最新状态)
    getStatus (state) { // 方法名随意,主要是来承载变化的logonStatus的值
      return state.logonStatus
    },
    getVideoBackground (state) {
      return state.showVideoBackground
    },
    getChangedNum () {
      return state.changableNum
    }
  },
  mutations: { // mutattions也是一个对象，这个对象里面可以放改变state的初始值的方法，但Mutation 必须是同步函数
    signIn (state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
      state.logonStatus = true
    },
    logout (state) {
      state.logonStatus = false
    },
    hideVideo (state) {
      state.showVideoBackground = false
    },
    showVideo (state) {
      state.showVideoBackground = true
    },
    newNum (state, sum) { // 同上，这里面的参数除了state之外还传了需要增加的值sum
      state.changableNum += sum
    }
    /* 这时候你完全可以用 this.$store.commit('show') 或 this.$store.commit('hide') 以及 this.$store.commit('newNum',6)
    在别的组件里面进行改变logonStatus和changebleNum的值了 */
  },
  actions: {// Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
    userSignIn (context) { // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
      context.commit('signIn')
    },
    getNewNum (context, num) { // 同上注释，num为要变化的形参
      context.commit('newNum', num)
    }
  }
})
export default store
