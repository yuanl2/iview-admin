<template>
  <div>
    <Card>
      <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" style="width: 300px" @on-change="handleDataChange"></DatePicker>
      <Button class="search-btn" type="primary" @click="handleGetData"><Icon type="code"/>&nbsp;&nbsp;获取数据</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Excel文件</Button>
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
        filename: `table-${(new Date()).valueOf()}.xlsx`
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
    var date = new Date()
    var seperator1 = '-'
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate
    getOrderInfo(4, currentdate).then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
