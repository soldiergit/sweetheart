<template>
  <!-- 响应式布局:https://element.eleme.cn/2.13/#/zh-CN/component/layout-->
  <div>
    <div class="collapse navbar-collapse" id="navbar-collapse-1">
      <!-- TODO:音频 -->
      <audio :src="backgroundAudioUrl" id="eventAudio"></audio>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!--左-->
            <div id="logo">
              <span id="loveIcon">L<i class="el-icon-love1" style="color: red"></i>VE</span>
            </div>
            <!--中-->
            <div class="hidden-xs-only hidden-sm-only hidden-md-only">
              <el-submenu index="1">
                <template slot="title"><span class="menuText"><i class="el-icon-user-solid"></i>用户</span></template>
                <el-menu-item index="1-1" @click="logoutSubmit()">
                  <span class="menuText"><i class="el-icon-logout"></i>退出</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
                <el-menu-item index="2-1" @click="audioPlay"><i class="el-icon-video-play"></i>开启音乐</el-menu-item>
                <el-menu-item index="2-2" @click="audioStop"><i class="el-icon-video-pause"></i>关闭音乐</el-menu-item>
              </el-submenu>
              <el-menu-item index="3" @click="aboutUsVisible=true"><el-avatar shape="square" size="small" :src="avatarImgUrl"/>关于我们</el-menu-item>
              <el-menu-item index="4" @click="album"><i class="el-icon-picture"></i>相册</el-menu-item>
              <el-menu-item index="5" @click="diary"><i class="el-icon-document"></i>日记</el-menu-item>
              <el-menu-item index="6" @click="home"><i class="el-icon-s-home"></i>首页</el-menu-item>
            </div>
            <div class="hidden-lg-and-up" id="mini-menu">
              <el-submenu index="8">
                <template slot="title"><i class="el-icon-s-fold"></i>展开菜单</template>
                <div style="width: 40px">
                  <el-menu-item index="8-1" @click="home"><i class="el-icon-s-home"></i>首页</el-menu-item>
                  <el-menu-item index="8-2" @click="diary"><i class="el-icon-document"></i>日记</el-menu-item>
                  <el-menu-item index="8-3" @click="album"><i class="el-icon-picture"></i>相册</el-menu-item>
                  <el-menu-item index="8-4" @click="aboutUsVisible=true"><el-avatar shape="square" size="small" :src="avatarImgUrl"/>关于我们</el-menu-item>
                  <el-menu-item index="8-5" @click="audioPlay"><i class="el-icon-video-play"></i>开启音乐</el-menu-item>
                  <el-menu-item index="8-6" @click="audioStop"><i class="el-icon-video-pause"></i>关闭音乐</el-menu-item>
                  <el-menu-item index="8-7" @click="logoutSubmit()">
                    <span class="menuText"><i class="el-icon-logout"></i>退出</span>
                  </el-menu-item>
                </div>
              </el-submenu>
            </div>
          </el-menu>
        </div>
      </el-col>
      </el-row>
    </div>

    <div>
      <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
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
      </transition>
    </div>
  </div>
</template>
<script>
import AboutUs from './sweetheart/about-us/about-us'
import BackgroundAudio from '@/assets/media/Taylor SwiftEd Sheeran - Everything Has Changed [mqms2] 1.mp3'
import AvatarImg from '@/assets/images/RomaticSunset.jpg'

export default {
  data () {
    return {
      appHeaderStyle: '',
      activeIndex: '6',
      backgroundAudioUrl: BackgroundAudio,
      aboutUsVisible: false,
      avatarImgUrl: AvatarImg,
      loginVisible: false,
      drawer: false,
      dialogVisible: false
    }
  },
  components: {
    AboutUs
  },
  methods: {
    handleSelect () {},
    // 首页
    home () {
      this.$router.push({name: 'Home'})
    },
    // 日记
    diary () {
      this.$router.push({name: 'Diary'})
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
    // 点击登录
    loginSubmit () {
      this.loginVisible = true
      this.$nextTick(() => {
        this.$refs.login.init()
      })
    },
    // 退出登录
    logoutSubmit () {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .el-menu{
    line-height: 56px;
  }
  .el-menu-item{
    float: right;
  }
  .el-submenu{
    float: right;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0 #e6e6e6;
  }
  #mini-menu ul{
    width: 30px;
  }
  #logo{
    float: left;
  }
  #loveIcon{
    margin-right: 0;
    font-size: 18px;
    font-weight: bolder;/*更粗*/
    font-style: italic;/*斜体*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    text-shadow: 0.3em 0.5em 0.1em #000000;/*距离左、距离上、开始显示阴影效果，同时阴影大小为、阴影颜色*/
  }
</style>
