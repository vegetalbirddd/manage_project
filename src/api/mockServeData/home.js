//mock数据模拟
import Mock from 'mockjs'

//图表数据
let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for(let i = 0;i < 6;i++) {
            List.push(
            Mock.mock({
                苹果:Mock.Random.float(100,8000,0,0),
                vivo:Mock.Random.float(100,8000,0,0),
                oppo:Mock.Random.float(100,8000,0,0),
                三星:Mock.Random.float(100,8000,0,0),
                华为:Mock.Random.float(100,8000,0,0),
                小米:Mock.Random.float(100,8000,0,0),
            })
        )
        }
        return {
            code:20000,
            data: {
                //饼图
                videoData:[
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'苹果',
                        value:5999
                    },
                    {
                        name:'vivo',
                        value:1999
                    },{
                        name:'oppo',
                        value:1999
                    },{
                        name:'华为',
                        value:4999
                    },
                ],
                //柱状图
                userData: [
                    {
                        data:'周一',
                        new:5,
                        active:200
                    },
                    {
                        data:'周二',
                        new:10,
                        active:500
                    },
                    {
                        data:'周三',
                        new:12,
                        active:550
                    },
                    {
                        data:'周四',
                        new:60,
                        active:800
                    },
                    {
                        data:'周五',
                        new:65,
                        active:550
                    },
                    {
                        data:'周六',
                        new:53,
                        active:770
                    },
                    {
                        data:'周日',
                        new:33,
                        active:170
                    },
                ],
                //折线图
                orderData: {
                    data:['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                    data:List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name: 'vivo',
                        todayBuy:300,
                        monthBuy:2200,
                        totalBuy:24000
                    },
                    {
                        name: '苹果',
                        todayBuy:800,
                        monthBuy:4500,
                        totalBuy:62000
                    },
                    {
                        name: '小米',
                        todayBuy:1200,
                        monthBuy:6500,
                        totalBuy:45000
                    },
                    {
                        name: '华为',
                        todayBuy:300,
                        monthBuy:3500,
                        totalBuy:34000
                    },
                    {
                        name: '三星',
                        todayBuy:350,
                        monthBuy:5500,
                        totalBuy:30000
                    },
                ]
            }
        }
    }
}