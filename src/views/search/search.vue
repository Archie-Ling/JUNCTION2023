<template>
  <div id="app">
    <van-swipe style="height: 600px;" vertical loop=false>
      <van-swipe-item style="height: 600px;"><pie-chart :pieData="chart1data" topTitle="能源消耗" centerTitle="总消耗：666kwh"/></van-swipe-item>
      <van-swipe-item style="height: 600px;"><pie-chart :pieData="chart2data" topTitle="碳排放" centerTitle="总排放：666t"/></van-swipe-item>
      <van-swipe-item style="height: 600px;"><line-chart/></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from 'axios'
import PieChart from '@/components/Charts/PieChart.vue'
import LineChart from '@/components/Charts/LineChart.vue'
export default {
  components:{PieChart,LineChart},
  data() {
    return {
      searchText: '',
      tableData: [], // 表格数据
      currentPage: 1, // 当前页
      pageSize: 5, // 每页显示条数
      total: 20, // 总条数
      showAddressColumn: false,
      chart1data:[
        {
        value: 463,
        name: "流程一"
        },
        {
        value: 395,
        name: "流程二"
        },
        {
        value: 157,
        name: "流程三"
        },
        {
        value: 149,
        name: "流程四"
        },],
      chart2data:[
        {
        value: 234,
        name: "流程一"
        },
        {
        value: 543,
        name: "流程二"
        },
        {
        value: 852,
        name: "流程三"
        },
        {
        value: 66,
        name: "流程四"
        },]
    }
  },
  created() {
    this.search()
  },
  mounted(){
    
    this.$nextTick(()=>{
    this.slideBanner()
    });
  },
  methods: {
    slideBanner(){
			var box = document.querySelector('.el-carousel__container');
		    var startPoint = 0;
			var stopPoint = 0;
			var resetPoint =  function(){
				startPoint = 0;
				stopPoint = 0;
			}
		    box.addEventListener("touchstart",function(e){
		        startPoint = e.changedTouches[0].pageY;
		    });
		    box.addEventListener("touchmove",function(e){
		        stopPoint = e.changedTouches[0].pageY;
		    });
		   	box.addEventListener("touchend",function(e){
		   		console.log("1："+startPoint);
		   		console.log("2："+stopPoint);
				if(stopPoint == 0 || startPoint - stopPoint == 0){
					resetPoint();
		   			return;
		   		}
		   		if(startPoint - stopPoint > 0){
		   			resetPoint();
		   			this.$refs.mycarousel.next();
		   			return;
		   		}
		   		if(startPoint - stopPoint < 0){
		   			resetPoint();
            console.log(this.$refs.mycarousel);
		   			this.$refs.mycarousel.prev();
		   			return;
		   		}
		    });
		},
    handleSumChartData(data){
      var sum=0;
      data.forEach(item => {
        sum+=item.value;
      });
      return sum;
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
    germinate(){
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
.item{
  width: 20%;
  height: 20px
}
</style>
