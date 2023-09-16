<template>
    <div class="echart" ref="mychart" :style="myChartStyle"></div>
</template>
  
<script>
import * as echarts from "echarts";

export default {
    props:{
        pieData:{},
        topTitle:{},
        centerTitle:{default:"233"}
    },
data() {
    return {
    myChart: {},
    pieName: [],
    myChartStyle: { marginTop:"10%", width: "110%" ,height:"600px "}
    };
},
mounted() {
    this.initData(); 
    this.$nextTick(()=>{
        this.initEcharts();
    }) 
    
},
methods: {
    initData() {
    for (let i = 0; i < this.pieData.length; i++) {
        this.pieName[i] = this.pieData[i].name;
    }
    },
    
    initEcharts() {
    const option = {
        legend: {
        data: this.pieName,
        left:"center",
        top: "90%",
        orient: "horizontal"
        },
        title: 
        [
        {
        text: this.topTitle,
        top: "5%",
        left: "center"
        },{
        text: this.centerTitle,
        top: "center",
        left: "center"
        },
        ],
        series: [
        {
            type: "pie",
            label: {
            show: true,
            padding:[0,-100,20,-100],
            formatter: "{b} : {c} ({d}%)" 
            },
            radius: ["30%","60%"], 
            data: this.pieData
        }
        ]
    };
    console.log(this.seriesData);
    this.myChart = echarts.init(this.$refs.mychart);
    this.myChart.setOption(option);
    window.addEventListener("resize", () => {
        this.myChart.resize();
    });
    }
}
};
</script>

