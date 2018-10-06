<template>
  <div ref="dom"></div>
</template>

<script>
import echarts from 'echarts'
import {on, off} from '@/libs/tools'
import {getOrderSummaryData} from '@/api/data'

export default {
  name: 'serviceRequests',
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          top: '3%',
          left: '1.2%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['0时', '1时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '昨日订单',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {
                color: '#0C17A6'
              }
            },
            data: res.yesterdayOrderData
          },
          {
            name: '今日订单',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {
                color: '#398DBF'
              }
            },
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
