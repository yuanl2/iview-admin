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
import { getConsumeTableData } from '@/api/data'
export default {
  name: 'tables_page_consume',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '时间', key: 'time', sortable: true},
        {title: '区域', key: 'areaName', sortable: true},
        {title: '订单数', key: 'orderNumbers'},
        {title: '收益', key: 'earnings', editable: true},
        {title: '代理商', key: 'userName', editable: true},
        {
          title: 'Handle',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '自定义删除')
              ])
            }
          ]
        }
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
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getConsumeTableData().then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
