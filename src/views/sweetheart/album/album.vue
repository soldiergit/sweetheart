<template>
  <div>
    <!--瀑布流图片-->
    <div id="albumContent">
      <div id="content">
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
          <div class="img-info" slot-scope="props">
            <p class="some-info">第{{props.index+1}}张图片</p>
            <p class="some-info">{{props.value.info}}</p>
          </div>
        </vue-waterfall-easy>
      </div>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from './vue-waterfall-easy/vue-waterfall-easy.vue'
import axios from 'axios'
export default {
  name: 'album',
  data () {
    return {
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
      pullDownDistance: 0
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData () {
      axios.get('./static/mock/album-data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
        .then(res => {
          this.group++
          if (this.group === 10) { // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver()
            return
          }
          this.imgsArr = this.imgsArr.concat(res.data)
        })
    },
    clickFn (event, { index, value }) {
      // event.preventDefault()
      if (event.target.tagName.toLowerCase() === 'img') {
        console.log('img clicked', index, value)
      }
    },
    imgErrorFn (imgItem) {
      console.log('图片加载错误', imgItem)
    },
    changeImgArr () {
      axios.get('./static/mock/album-data-change.json') // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
        .then(res => {
          this.imgsArr = res.data
        })
    },
    pullDownMove (pullDownDistance) {
      // console.log('pullDownDistance', pullDownDistance)
      this.pullDownDistance = pullDownDistance
    },
    pullDownEnd (pullDownDistance) {
      console.log('pullDownEnd')
      if (this.pullDownDistance > 50) {
        alert('下拉刷新')
      }
      this.pullDownDistance = 0
    }
  },
  created () {
    this.getData()

    // 删除某个卡片
    // setTimeout(()=>{
    //   this.imgsArr.splice(1,1)
    // },2000)
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  mounted: function () {
    // 进入当前页面前，隐藏背景视频
    this.$store.commit('hideVideo')
  },
  beforeDestroy () {
    // 离开当前页面前，显示背景视频
    this.$store.commit('showVideo')
  }
}
</script>

<!--sass转css网址 https://www.sassmeister.com/-->
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }
  a:active {
    color: #000;
  }
  #albumContent {
    height: 100vh;
    position: fixed;
    left: 0;
    bottom: 20px
  }

  #albumContent #content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  #albumContent {
    overflow: auto;
    position: relative;
  }
  #albumContent .some-info {
    line-height: 1.6;
    text-align: center;
  }
</style>
