<template>
  <!--transition 进入(fade)和移除(slide-fade)动画-->
  <transition name="fade">
    <div id="app">
      <!--
        https://element.eleme.cn/#/zh-CN/component/container
        el-container: 用于布局的容器组件
          <el-header>：顶栏容器。
          <el-aside>：侧边栏容器。
          <el-main>：主要区域容器。
          <el-footer>：底栏容器。
      -->
      <video-background v-if="this.$store.state.showVideoBackground"/>
      <el-header>
        <lover-header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <lover-footer/>
      </el-footer>
    </div>
  </transition>
</template>

<script>
import VideoBackground from './components/background/VideoBackground'
import LoverHeader from './components/common/header'
import LoverFooter from './components/common/footer'
import LoverAside from './components/common/aside'
export default {
  name: 'App',
  components: {
    VideoBackground,
    LoverHeader,
    LoverAside,
    LoverFooter
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
</style>
