<template>
    <div>
      <div class="center">
        <div class="mountains"></div>
        <div class="train">
          <div class="engine-front">
            <div class="chimney">
              <div class="smoke"></div>
              <div class="smoke smoke-2"></div>
              <div class="smoke smoke-3"></div>
              <div class="smoke smoke-4"></div>
            </div>
          </div>

          <div class="engine-body"></div>

          <div class="compartment">
            <div class="compartment-window"></div>
          </div>

          <div class="compartment compartment-two">
            <div class="compartment-window"></div>
          </div>

          <div class="compartment compartment-three">
            <div class="compartment-window"></div>
          </div>

          <div class="wheel-holder">
            <div class="wheel"></div>
            <div class="wheel wheel-2">
              <div class="wheel-joint"></div>
              <div class="wheel-joint wheel-joint-2"></div>
            </div>
            <div class="wheel wheel-3"></div>
            <div class="wheel wheel-4"></div>
            <div class="wheel wheel-5"></div>
            <div class="wheel wheel-6"></div>
            <div class="wheel wheel-7"></div>
            <div class="wheel wheel-8"></div>
            <div class="wheel wheel-9"></div>
          </div>
        </div>
        <div class="bridge"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Train',
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
