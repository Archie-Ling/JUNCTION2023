<template>
  <div id="app">
    <van-swipe style="height: 600px;" vertical loop="false">
      <van-swipe-item style="height:600px; width: 100vw;">
        <div id="main" ref="main" style="width: 100vw; height:600px" />
      </van-swipe-item>
      <van-swipe-item style="height: 600px;">
        <pie-chart
        :pie-data="chart1data"
        top-title="能源消耗"
        center-title="总消耗：666kwh"
      /></van-swipe-item>
      <van-swipe-item style="height: 600px;"><pie-chart
        :pie-data="chart2data"
        top-title="碳排放"
        center-title="总排放：666t"
      /></van-swipe-item>
      <van-swipe-item style="height: 600px;"><line-chart /></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// import * as echarts from 'echarts'
import axios from 'axios'
import PieChart from '@/components/Charts/PieChart.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import * as echarts from 'echarts'
export default {
  components: { PieChart, LineChart },
  data() {
    return {
      activeNames: 1,
      searchText: '',
      tableData: [], // 表格数据
      currentPage: 1, // 当前页
      pageSize: 5, // 每页显示条数
      total: 20, // 总条数
      showAddressColumn: false,
      chart1data: [
        {
          value: 463,
          name: '流程一'
        },
        {
          value: 395,
          name: '流程二'
        },
        {
          value: 157,
          name: '流程三'
        },
        {
          value: 149,
          name: '流程四'
        }],
      chart2data: [
        {
          value: 234,
          name: '流程一'
        },
        {
          value: 543,
          name: '流程二'
        },
        {
          value: 852,
          name: '流程三'
        },
        {
          value: 66,
          name: '流程四'
        }]
    }
  },
  created() {
    this.search()
  },
  mounted() {
    this.$nextTick(() => {
      this.test()
      this.slideBanner()
    })
  },
  methods: {
    slideBanner() {
      var box = document.querySelector('.el-carousel__container')
      var startPoint = 0
      var stopPoint = 0
      var resetPoint = function() {
        startPoint = 0
        stopPoint = 0
      }
      box.addEventListener('touchstart', function(e) {
        startPoint = e.changedTouches[0].pageY
      })
      box.addEventListener('touchmove', function(e) {
        stopPoint = e.changedTouches[0].pageY
      })
      box.addEventListener('touchend', function(e) {
        console.log('1：' + startPoint)
        console.log('2：' + stopPoint)
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint()
          return
        }
        if (startPoint - stopPoint > 0) {
          resetPoint()
          this.$refs.mycarousel.next()
          return
        }
        if (startPoint - stopPoint < 0) {
          resetPoint()
          console.log(this.$refs.mycarousel)
          this.$refs.mycarousel.prev()
          return
        }
      })
    },
    test() {
      var myChart = echarts.init(document.getElementById('main'))
      // const myChart = echarts.init(this.$refs.main) // 我们可以这样写
      //
      const time = (function() { // 立即执行函数
        let now = new Date() // 获得当前的时间
        const res = [] // 存放时间的数组
        let len = 5 // 要存几个时间？
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, '')) // 转换时间，大家可以打印出来看一下
          now = new Date(+now - 2000) // 延迟几秒存储一次？
        }
        return res
      })()
      const dataOne = (function() { // 5个随机数
        const res = []
        let len = 5
        while (len--) {
          res.push(Math.floor(Math.random() * 18) + 25)
        }
        return res.filter(num => num >= 25 && num <= 42) // 过滤掉不在范围内的随机数
      })()

      const dataTwo = (function() { // 5个随机数
        const res = []
        let len = 5
        while (len--) {
          res.push(Math.floor(Math.random() * 18) + 25)
        }
        return res.filter(num => num >= 25 && num <= 42) // 过滤掉不在范围内的随机数
      })()

      // 配置项，可以去查一下官方文档
      const options = {
        title: {
          text: '设备温度',
          textStyle: {
            color: 'black'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {},
        xAxis: {
          type: 'category',
          data: time, // 把时间组成的数组接过来，放在x轴上
          boundaryGap: true
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: dataOne,
            type: 'line',
            name: '测试一',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          },
          {
            data: dataTwo,
            name: '测试二',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          }
        ]
      }
      setInterval(function() {
        const nowTime = new Date().toLocaleTimeString().replace(/^\D*/, '')
        time.shift()
        time.push(nowTime)
        dataOne.shift()
        dataOne.push(Math.floor(Math.random() * 18) + 25)
        dataTwo.shift()
        dataTwo.push(Math.floor(Math.random() * 18) + 25)
        // console.log(dataOne)
        // 很多朋友可能要接后端接口,把数据替换下来既可以了
        // axios.get('你的url').then(res => {
        //   console.log(res)
        // })
        myChart.setOption({
          xAxis: [
            {
              data: time
            }
          ],
          series: [
            {
              data: dataOne
            },
            {
              data: dataTwo
            }
          ]
        })
      }, 2000)
      myChart.setOption(options)
    },
    handleSumChartData(data) {
      var sum = 0
      data.forEach(item => {
        sum += item.value
      })
      return sum
    },
    // 分页组件连接后端api

    // 表格行点击事件 并带参跳转到details.vue页面
    handleRowClick(row) {
      this.$router.push({
        path: '/details/details',
        query: {
          title: row.title,
          pdfPages: row.pdfPages,
          score: row.score,
          createtime: row.createtime,
          pdfId: row.pdfId,
          searchString: this.searchText
        }
      })
      console.log('跳转到详情页')
    },

    // 搜索
    search() {
      // 调用后端API接口进行搜索
      const searchString = this.searchText
      const pageNo = this.currentPage
      const pageSize = this.pageSize
      const userId = 3
      const docId = 0
      const searchType = 1
      const url = 'http://192.168.43.61:8081/search/' + searchString + '/' + pageNo + '/' + pageSize + '/' + userId + '/' + docId + '/' + searchType

      axios.get(url, null).then(response => {
        // 处理搜索结果
        this.tableData = response.data.data.list
        this.total = response.data.data.count
        console.log(this.total)
        // 返回分页信息 total
        // this.total = 20
      }).catch(error => {
        // 处理错误
        console.log(error)
      })
      console.log('搜索' + this.searchText)
      console.log(url + 'url')
    },
    germinate() {
      const searchString = this.searchText
      const url = 'http://192.168.43.61:8081/chatGpt/ask/' + searchString
      axios.get(url).then(response => {
        // 处理搜索结果
        this.searchText = response.data
        console.log(this.searchText)
        // 返回分页信息 total
      }).catch(error => {
        // 处理错误
        console.log(error)
      })
    },
    // 搜索框回车事件
    enterSearch() {
      this.search()
    },
    // 点击分页器中的每页显示数量，触发size-change事件，调用handleSizeChange()方法
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.search()
    },
    // 点击分页器中的页码，触发current-change事件，调用handleCurrentChange()方法
    handleCurrentChange(pageNo) {
      this.currentPage = pageNo
      this.search()
    }
  }

}

</script>
<style>
.item {
  width: 20%;
  height: 20px
}
</style>
