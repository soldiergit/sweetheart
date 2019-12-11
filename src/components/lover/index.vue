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
            <a href="books.html"><img src="@/assets/images/happy-days.jpg" alt=""></a>
          </li>
          <li>
            <a href="books.html"><img src="@/assets/images/tourist.jpg" alt=""></a>
          </li>
          <li>
            <a href="books.html"><img src="@/assets/images/out-fairytale.jpg" alt=""></a>
          </li>
          <li>
            <a href="books.html"><img src="@/assets/images/philip.jpg" alt=""></a>
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
    <div id="footer">
      <ul>
        <li class="twitter">
          <a href="#">twitter</a>
        </li>
        <li class="facebook">
          <a href="#">facebook</a>
        </li>
        <li class="googleplus">
          <a href="#">googleplus</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      imgList: [
        {src: '/static/images/woman.jpg', desc: '描述1'},
        {src: '/static/images/woman.jpg', desc: '描述1'},
        {src: '/static/images/woman.jpg', desc: '描述1'}
        // {src: '@/assets/images/woman.jpg', desc: '描述2'}
      ]
    }
  }
}
</script>

<style>
  #page{
    padding: 10px;
  }
  .header{
  }
</style>
