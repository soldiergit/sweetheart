<template>
  <div>
    <div id="cell">
      <section class="content index-content">
        <ul>
          <li v-for="(item, index) in contentText" :key="index">
            <section class="article-info cf">
              <a class="author-index"><img class="fl" :src="item.authorPic" alt=""/></a>
              <div class="">
                <span class="author">{{item.author}}</span>
                <span class="fr date">{{item.time}}</span>
              </div>
            </section>
            <a>
              <img class="article-pic" :src="item.articlePic" alt="">
              <h3>{{item.h3Text}}</h3>
              <p>{{item.pText}}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>

    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="回到顶部">
      <back-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import BackTop from '../album/back-top'
import ImgHead from '@/assets/images/head.png'
import articlePic1 from '@/assets/images/qiuXiang/diary1.jpg'
import articlePic2 from '@/assets/images/qiuXiang/diary2.jpg'
import articlePic3 from '@/assets/images/qiuXiang/diary3.jpg'
import articlePic4 from '@/assets/images/qiuXiang/diary4.jpg'

export default {
  components: {
    BackTop
  },
  data: function () {
    return {
      contentText: [
        {authorPic: ImgHead, author: '黄结', time: '2019-4-4 天气 晴', articlePic: articlePic1, h3Text: '关键字：围巾', pText: '奈不过我的“死缠烂打”，我终于收到了她织的围巾，可惜天公不作美，天气有点热，不适合穿，在能等到明年冬天了...'},
        {authorPic: ImgHead, author: '黄结', time: '2019-4-19 天气 晴', articlePic: articlePic2, h3Text: '关键字：快递', pText: '我经常喊饿 虽然再三强调不要给我买东西，但是我还是收到了4大箱吃的——虽然嘴上这么说，但心里还是美滋滋滴～'},
        {authorPic: ImgHead, author: '黄结', time: '2019-6-12 天气 雨', articlePic: articlePic3, h3Text: '关键字：火龙果', pText: '前两天她给了我一个火龙果，一直没舍得吃，不过她的东西真是好东西阿，太好吃了(果然午睡后尿红了)'},
        {authorPic: ImgHead, author: '黄结', time: '2019-6-22 天气 晴', articlePic: articlePic4, h3Text: '关键字：野餐布', pText: '现在已经是凌晨了，今晚又一次带上她和她做的菜去野餐，既然我不洗碗，那我一定要把这块布洗得香香的～'}
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

<style scoped>
  /*@代表的是你的项目根路径*/
  @import "diary.css";

  #cell {
    -webkit-display:flex;
    display:flex;
    -webkit-align-items:center;
    align-items:center;
    -webkit-justify-content:center;
    justify-content:center;
    border:1px solid #ccc;
  }
</style>
