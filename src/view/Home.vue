<template>
  <el-row>
    <!-- 左右分栏（24），左边占8份，右边16份 -->
    <el-col :span="8">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/images/user.jpg" />
          <div class="userInfo">
            <p class="name">Stitch</p>
            <p class="access">626号实验品</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次登录时间：<span>2022-10-30</span></p>
          <p>上次登录地点：<span>Turo星球</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 320px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :prop="key"
            :label="val"
            :key="key"
          />
          <!-- <el-table-column 
            prop="name" 
            label="名称"             
            >
            </el-table-column>
            <el-table-column 
            prop="todayBuy" 
            label="今日销量"             
            >
            </el-table-column>
            <el-table-column 
            prop="monthBuy" 
            label="本月销量"> 
            </el-table-column> -->
          <!-- <el-table-column 
            prop="totalBuy" 
            label="总销量"> 
            </el-table-column> -->
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: '0' }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">{{ "￥" + item.value }}</p>
            <p class="order">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 200px; margin-left: 20px">
        <div ref="echarts1" style="height: 200px; width: 650px"></div>
      </el-card>
      <div class="graph">
        <el-card>
          <div ref="echarts2" style="height: 200px; "></div>
        </el-card>
        <el-card>
          <div ref="echarts3" style="height: 160px; "></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getData } from "../api";
import * as echarts from "echarts";
export default {
  // name: "Home",
  data() {
    return {
      tableData: [
        //   {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }
      ],
      tableLabel: {
        name: "名称",
        todayBuy: "今日销量",
        monthBuy: "本月销量",
        totalBuy: "总销量",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data;
      // console.log(data.data);
      this.tableData = tableData;
      // 基于准备好的dom，初始化echarts实例
      const echarts1 = echarts.init(this.$refs.echarts1);
      // 指定图表的配置项和数据
      var echarts1Option = {};
      // 处理数据xAxis
      const { orderData,userData,videoData } = data.data;
      const xAxis = Object.keys(orderData.data[0]);
      const xAxisData = {
        data: xAxis,
      };
      echarts1Option.xAxis = xAxisData;
      echarts1Option.yAxis = {};
      echarts1Option.legend = xAxisData;
      echarts1Option.series = [];
      xAxis.forEach((key) => {
        echarts1Option.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      
      });
      echarts1.setOption(echarts1Option);

      //柱状图
      // 基于准备好的dom，初始化echarts实例
      const echarts2 = echarts.init(this.$refs.echarts2);
      // 指定图表的配置项和数据
      var echarts2Option = {
        legend: {
      //图例文字颜色
      textStyle: {
        color: "#333",
      },
      },
      grid: {
        left: "20%",
      },
      //提示框
      tooltip: {
        trigger:"axis",
      },
      xAxis: {
        type: "category",//类目轴
        data:userData.map(item=>item.data),
        axisLine: {
          lineStyle:{
            color:"#17b3a3",
          },
        },
        axisLable: {
          interval: 0,
          color: "#333",
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle:{
            color:"#17b3a3",
          },
        },
      },
      color:["#2ec7c9","#b6a2de"],
      series: [
        {
          name: "新增用户",
          data: userData.map(item=>item.new),
          type: "bar"
        },
        {
          name: "活跃用户",
          data: userData.map(item=>item.active),
          type: "bar"
        },
      ],
      }
      echarts2.setOption(echarts2Option);

      //饼状图
      const echarts3 = echarts.init(this.$refs.echarts3);
      var echarts3Option = {
        series: [
          {
            type: 'pie',
            data: videoData
          }
        ]
      }
      echarts3.setOption(echarts3Option);
    })
  }
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .userInfo {
    padding-left: 30px;
    .name {
      font-size: 32px;
      // margin-bottom: 10px;
    }
    .access {
      color: #999;
      font-size: 14px;
    }
  }
}
.loginInfo {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    span {
      color: #666;
      padding-left: 30px;
    }
  }
}
.el-table__cell {
  height: 30px;
}

// :deep(.el-card__body){
//     padding: 0;
//   }

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 30%;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    .price {
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
    }
    .order {
      font-size: 12px;
      color: #999;
    }
  }
}
.graph {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  .el-card {
    height: 193px;
    margin-top: 20px;
    width: 48%;
  }
}
</style>
