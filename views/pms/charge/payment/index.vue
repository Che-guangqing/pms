<template>
  <d2-container>
    <template slot="header">
      <headCostSearch @conditionChange="onSearch"></headCostSearch>
    </template>
    <el-table :data="tableData" @selection-change="onSelectionChange" style="width: 100%" stripe size="mini" v-loading="tableLoading" show-summary>
      <el-table-column type="selection" width="55" />
      <el-table-column prop="month" label="计费期" />
      <el-table-column prop="chargeItemName" label="收费项目" />
      <el-table-column prop="feeAccount" label="应收金额" />
      <el-table-column prop="feePayment" label="已收金额" />
      <el-table-column prop="feeBalance" label="欠款" />
    </el-table>
    <template slot="footer">
      <div flex="main:right" style="margin-right:50px;">
        <div v-show="amount>0" style="line-height:40px;margin-right:20px;font-size:20px;color:red;font-family:'黑体'">
          <!--注意,在使用计算属性时,不能加括号,否则会报错-->
          本次缴费金额: {{amount}}
        </div>
        <el-button type="danger" @click="onPay" :disabled="selectedData.length==0">缴费</el-button>
      </div>
    </template>
    <dialogPaymentConfirm ref="dialogPaymentConfirm"></dialogPaymentConfirm>
  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      tableLoading: false,
      tableData: [],
      selectedData: [],
      selectedInfo: {}
    }
  },
  methods: {
    onSearch(condition) {
      console.log('外层onSearch事件,接收到了head-payment-search组件出发的conditionChange事件,并且得到了小区ID与房间ID')
      console.log(condition)
      this.selectedInfo = condition
      this.tableLoading = true
      setTimeout(() => {
        this.tableData = [
          { id: '1', month: '2019-10', chargeItemName: '物业费', feeAccount: 125, feePayment: 0, feeBalance: 125 },
          { id: '2', month: '2019-10', chargeItemName: '垃圾费', feeAccount: 6, feePayment: 0, feeBalance: 6 },
          { id: '3', month: '2019-10', chargeItemName: '电梯费', feeAccount: 50, feePayment: 0, feeBalance: 50 },
          { id: '4', month: '2019-11', chargeItemName: '物业费', feeAccount: 125, feePayment: 0, feeBalance: 125 },
          { id: '5', month: '2019-11', chargeItemName: '垃圾费', feeAccount: 6, feePayment: 0, feeBalance: 6 },
          { id: '6', month: '2019-11', chargeItemName: '电梯费', feeAccount: 50, feePayment: 0, feeBalance: 50 },
        ]
        this.tableLoading = false
      }, 1000);
    },
    onPay() {
      this.$refs.dialogPaymentConfirm.showDialog(
        {
          selectedData: this.selectedData,
          roomID: this.selectedInfo.roomID
        }
      )
    },
    onSelectionChange(list) {
      this.selectedData = list
    }
  },
  components: {
    //相对路径
    // headCostSearch: () => import('../cost/head-cost-search'),
    //基于 @(src) 目录的相对路径
    // headCostSearch: () => import('@/views/pms/charge/cost/head-cost-search'),
    headCostSearch: () => import('./head-payment-search'),
    dialogPaymentConfirm: () => import('./dialog-payment-confirm')
    // sublistMonth: () => import('./sublist-month')
  },
  computed: {
    //添加一个计算属性,动态去计算总价
    amount() {
      let sum = 0;
      for (let item of this.selectedData) {
        sum += item.feeAccount
      }
      return sum
    }
  }
}
</script>