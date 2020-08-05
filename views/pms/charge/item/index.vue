<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <sublistChargeFormula :chargeItemID="scope.row.id"></sublistChargeFormula>
        </template>
      </el-table-column>
      <el-table-column prop="chargeItemName" label="收费项目名称">
      </el-table-column>
      <el-table-column prop="chargeItemRemark" label="收费项目备注">
      </el-table-column>
      <el-table-column label="收费类型">
        <template slot-scope="scope">
          {{chargeItemTypeList[scope.row.chargeItemType]}}
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAdd">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdate(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>
    <dialogChargeItemModify ref="dialogChargeItemModify"></dialogChargeItemModify>
  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { id: "1", chargeItemName: "物业费", chargeItemRemark: "物业费备注", chargeItemType: 1 },
        { id: "2", chargeItemName: "垃圾费", chargeItemRemark: "", chargeItemType: 2 },
        { id: "3", chargeItemName: "电梯费", chargeItemRemark: "", chargeItemType: 3 },
      ],
      chargeItemTypeList: ['费用类', '押金类', '仪表类', '临时类'],
    };
  },
  methods: {
    onAdd() {
      this.$refs.dialogChargeItemModify.showDialog()
    },
    onUpdate(row) {
      this.$refs.dialogChargeItemModify.showDialog(row)
    },
  },
  components: {
    "dialogChargeItemModify": () => import('./dialog-charge-item-modify'),
    sublistChargeFormula: () => import('./sublist-charge-formula')
  }
};
</script>