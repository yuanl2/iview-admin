<template>
  <div ref="dom"></div>
</template>

<script>
import echarts from 'echarts'
import {on, off} from '@/libs/tools'
import {getOrderSummaryData} from '@/api/data'

export default {
  name: 'serviceRequests',
  props: {
    text: String,
    subtext: String
  },
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },
  mounted () {
    getOrderSummaryData('user2').then(res => {
      const option = {
        title: {
          textStyle: {
            fontSize: 16
          },
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          x: 'left', // 'center' | 'left' | {number},
          y: 'top', // 'center' | 'bottom' | {number}
          icon: 'rect',
          textStyle: {
            fontSize: 16
          },
          data: ['今日订单', '昨日订单']
        },
        grid: {
          top: '20%',
          left: '1.2%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              show: true,
              interval: 'auto',
              textStyle: {
                color: '#800080',
                fontFamily: 'verdana',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'bold'
              }
            },
            data: ['0时', '1时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
          }
        ],
        yAxis: [
          {
            name: '订单数',
            type: 'value'
          }
        ],
        series: [
          {
            name: '昨日订单',
            type: 'line',
            data: res.yesterdayOrderData
          },
          {
            name: '今日订单',
            type: 'line',
            data: res.todayOrderData
          }
        ]
      }
      this.$nextTick(() => {
        this.dom = echarts.init(this.$refs.dom)
        this.dom.setOption(option)
        on(window, 'resize', this.resize())
      })
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize())
  }
}
</script>
