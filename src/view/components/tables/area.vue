<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getAreaTableData } from '@/api/data'
export default {
  name: 'tables_page_area_user',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '网点ID', key: 'id', sortable: true},
        {title: '网点名称', key: 'name', sortable: true},
        {title: '网点地址', key: 'address'},
        {title: '城市ID', key: 'cityID'},
        {title: '进场时间', key: 'enterTime'}
      ],
      tableData: [],
      timeRanges: []
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
    }
  },
  mounted () {
    getAreaTableData().then(res => {
      this.tableData = res
    })
  },
  watch: {
    timeRanges: function (val) {
      getAreaTableData().then(res => {
        this.tableData = res
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
