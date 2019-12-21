<template>
  <div>
    <div class="album">
      <!--可通过lazy开启懒加载功能，当图片滚动到可视范围内才会加载。-->
      <!--通过 previewSrcList 开启预览大图的功能-->
      <el-image v-for="url in imgList" :key="url" :src="url" :preview-src-list="imgList" lazy></el-image>
    </div>

    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="回到顶部">
      <back-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import BackTop from './back-top'
import img1 from '@/assets/images/qiuXiang/img1.jpg'
import img2 from '@/assets/images/qiuXiang/img2.jpg'
import img3 from '@/assets/images/qiuXiang/img3.jpg'
import img4 from '@/assets/images/qiuXiang/img4.jpg'
import img5 from '@/assets/images/qiuXiang/img5.jpg'
import img6 from '@/assets/images/qiuXiang/img6.jpg'
import img7 from '@/assets/images/qiuXiang/img7.jpg'
import img8 from '@/assets/images/qiuXiang/img8.jpg'
import img9 from '@/assets/images/qiuXiang/img9.jpg'
import img10 from '@/assets/images/qiuXiang/img10.jpg'
import img11 from '@/assets/images/qiuXiang/img11.jpg'
import img12 from '@/assets/images/qiuXiang/img12.jpg'
import img13 from '@/assets/images/qiuXiang/img13.jpg'
import img14 from '@/assets/images/qiuXiang/img14.jpg'
import img15 from '@/assets/images/qiuXiang/img15.jpg'
import img16 from '@/assets/images/qiuXiang/img16.jpg'
import img17 from '@/assets/images/qiuXiang/img17.jpg'
import img18 from '@/assets/images/qiuXiang/img18.jpg'
import img19 from '@/assets/images/qiuXiang/img19.jpg'
import img20 from '@/assets/images/qiuXiang/img20.jpg'
import img21 from '@/assets/images/qiuXiang/img21.jpg'
import img22 from '@/assets/images/qiuXiang/img22.jpg'
import img23 from '@/assets/images/qiuXiang/img23.jpg'
export default {
  data: function () {
    return {
      imgList: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23
      ],
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
    BackTop
  },
  // created:在模板渲染成html前调用； mounted:在模板渲染成html后调用
  mounted: function () {
    // 进入当前页面前，隐藏背景视频
    this.$store.commit('hideVideo')
  },
  // 离开当前页面前，显示背景视频居中
  beforeDestroy () {
    this.$store.commit('showVideo')
  }
}
</script>

<style scoped>
  .album{
    margin:0 auto; width:800px; border:1px solid #F00
  }
</style>
