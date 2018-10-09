<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :sm="12" :md="8" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 20px;">
      <i-col :xs="24" :sm="24" :md="12">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="currentDayPieData" text="当日网点收益"></chart-pie>
        </Card>
      </i-col>
      <i-col :xs="24" :sm="24" :md="12">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="currentMonthPieData" text="当月网点收益"></chart-pie>
        </Card>
      </i-col>
      <i-col :xs="24" :sm="24" :md="12">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="monthPieData" text="网点总收益"></chart-pie>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 20px;">
      <i-col span="24">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="todayAverageIncomebarData" text="当日台均收益"/>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 20px;">
      <i-col span="24">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="monthAverageIncomebarData" text="当月台均收益"/>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 20px;">
      <i-col span="24">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="allAverageIncomebarData" text="历史总台均收益"/>
        </Card>
      </i-col>
    </Row>
    <Row style="margin-top: 20px;">
      <Card shadow>
        <example style="height: 310px;" text="订单"/>
      </Card>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
import { getSummaryInfo } from '@/api/data'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      monthPieData: [],
      inforCardData: [
      ],
      currentMonthPieData: [
      ],
      currentDayPieData: [],
      todayAverageIncomebarData: {
      },
      monthAverageIncomebarData: {
      },
      allAverageIncomebarData: {
      }
    }
  },
  beforeCreated () {
    console.log('beforeCreated')
  },
  created () {

  },
  mounted () {
    console.log('home mounted')
    getSummaryInfo('user2').then(res => {
      this.monthPieData = res.allPieData
      this.inforCardData = res.infoCardData
      this.currentMonthPieData = res.currentMonthPieData
      this.currentDayPieData = res.currentDayPieData
      this.todayAverageIncomebarData = res.todayAverageIncomebarData
      this.monthAverageIncomebarData = res.monthAverageIncomebarData
      this.allAverageIncomebarData = res.allAverageIncomebarData
    })
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
