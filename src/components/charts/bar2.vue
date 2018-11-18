<template>
  <div ref="dom" class="charts chart-bar2"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar2',
  props: {
    value: Object,
    text: String,
    subtext: String
  },
  watch: {
    value: function (newValue, oldValue) {
      this.$nextTick(() => {
        let xAxisData = this.value.locations
        let seriesData1 = this.value.todayAverageIncome
        let seriesData2 = this.value.currentMonthAverageIncome
        let seriesData3 = this.value.allAverageIncome
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data: ['当日台均收益', '当月台均收益', '历史总台均收益']
          },
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
            type: 'value',
            axisLabel: {
              formatter: '{value} ¥'
            }
          },
          series: [{
            name: '当日台均收益',
            data: seriesData1,
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
            }
          },
          {
            name: '当月台均收益',
            data: seriesData2,
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
            }
          },
          {
            name: '历史总台均收益',
            data: seriesData3,
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
            }
          }]
        }
        let dom = echarts.init(this.$refs.dom, 'tdTheme')
        dom.setOption(option)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      let xAxisData = this.value.locations
      let seriesData1 = this.value.todayAverageIncome
      let seriesData2 = this.value.currentMonthAverageIncome
      let seriesData3 = this.value.allAverageIncome
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['当日台均收益', '当月台均收益', '历史总台均收益']
        },
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
          type: 'value',
          axisLabel: {
            formatter: '{value} ¥'
          }
        },
        series: [{
          name: '当日台均收益',
          data: seriesData1,
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
          }
        },
        {
          name: '当月台均收益',
          data: seriesData2,
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
          }
        },
        {
          name: '历史总台均收益',
          data: seriesData3,
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
          }
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
