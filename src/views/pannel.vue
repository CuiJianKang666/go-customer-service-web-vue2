<template>
  <div>
    <Header></Header>
      <div style="background: #fff;margin: 10px;padding: 10px" id="visitorNums">
      </div>
    </div>
</template>


<script>
import Header from "@/template/header.vue";
import {sendAjax} from "../../public/static/js/functions";
import * as echarts from "@/../public/static/js/echarts.min"

export default {
  data() {
    return {
      actionValue: 'pannel'
    };
  },
  methods: {
    showStatistics() {
      let _this = this;
      sendAjax("/kefu/chartStatistics", "get", {}, function (data) {
        var result = data;
        var days = [];
        var nums = [];
        if (result.length <= 0) {
          return;
        }
        for (var i = result.length - 1; i >= 0; i--) {
          days.push(result[i].day);
          nums.push(result[i].num)
        }
        // 基于准备好的dom，初始化echarts实例
        $(function () {
          var myChart = echarts.init($('#visitorNums')[0], null, {
            width: document.documentElement.clientWidth,
            height: 500
          });
          // 指定图表的配置项和数据
          var option = {
            title: {
              text: "每日访客接待情况"
            },
            tooltip: {},
            legend: {
              data: ['数量']
            },
            xAxis: {
              data: days
            },
            yAxis: {},
            series: [
              {
                name: '人数',
                type: 'bar',
                data: nums,
                barCategoryGap: '40%',
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        });
      });
    },
  },
  created() {
    this.showStatistics();
  },
  components: {
    Header,
  }
}
</script>

