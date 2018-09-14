<template>
  <div>
    <Card>
      <DatePicker type="daterange" format="yyyy-MM-dd" placeholder="Select date" style="width: 300px" @on-change="handleDataChange"></DatePicker>
      <Button class="search-btn" type="primary" @click="handleGetData"><Icon type="code"/>&nbsp;&nbsp;获取数据</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getOrderStaticsTableData } from '@/api/data'
export default {
  name: 'tables_page_MonthOrder',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '时间', key: 'time', sortable: true},
        {title: '区域', key: 'areaName', sortable: true},
        {title: '运营设备数(台)', key: 'runningDeviceTotal'},
        {title: '总设备数(台)', key: 'deviceTotal'},
        {title: '订单数(个)', key: 'orderTotal'},
        {title: '收益(元)', key: 'incomeTotal'},
        {title: '代理商', key: 'user'}
      ],
      tableData: [],
      timeranges: {
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    handleGetData () {
      getOrderStaticsTableData('user2', 2, this.timeranges.startTime, this.timeranges.endTime).then(res => {
        this.tableData = res
      })
    },
    handleDataChange (e) {
      this.timeranges.startTime = e[0]
      this.timeranges.endTime = e[1]
    }
  },
  mounted () {

  }
}
</script>

<style>

</style>
