<template>
  <div id="content">
    <el-row :gutter="20">
      <!--左-->
      <el-col :span="6">
        <div class="grid-content">
          <span id="loveIcon">L<i class="el-icon-love1"></i>VE</span>
        </div>
      </el-col>
      <!--中-->
      <el-col :span="12">
        <div class="nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="home"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-menu-item index="2" @click="album"><i class="el-icon-picture"></i>相册</el-menu-item>
            <el-menu-item index="3" @click="aboutUsVisible=true"><el-avatar shape="square" size="small" :src="avatarImgUrl"/>关于我们</el-menu-item>
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
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <!--Drawer 抽屉:https://element.eleme.cn/#/zh-CN/component/drawer-->
    <el-drawer
      title="关于我们!"
      :visible.sync="aboutUsVisible"
      direction="rtl"
      size="50%"
      :with-header="false">
      <!--direction：打开方向-->
      <about-us/>
    </el-drawer>
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
      activeIndex: '1',
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
  #content{
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
  #loveIcon .el-icon-love1{
    color: #F56C6C;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0 #e6e6e6;
  }
</style>
