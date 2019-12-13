<template>
  <!--视频-->
  <div class="homepage-hero-module">
    <div class="video-container">
      <!--视频上方显示内容-->
      <div :style="fixStyle" class="filter">
        <Qiuxiang/>
      </div>
      <!--autoplay：自动播放 loop：当媒介文件完成播放后再次开始播放 muted：静音  v-on:指令监听DOM事件，并在触发时运行一些JavaScript代码  -->
      <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
        <!--视频的路径必须这么写，否则视频不会播放-->
        <source src="../../assets/video/RomaticSunset.mp4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <source src="../../assets/video/dashan.mp4" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <!--如果不支持video，则显示图片-->
      <div class="poster hidden" v-if="!videoCanPlay">
        <img :style="fixStyle" :src="PATH_TO_JPEG" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Qiuxiang from './Qiuxiang'
import PATH_TO_JPEG from '@/assets/images/logo.png'
export default {
  name: 'VideoBackground',
  data: function () {
    return {
      PATH_TO_JPEG: PATH_TO_JPEG,
      videoCanPlay: false,
      fixStyle: ''
    }
  },
  components: {
    Qiuxiang
  },
  methods: {
    canplay () {
      this.videoCanPlay = true
    }
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  mounted: function () {
    // 屏幕自适应
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          width: windowWidth + 'px',
          // 高度减去900刚好
          height: windowWidth * 0.5625 - 900 + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          // 高度减去900刚好
          height: windowHeight - 900 + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  }
}
</script>

<style scoped>
  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img{
    z-index: 0;
    position: absolute;
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
  }

  .fillWidth {
    width: 100%;
  }
</style>
