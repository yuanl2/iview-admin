<template>
  <div>
    <Card>
      <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" style="width: 300px" @on-change="handleDataChange"></DatePicker>
      <Button class="search-btn" type="primary" @click="handleGetData"><Icon type="code"/>&nbsp;&nbsp;获取数据</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getOrderInfo } from '@/api/data'
export default {
  name: 'tables_page_consume',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '创建时间', key: 'cTime', sortable: true},
        {title: '订单ID', key: 'orderID', sortable: true},
        {title: '设备ID', key: 'deviceID', sortable: true},
        {title: '订单状态', key: 'orderStatusDesc'},
        {title: '开始时间', key: 'sTime'},
        {title: '时间(秒)', key: 'duration'},
        {title: '订单价格(元)', key: 'price'},
        {title: '网点', key: 'areaName'},
        {title: '合伙人', key: 'user'}
      ],
      tableData: [],
      startTime: ''
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
      getOrderInfo(4, this.startTime).then(res => {
        this.tableData = res
      })
    },
    handleDataChange (e) {
      this.startTime = e
    }
  },
  mounted () {
    var x = new Date()
    var y = x.getFullYear().toString()
    var m = (x.getMonth() + 1).toString()
    var d = x.getDate().toString()(d.length === 1) && (d = '0' + d)(m.length === 1) && (m = '0' + m)
    var yyyymmdd = y + '-' + m + '-' + d
    getOrderInfo(4, yyyymmdd).then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
