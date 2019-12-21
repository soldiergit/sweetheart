<template>
  <div>
    <sweetheart-index/>
  </div>
</template>

<script>
import SweetheartIndex from './index'
import mainBackground from '../main-background'
import MainHeader from '../main-header'
import MainFooter from '../main-footer'

export default {
  components: {
    SweetheartIndex,
    mainBackground,
    MainHeader,
    MainFooter
  },
  data: function () {
    return {
    }
  },
  methods: {
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  created: function () {
    if (!this.$store.state.logonStatus) {
      this.$router.push('/')
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

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
</style>
