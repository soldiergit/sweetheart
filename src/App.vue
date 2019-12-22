<template>
  <!--transition 进入(fade)和移除(slide-fade)动画-->
  <transition name="fade">
    <div id="app">
      <template v-if="this.$store.state.logonStatus">
        <el-container>
          <el-header><main-header/></el-header>
          <main-background v-if="this.$store.state.showVideoBackground"/>
          <el-main><router-view/></el-main>
          <el-footer><main-footer/></el-footer>
        </el-container>
      </template>
      <template v-else>
        <router-view/>
      </template>
    </div>
  </transition>
</template>

<script>
import mainBackground from './views/main-background'
import MainHeader from './views/main-header'
import MainFooter from './views/main-footer'

export default {
  components: {
    mainBackground,
    MainHeader,
    MainFooter
  },
  data: function () {
    return {
    }
  }
}
</script>

<!--在标签上添加 scoped 属性后则变成了局部引用-->
<style scoped>
  .el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
