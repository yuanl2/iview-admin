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
import { getProvinceTableData } from '@/api/data'
export default {
  name: 'tables_page_province',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '省份ID', key: 'id', sortable: true},
        {title: '省份名称', key: 'name', sortable: true}
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
    getProvinceTableData().then(res => {
      console.log(res)
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
