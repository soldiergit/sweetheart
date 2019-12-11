<template>
  <div id="content">
    <el-row :gutter="20">
      <!--左-->
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img :src="LoverImg" class="LoverImg" @mousedown="moveImg" alt="拖动" ref="拖拽"/>
          <span id="loverIcon">L<i class="el-icon-love1"></i>VER</span>
        </div>
      </el-col>
      <!--中-->
      <el-col :span="18">
        <div class="nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-s-platform"></i>我的工作台</template>
              <el-menu-item index="1-1" @click="loginSubmit()">登入后台</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
              <el-menu-item index="2-1" @click="audioplay">开启音乐</el-menu-item>
              <el-menu-item index="2-1" @click="audiostop">关闭音乐</el-menu-item>
            </el-submenu>
            <el-menu-item index="4"><a href="#" @click="drawer = true"><i class="el-icon-picture"></i>相册</a></el-menu-item>
            <el-menu-item index="3"><a href="#" @click="home"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <!--右-->
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <login v-if="loginVisible" ref="login"></login>
  </div>
</template>
<script>

import Login from './login'
import LoverImg from '@/assets/images/lover.png'
export default {
  data () {
    return {
      info: false,
      loginVisible: false,
      drawer: false,
      dialogVisible: false,
      activeIndex: '1',
      LoverImg: LoverImg
    }
  },
  components: {
    Login,
    LoverImg
  },
  methods: {
    handleSelect () {},
    home () {
      this.$router.push('/')
    },
    audioplay () {
      let btnAdo = document.getElementById('eventAudio')
      btnAdo.play()
    },
    audiostop () {
      let btnAdo = document.getElementById('eventAudio')
      btnAdo.pause()
    },
    loginSubmit () {
      this.loginVisible = true
      this.$nextTick(() => {
        this.$refs.login.init()
      })
    },
    moveImg (e) {
      let odiv = e.target // 获取目标元素
      // 阻止默认事件的方法,如果不阻止默认事件onmouseup会无法触发
      e.preventDefault()
      // 算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft
      let disY = e.clientY - odiv.offsetTop
      document.onmousemove = (e) => {
        // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        // 因为img居中对齐，所以还要减去目标元素距离body的偏移量
        let left = e.clientX - disX - odiv.offsetLeft
        let top = e.clientY - disY
        // 移动当前元素
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style scoped>
  #content{
    background-color: rgb(84, 92, 100);
    /*固定导航兰*/
    width:100%;position:fixed;top:0;left:0;z-index: 999999
  }
  .LoverImg{
    width: 40px;
    height: 40px;
    /*垂直居中*/
    display: inline-block; vertical-align: middle;
    position: relative;
  }
  #loverIcon{
    float: right;
    font-size: 18px;
    font-weight: bolder;/*更粗*/
    font-style: italic;/*斜体*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    /*https://www.w3.org/Style/Examples/007/text-shadow*/
    text-shadow: 0.2em 0.5em 0.1em #000000;/*距离左、距离上、开始显示阴影效果，同时阴影大小为、阴影颜色*/
  }
  #loverIcon .el-icon-love1{
    color: #F56C6C;
  }
  .el-menu-item{
    float: right;
  }
  .el-submenu{
    float: right;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
  }
  >>>.el-drawer__header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #72767b;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0px;
    padding: 0px 0px ;
  }
</style>
