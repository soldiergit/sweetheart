<template>
  <div id="page">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in carouselImg" :key="index">
        <el-tooltip class="item" effect="dark" :content="item.desc" placement="top">
          <img :src="item.src" alt="">
        </el-tooltip>
      </el-carousel-item>
    </el-carousel>
    <div id="body">
      <div class="header">
      </div>
      <div class="body">
        <h2><a href="#">{{bodyText}}</a></h2>
        <ul>
          <li v-for="(item, index) in bodyImg" :key="index">
            <el-tooltip class="item" effect="dark" :content="item.desc" placement="top">
              <a href="#" @click="album"><img :src="item.src" alt=""></a>
            </el-tooltip>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div>
          <h3><a href="#">she</a></h3>
          <img :src="SheSmallImg" alt="">
          <p>
            {{describeHer}}
          </p>
        </div>
        <div>
          <h3><a href="#">I think</a></h3>
          <p>
            <!--<a href="blog.html" class="more">(more)</a> -->
            {{oath}}<span>- Leah, December 18, 2019</span>
          </p>
        </div>
      </div>
    </div>
    <!--<div id="footer">-->
      <!--<ul>-->
        <!--<li class="twitter">-->
          <!--<a href="#">twitter</a>-->
        <!--</li>-->
        <!--<li class="facebook">-->
          <!--<a href="#">facebook</a>-->
        <!--</li>-->
        <!--<li class="googleplus">-->
          <!--<a href="#">googleplus</a>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>
import UsImg1 from '@/assets/images/qiuXiang/us1.png'
import UsImg2 from '@/assets/images/qiuXiang/us2.png'
import UsImg3 from '@/assets/images/qiuXiang/us3.png'
import UsImg4 from '@/assets/images/qiuXiang/us4.png'
import UsSmallImg1 from '@/assets/images/qiuXiang/qiuxiangSmall1.png'
import UsSmallImg2 from '@/assets/images/qiuXiang/qiuxiangSmall2.png'
import UsSmallImg3 from '@/assets/images/qiuXiang/qiuxiangSmall3.png'
import UsSmallImg4 from '@/assets/images/qiuXiang/qiuxiangSmall4.png'
import SheSmallImg from '@/assets/images/qiuXiang/SHE.png'

export default {
  name: 'index',
  data: function () {
    return {
      carouselImg: [
        {src: UsImg1, desc: '在风吹你的散发时，我简直着魔了：在闪闪发光的披肩柔发中，在淡淡入鬓的蛾眉问，在碧水漓漓的眼睛里，你竟是如此美丽可人！'},
        {src: UsImg2, desc: '青翠的柳丝，怎能比及你的秀发；碧绿涟漪，怎能比及你的眸子；有时，我凝视床头你那张玉照，简直觉得整个世界都永远沉浸在明媚的春光之中。'},
        {src: UsImg3, desc: '当你视线变得模糊，不用担心太多，因为我会成为你的眼睛指引着你。'},
        {src: UsImg4, desc: 'Look at the stars, look how they shine for you.'}
      ],
      bodyImg: [
        {src: UsSmallImg1, desc: 'This is Li Qiuxiang`s birthday'},
        {src: UsSmallImg2, desc: 'The future life we are looking forward to'},
        {src: UsSmallImg3, desc: 'This is my birthday'},
        {src: UsSmallImg4, desc: 'She said it was her little happiness'}
      ],
      bodyText: 'mine',
      describeHer: '山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝！',
      oath: 'I love you not because of who you are, but because of who I am when I am with you.' +
        'To the world you may be one person, but to one person you may be the world. ',
      SheSmallImg: SheSmallImg
    }
  },
  methods: {
    album () {
      this.$router.push('/album')
    }
  }
}
</script>

<!--在标签上添加 scoped 属性后则变成了局部引用-->
<style scoped>
  /*@代表的是你的项目根路径*/
  /*@import "../../assets/css/style.css";*/
  #page{
    padding: 0;
  }
  .header{
  }
</style>
