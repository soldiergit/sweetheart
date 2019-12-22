<template>
  <div>
    <div style="text-align:center;clear:both;"></div>
    <div class="BBQ">
      <div class="meat"></div>
      <div class="sausage"></div>
      <div class="corn"></div>
      <div class="waterbamboo"></div>
      <div class="shrimp"></div>
      <div class="clams"></div>
      <div class="greenpepper"></div>
      <div class="smoke"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<!--在标签上添加 scoped 属性后则变成了局部引用-->
<style scoped>
  /*@代表的是你的项目根路径*/
  @import "style.css";
</style>
