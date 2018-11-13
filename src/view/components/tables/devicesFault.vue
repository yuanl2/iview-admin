<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Excel文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getFaultDeviceTableData } from '@/api/data'
export default {
  name: 'tables_page_device_fault',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: 'DeviceID', key: 'deviceID', sortable: true},
        {title: '设备类型', key: 'type'},
        {title: '省份', key: 'province'},
        {title: '城市', key: 'city'},
        {title: '网点名称', key: 'areaName', sortable: true},
        {title: '合伙人', key: 'user'},
        {title: '进场时间', key: 'enterTime'},
        {title: '状态', key: 'statusDesc', sortable: true}
      ],
      tableData: []
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
    }
  },
  mounted () {
    getFaultDeviceTableData(4).then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
