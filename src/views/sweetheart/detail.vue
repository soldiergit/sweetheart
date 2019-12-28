<template>
  <el-dialog
    width="80%"
    v-loading="dataListLoading"
    :visible.sync="visible">
    <el-row>
      <el-col :span="8">
        <barbecue @click.native="wantDo()"/>
      </el-col>
      <el-col :span="16">
        <p>有些路很远，走下去会很累。可是，不走，会后悔。</p>
        <p>能和你拍张照片嘛？因为我想证明天使是存在的！</p>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import Barbecue from '../common/animation/barbecue/barbecue'

export default {
  data () {
    return {
      visible: false,
      dataListLoading: false
    }
  },
  components: {
    Barbecue
  },
  methods: {
    init () {
      this.visible = true
      this.dataListLoading = true
      this.dataListLoading = false
    },
    wantDo () {
      // const h = this.$createElement
      this.$notify.error({
        title: '提示',
        message: '其实我想和你一起也野炊烧烤一次，哈哈。'
      })
    }
  }
}
</script>
<style scoped>
  .txt p:first-letter{
    color: #FFFFFF;
    font-size:150%;
  }
</style>
