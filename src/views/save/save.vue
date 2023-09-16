<template>
  <div id="app">
    <div class="nav">
      <div class="colum">
        <Columnar></Columnar>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="昨天-机器人A" name="1">内容1</van-collapse-item>
        <van-collapse-item title="昨天-设计迭代方案" name="2">内容</van-collapse-item>
        <van-collapse-item title="9月16" name="3">内容</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import Columnar from '@/components/Charts/ColumnarChart.vue'
export default {
  components: {Columnar},
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    confirm() {
      Toast.success('保存成功')
    }
  }
}
</script>
<style lang="scss">

.van-button {
    display: block;
    margin: 30vh auto;
}

.van-stepper {}

.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
}

svg {
    vertical-align: middle;
}

.mydialog {
    width: 30%;
    height: 30%;
    overflow: scroll;

    input {}
}

// 当鼠标移动到表格中的某一行时，才显示操作按钮
</style>

