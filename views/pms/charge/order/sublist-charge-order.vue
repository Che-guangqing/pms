<template>
  <el-table :data="tableData" style="width: 100%" stripe size="mini">
    <el-table-column prop="chargeItemName" label="收费项目">
    </el-table-column>
    <el-table-column prop="chargeFormulaName" label="收费公式">
    </el-table-column>
    <el-table-column label="公式类型">
      <template slot-scope="scope">
        {{chargeFormulaType[scope.row.formulaType]}}
      </template>
    </el-table-column>
    <el-table-column prop="feeAccount" label="应收">
    </el-table-column>
    <el-table-column prop="feePayment" label="本次支付">
    </el-table-column>
    <el-table-column prop="feeBalance" label="余额">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
  data() {
    return {
      tableData: [
        { chargeItemName: "物业费", chargeFormulaName: "住宅物业费", formulaType: 0, feeAccount: 10, feePayment: 10, feeBalance: 0 },
        { chargeItemName: "垃圾费", chargeFormulaName: "垃圾费", formulaType: 2, feeAccount: 6, feePayment: 6, feeBalance: 0 },
        { chargeItemName: "电梯费", chargeFormulaName: "电梯费", formulaType: 3, feeAccount: 20, feePayment: 20, feeBalance: 0 }
      ],
      chargeFormulaType: ['单价*面积', '单价*使用量', '定额', '自定义']
    }
  }
}
</script>