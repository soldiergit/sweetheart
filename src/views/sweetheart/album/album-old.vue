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

    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="回到顶部">
      <back-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import VueWaterfallEasy from 'vue-waterfall-easy'
import BackTop from './back-top'
export default {
  data: function () {
    return {
      imgsArr: [],
      fetchImgsArr: [],
      imgList: [],
      previewImgList: [],
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      }
    }
  },
  components: {
    BackTop,
    VueWaterfallEasy
  },
  methods: {
    initImgList (n, m) {
      var arr = []
      for (var i = n; i < m; i++) {
        arr.push({ id: i, src: require(`../../../assets/images/qiuXiang/img${i + 1}.jpg`), link: 'https://www.baidu.com', info: '一些图片描述文字' })
        // this.imgList.push({ src: require(`../../../assets/images/qiuXiang/img${i + 1}.jpg`), text: '生日', time: '2019-10-30' })
        // this.previewImgList.push(require(`../../../assets/images/qiuXiang/img${i + 1}.jpg`))
      }
      return arr
    },

    fetchImgsData () {
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
    },
    // 投票按钮
    upLoadTicket (index) {
      console.log(index)
    }
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  created: function () {
    this.imgsArr = this.initImgList(0, 5)
    this.fetchImgsArr = this.initImgList(5, 10) // 模拟每次请求的新的图片的数据数据
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  mounted: function () {
    // 进入当前页面前，隐藏背景视频
    this.$store.commit('hideVideo')
    // this.initImgList(0, 23)
  },
  beforeDestroy () {
    // 离开当前页面前，显示背景视频
    this.$store.commit('showVideo')
  }
}
</script>

<style scoped>
  #content{
    position: absolute;    /*必须*/
    top:32px;              /*top必须，大小可控制*/
    bottom:0;              /*bottom必须，一直延申到当前块底部*/
    width:100%;
  }
  .tableBox{
    display: table;
  }
  #imgBox{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #666;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
