<template>
  <div>

    <el-table :data="chargeFormulaList" style="width: 100%">
      <el-table-column prop="formulaName" label="公式名称">
      </el-table-column>
      <el-table-column label="公式类型">
        <template slot-scope="scope">
          {{chargeFormulaType[scope.row.formulaType]}}
        </template>
      </el-table-column>
      <el-table-column prop="formulaValue" label="公式值">
      </el-table-column>
      <el-table-column prop="coefficient" label="系数">
      </el-table-column>
      <el-table-column prop="unitPrice" label="单价">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAdd">新增收费公式</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdate(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <dialogFormulaModify ref="dialogFormulaModify"></dialogFormulaModify>

  </div>
</template>
<script>
export default {
  mounted() {
    console.log("接收到父组件传入的ChargeItemID:" + this.chargeItemID)
    this.initData();
  },
  props: {
    chargeItemID: String
  },
  data() {
    return {
      chargeFormulaList: [],
      chargeFormulaType: ['单价*面积', '单价*使用量', '定额', '自定义']
    }
  },
  methods: {
    initData() {
      //根据父组件传入的chargeItemID,动态的获取公式列表
      if (this.chargeItemID == "1") {
        //原本应该是从数据库中根据chargeItemID去获取对应的收费公式,但是在这里等待SpringBoot讲完后,再来完成这块代码
        this.chargeFormulaList = [
          { formulaName: '住宅物业费', formulaType: 0, formulaValue: '单价*面积', coefficient: 1, unitPrice: 1.5 },
          { formulaName: '商业物业费', formulaType: 0, formulaValue: '单价*面积', coefficient: 1, unitPrice: 3.5 },
          { formulaName: '办公物业费', formulaType: 0, formulaValue: '单价*面积', coefficient: 1, unitPrice: 2.5 },
        ]
      }
      if (this.chargeItemID == "2") {
        this.chargeFormulaList = [
          { formulaName: '垃圾费', formulaType: 2, formulaValue: '6', coefficient: 1, unitPrice: 6 },
        ]
      }
    },
    onAdd() {
      this.$refs.dialogFormulaModify.showDialog()
    },
    onUpdate(row) {
      this.$refs.dialogFormulaModify.showDialog(row)
    }
  },
  components: {
    dialogFormulaModify: () => import('./dialog-formula-modify')
  }
}
</script>