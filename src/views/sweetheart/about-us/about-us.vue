<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
      <el-timeline-item>
        <el-tooltip class="item" effect="dark" content="2019/12/14 我们第一次一起坐火车，不过前一天没休息好，好累阿。
        不过她就坐在我身旁，嘻嘻，原来列车里的空气也可以那么清新，这个世界真美好！" placement="top-start">
          <train class="trainClass"/>
        </el-tooltip>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import Train from '../../common/animation/train/train'
export default {
  name: 'AboutUs',
  data: function () {
    return {
      activities: [{
        content: '我第一次遇见她，真好看！发誓一定要追到手，我太坏了。',
        timestamp: '2018-11-23',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-video-camera-solid'
      }, {
        content: '为了追她，我每天都去找她，每天给她折一个爱心，嘻嘻。今天还送给我了圣诞礼物，emmm，我感觉她应该也对我有好感！',
        timestamp: '2018-12-25 23:08',
        size: 'large'
      }, {
        content: '我们还没在一起，但是我拿了她的初吻（强行，哈哈哈）。',
        timestamp: '2019-01-06 21:46',
        size: 'large',
        type: 'danger',
        icon: 'el-icon-s-opportunity'
      }, {
        content: '怎么形容我今天的心情呢！啊啊啊，无法用言语表达了，她答应和我在一起了！！！',
        timestamp: '2019-01-07',
        color: '#0bbd87'
      }, {
        content: '在一起快一年了，虽然磕磕碰碰，但是我不能离开她，今天是11个月纪念日，我是爱她的一天！',
        timestamp: '2019-12-07 00:20'
      }]
    }
  },
  components: {
    Train
  }
}
</script>

<style scoped>
  .trainClass{
  }
</style>
