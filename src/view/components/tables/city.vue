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
import { getCityTableData } from '@/api/data'
export default {
  name: 'tables_page_city',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '城市ID', key: 'id', sortable: true},
        {title: '城市名称', key: 'name', sortable: true},
        {title: '行政区名称', key: 'districtName'}
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
    getCityTableData().then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
