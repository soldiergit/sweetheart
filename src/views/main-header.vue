<template>
  <div id="content" :style="appHeaderStyle">
    <el-row :gutter="20">
      <!--左-->
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-tooltip class="item" effect="dark" content="可拖拽图片" placement="top-end">
            <!--<img :src="LoveImgUrl" class="LoveImgUrl" @mousedown="moveImg"/>-->
            <img
              draggable="true"
              v-if="loveImgUrl"
              v-on:dragstart="dragStart(loveImgUrl)"
              :src="loveImgUrl" class="LoveImg">
          </el-tooltip>
          <span id="loveIcon">L<i class="el-icon-love1"></i>VE</span>
        </div>
      </el-col>
      <!--中1-->
      <el-col :span="10">
        <div class="grid-content"></div>
      </el-col>
      <!--中2-->
      <el-col :span="8">
        <div class="nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><a href="#" @click="home"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
            <el-menu-item index="2"><a href="#" @click="album"><i class="el-icon-picture"></i>相册</a></el-menu-item>
            <el-menu-item index="3"><a href="#" @click="aboutUsVisible=true">
              <el-avatar shape="square" size="small" :src="avatarImgUrl"></el-avatar>关于我们</a>
            </el-menu-item>
            <el-submenu index="4">
              <!-- TODO:音频 -->
              <audio :src="backgroundAudioUrl" id="eventAudio"></audio>
              <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
              <el-menu-item index="4-1" @click="audioPlay">开启音乐</el-menu-item>
              <el-menu-item index="4-2" @click="audioStop">关闭音乐</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><span class="menuText"><i class="el-icon-user-solid"></i>用户</span></template>
              <el-menu-item index="5-1" @click="logoutSubmit()">
                <span class="menuText"><i class="el-icon-logout"></i>退出</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <!--右-->
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <div
          v-on:ondragenter="ondragenter"
          v-on:drop="dropImg"
          v-on:dragover="aboveTarget">
            <el-tooltip class="item" effect="dark" content="可以放下了" placement="top-end">
              <el-upload
                :action="actionUrl"
                :show-file-list="false"
                accept="image/jpeg,image/png,image/bmp">
                <img v-if="dragImgUrl" :src="dragImgUrl" class="LoveImg">
              </el-upload>
            </el-tooltip>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--Drawer 抽屉:https://element.eleme.cn/#/zh-CN/component/drawer-->
    <el-drawer
      title="关于我们!"
      :visible.sync="aboutUsVisible"
      direction="ltr"
      size="50%"
      :with-header="false">
      <!--direction：打开方向-->
      <about-us/>
    </el-drawer>
  </div>
</template>
<script>
import AboutUs from './sweetheart/about-us/about-us'
import LoveImg from '@/assets/images/love.png'
import BackgroundAudio from '@/assets/media/Taylor SwiftEd Sheeran - Everything Has Changed [mqms2] 1.mp3'
import AvatarImg from '@/assets/images/RomaticSunset.jpg'

export default {
  data () {
    return {
      appHeaderStyle: '',
      loveImgUrl: LoveImg,
      activeIndex: '1',
      backgroundAudioUrl: BackgroundAudio,
      aboutUsVisible: false,
      avatarImgUrl: AvatarImg,
      loginVisible: false,
      drawer: false,
      dialogVisible: false,
      dragImgUrl: '',
      actionUrl: ''
    }
  },
  components: {
    AboutUs,
    LoveImg
  },
  methods: {
    handleSelect () {},
    // 首页
    home () {
      this.$router.push({name: 'Home'})
    },
    // 相册列表
    album () {
      this.$router.push({name: 'Album'})
    },
    // 开启音乐
    audioPlay () {
      let backgroundMusic = document.getElementById('eventAudio')
      backgroundMusic.play()
    },
    // 关闭音乐
    audioStop () {
      let backgroundMusic = document.getElementById('eventAudio')
      backgroundMusic.pause()
    },
    // 点击登陆
    loginSubmit () {
      this.loginVisible = true
      this.$nextTick(() => {
        this.$refs.login.init()
      })
    },
    // 退出登陆
    logoutSubmit () {
      this.$store.commit('logout')
      this.$router.push('/')
    },
    // 图片被拖拽时执行
    dragStart (item) {
    },
    // 图片放下时执行
    dropImg (e) {
      e.preventDefault()
      this.loveImgUrl = ''
      this.dragImgUrl = LoveImg
    },
    // 图标到达被放置的区域时会一直执行
    aboveTarget (e) {
      e.preventDefault()
    },
    ondragenter (e) {
      console.log('在拖动的元素进入到放置目标时执行')
      e.preventDefault()
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
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  mounted: function () {
    // 屏幕自适应
    window.onresize = () => {
      // 固定导航蓝
      const windowWidth = document.body.clientWidth
      this.appHeaderStyle = {
        width: windowWidth + 'px',
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'z-index': '999999'
      }
    }
    // 主动触发，改变样式
    window.onresize()
  }
}
</script>

<style scoped>
  #content{
    background-color: rgb(84, 92, 100);
  }
  .LoveImg{
    width: 40px;
    height: 40px;
    display: inline-block; vertical-align: middle;
    /*position: relative;*/
  }
  #loveIcon{
    float: right;
    font-size: 18px;
    font-weight: bolder;/*更粗*/
    font-style: italic;/*斜体*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    text-shadow: 0.2em 0.5em 0.1em #000000;/*距离左、距离上、开始显示阴影效果，同时阴影大小为、阴影颜色*/
  }
  #loveIcon .el-icon-love1{
    color: #F56C6C;
  }
  .menuText:hover{
    color: #67C23A;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0 #e6e6e6;
  }
</style>
