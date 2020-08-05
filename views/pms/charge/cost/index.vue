<template>
  <d2-container>
    <template slot="header">
      <headCostSearch @conditionChange="onSearch"></headCostSearch>
    </template>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="tableLoading">
      <el-table-column prop="month" label="计费月份" />
      <el-table-column label="房号">
        <template slot-scope="scope">
          {{scope.row.buildingName}}-{{scope.row.roomNumber}}
        </template>
      </el-table-column>
      <el-table-column prop="ownerName" label="业主" />
      <el-table-column label="收费项目/公式" width="130px">
        <template slot-scope="scope">
          {{scope.row.chargeItemName}} / {{scope.row.formulaName}}
        </template>
      </el-table-column>
      <el-table-column label="费用时段" width="160px">
        <template slot-scope="scope">
          {{scope.row.chargeBeginDate}} - {{scope.row.chargeEndDate}}
        </template>
      </el-table-column>
      <el-table-column prop="feeUnitPrice" label="费用单价" />
      <el-table-column prop="feeAccount" label="应收" />
      <el-table-column prop="feePayment" label="已收" />
      <el-table-column prop="feeBalance" label="余额" />
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onCalc">费用计算</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>
    <dialogCostCalc ref="dialogCostCalc"></dialogCostCalc>
  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      tableLoading: false,
      tableData: [],
    }
  },
  methods: {
    onSearch(condition) {
      this.tableLoading = true
      setTimeout(() => {
        this.tableData = [
          { id: '1', month: '2019-11', buildingName: '1号楼', roomNumber: '101', ownerName: '张三', chargeItemName: '物业费', formulaName: '住宅物业费', feeUnitPrice: 1.5, feeAccount: 150, feePayment: 0, feeBalance: 150, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '2', month: '2019-11', buildingName: '1号楼', roomNumber: '101', ownerName: '张三', chargeItemName: '垃圾费', formulaName: '垃圾费', feeUnitPrice: 6, feeAccount: 6, feePayment: 0, feeBalance: 6, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '3', month: '2019-11', buildingName: '1号楼', roomNumber: '101', ownerName: '张三', chargeItemName: '电梯费', formulaName: '电梯费', feeUnitPrice: 1.5, feeAccount: 50, feePayment: 0, feeBalance: 50, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '4', month: '2019-11', buildingName: '1号楼', roomNumber: '201', ownerName: '张三', chargeItemName: '物业费', formulaName: '住宅物业费', feeUnitPrice: 1.5, feeAccount: 150, feePayment: 0, feeBalance: 150, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '5', month: '2019-11', buildingName: '1号楼', roomNumber: '201', ownerName: '张三', chargeItemName: '垃圾费', formulaName: '垃圾费', feeUnitPrice: 6, feeAccount: 6, feePayment: 0, feeBalance: 6, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '6', month: '2019-11', buildingName: '1号楼', roomNumber: '201', ownerName: '张三', chargeItemName: '电梯费', formulaName: '电梯费', feeUnitPrice: 1.5, feeAccount: 50, feePayment: 0, feeBalance: 50, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '7', month: '2019-11', buildingName: '1号楼', roomNumber: '301', ownerName: '张三', chargeItemName: '物业费', formulaName: '住宅物业费', feeUnitPrice: 1.5, feeAccount: 150, feePayment: 0, feeBalance: 150, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '8', month: '2019-11', buildingName: '1号楼', roomNumber: '301', ownerName: '张三', chargeItemName: '垃圾费', formulaName: '垃圾费', feeUnitPrice: 6, feeAccount: 6, feePayment: 0, feeBalance: 6, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '9', month: '2019-11', buildingName: '1号楼', roomNumber: '301', ownerName: '张三', chargeItemName: '电梯费', formulaName: '电梯费', feeUnitPrice: 1.5, feeAccount: 50, feePayment: 0, feeBalance: 50, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '10', month: '2019-11', buildingName: '1号楼', roomNumber: '401', ownerName: '张三', chargeItemName: '物业费', formulaName: '住宅物业费', feeUnitPrice: 1.5, feeAccount: 150, feePayment: 0, feeBalance: 150, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '11', month: '2019-11', buildingName: '1号楼', roomNumber: '401', ownerName: '张三', chargeItemName: '垃圾费', formulaName: '垃圾费', feeUnitPrice: 6, feeAccount: 6, feePayment: 0, feeBalance: 6, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
          { id: '12', month: '2019-11', buildingName: '1号楼', roomNumber: '401', ownerName: '张三', chargeItemName: '电梯费', formulaName: '电梯费', feeUnitPrice: 1.5, feeAccount: 50, feePayment: 0, feeBalance: 50, chargeBeginDate: '2019-01-01', chargeEndDate: '2019-01-31' },
        ]
        this.tableLoading = false
      }, 1);
    },
    onCalc() {
      this.$refs.dialogCostCalc.showDialog()
    }
  },
  components: {
    headCostSearch: () => import('./head-cost-search'),
    dialogCostCalc: () => import('./dialog-cost-calc')
  }
}
</script>