<template>
    <div class="qiuxiang">
      <p>我闻西方大士，</p>
      <p>为人了却凡心。</p>
      <p>秋来明月照蓬门，</p>
      <p>香满禅房幽径。</p>
      <p>屈指灵山会后，</p>
      <p>居然紫竹成林。</p>
      <p>童男童女拜观音，</p>
      <p>仆仆何嫌荣顿？</p>
    </div>
</template>

<script>
export default {
  name: 'Qiuxiang',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  .qiuxiang{
    position: absolute;
    left: 50%;
    top: 20%;
    margin-left: -50px;
    margin-top: -50px;
    color: #C0C4CC;
  }
  p:first-letter {
    color: #FFFFFF;
    font-size:150%;
  }
</style>
