<template>
  <div id="app">
    <div class="nav">
      <van-tabs v-model="activeName" swipeable animated>
        <van-tab v-for="p in project" :key="p.id" :title="p.name" :name="p.id">
          <van-collapse v-if="p.id === '3'" v-model="activeNames">
            <van-collapse-item title="方案1" name="1">内容1</van-collapse-item>
            <van-collapse-item title="方案2" name="2">内容</van-collapse-item>
            <van-collapse-item title="方案3" name="3">内容</van-collapse-item>
            <van-collapse-item title="方案4" name="4">内容</van-collapse-item>
            <van-collapse-item title="方案5" name="5">内容2</van-collapse-item>
            <van-collapse-item title="方案6" name="6">内容</van-collapse-item>
          </van-collapse>
          <div v-if="p.id === '5'" class="data">
            <h6 style="text-align: center;">灵敏度调式</h6>
            <van-slider v-model="value" :min="0" :max="10" active-color="#ee0a24">
              <template #button>
                <div class="custom-button">{{ value }}</div>
              </template>
            </van-slider>
            <div class="num">
              <van-field v-model="number" type="number" label="自由度选择">
                <template #button>
                  <van-stepper v-model="number" theme="round" button-size="22" disable-input />
                </template>
              </van-field>
              <van-button @click="confirm" type="info">确认保存</van-button>
            </div>
          </div>
          <van-icon class="add" name="add-o" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      value: 4,
      number: 1,
      project: [
        { id: '1', name: '未选' },
        { id: '2', name: '未选方案' },
        { id: '3', name: '工艺方案' },
        { id: '4', name: '调配方案' },
        { id: '5', name: '设备参数' }
      ],
      activeNames: ['1'],
      activeName: '3'
    }
  },
  methods: {
    confirm() {
      Toast.success('保存成功');
    },
  }
}
</script>
<style lang="scss">
.add{
  display: block;
  margin: 10vh auto;
  width: 50px;
  height: 50px;
  color: #656464;
    font-size: 50px;
    img{
      width: 100%;
    }
}
.van-slider {
  margin: 50px auto;
  height: 5px;
  width: 85vw;
}

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
