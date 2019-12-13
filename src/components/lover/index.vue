<template>
  <div id="page">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item  v-for="(item, index) in imgList" :key="index">
        <!--<div class="hot-bg" style="text-align: center;line-height: 100px;color:#acacac;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">{{item.desc}}</div>-->
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <div id="body">
      <div class="header">
      </div>
      <div class="body">
        <h2><a href="books.html">books</a></h2>
        <ul>
          <li>
            <a href="books.html"><img :src="Book1" alt=""></a>
          </li>
          <li>
            <a href="books.html"><img :src="Book2" alt=""></a>
          </li>
          <li>
            <a href="books.html"><img :src="Book3" alt=""></a>
          </li>
          <li>
            <a href="books.html"><img :src="Book4" alt=""></a>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div>
          <h3><a href="about.html">about</a></h3>
          <img src="@/assets/images/girl.jpg" alt="">
          <p>
            This is just a place holder, so you can see what the site would look like. This is just a place holder.<a href="about.html" class="more">(more)</a>
          </p>
        </div>
        <div>
          <h3><a href="blog.html">blog</a></h3>
          <p>
            This is just a place holder, so you can see what the site would look like. This is just a place holder.<a href="blog.html" class="more">(more)</a> <span>- Leah, Apr. 1 2012</span>
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
import LoverImg1 from '@/assets/images/woman.jpg'
import LoverImg2 from '@/assets/images/dashan.jpg'
import LoverImg3 from '@/assets/images/street-walk.jpg'
import Book1 from '@/assets/images/happy-days.jpg'
import Book2 from '@/assets/images/tourist.jpg'
import Book3 from '@/assets/images/out-fairytale.jpg'
import Book4 from '@/assets/images/philip.jpg'

export default {
  name: 'index',
  data: function () {
    return {
      imgList: [
        {src: LoverImg1, desc: '描述1'},
        {src: LoverImg2, desc: '描述1'},
        {src: LoverImg3, desc: '描述1'}
      ],
      Book1: Book1,
      Book2: Book2,
      Book3: Book3,
      Book4: Book4
    }
  }
}
</script>

<style>
  #page{
    padding: 0;
  }
  .header{
  }
</style>
