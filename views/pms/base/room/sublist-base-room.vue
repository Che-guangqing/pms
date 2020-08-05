<template>
  <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="loading">
    <el-table-column label="收费项目/收费公式">
      <template slot-scope="scope">
        {{scope.row.chargeItemName}} / {{scope.row.formulaName}}
      </template>
    </el-table-column>
    <el-table-column label="收费类型">
      <template slot-scope="scope">
        {{chargeItemTypeList[scope.row.chargeItemType]}}
      </template>
    </el-table-column>
    <el-table-column label="公式类型">
      <template slot-scope="scope">
        {{chargeFormulaTypeList[scope.row.formulaType]}}
      </template>
    </el-table-column>
    <el-table-column label="系数" prop="coefficient"></el-table-column>
    <el-table-column label="单价" prop="unitPrice"></el-table-column>
  </el-table>
</template>
<script>
import { chargeItemTypeList, chargeFormulaTypeList } from '@/enums/charge'
import { mapActions } from 'vuex'
export default {
  mounted() {
    console.log(this.roomID)
    this.bindData()
  },
  props: {
    roomID: String
  },
  data() {
    return {
      tableData: [],
      loading: false,
      chargeItemTypeList,
      chargeFormulaTypeList
    }
  },
  methods: {
    ...mapActions('pms/charge.item', ['getChargeItemByRoomID']),
    bindData() {
      this.loading = true
      this.getChargeItemByRoomID(this.roomID).then(res => {
        console.log(res)
        this.tableData = res.data
        this.loading = false
      })
    }
  }
}
</script>