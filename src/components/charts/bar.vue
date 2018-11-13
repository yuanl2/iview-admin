<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    value: Object,
    text: String,
    subtext: String
  },
  watch: {
    value: function (newValue, oldValue) {
      this.$nextTick(() => {
        let xAxisData = this.value.locations
        let seriesData = this.value.averageIncome
        let option = {
          title: {
            text: this.text,
            subtext: this.subtext,
            x: 'center'
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 30,
              textStyle: {
                color: '#800080',
                fontFamily: 'verdana',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'bold'
              }
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: seriesData,
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{c} ¥',
                  textStyle: {
                    color: '#800080',
                    fontWeight: 'bold',
                    fontSize: '16'
                  },
                  position: 'top'
                }
              }
            },
            barWidth: '50%'
          }]
        }
        let dom = echarts.init(this.$refs.dom, 'tdTheme')
        dom.setOption(option)
      })
    }
  },
  mounted () {
    console.log('bar mounted')
    this.$nextTick(() => {
      let xAxisData = Object.keys(this.value)
      let seriesData = Object.values(this.value)
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: seriesData,
          type: 'bar'
        }]
      }
      let dom = echarts.init(this.$refs.dom, 'tdTheme')
      dom.setOption(option)
    })
  }
}
</script>

<style lang="less">
.charts{
  //
}
</style>
