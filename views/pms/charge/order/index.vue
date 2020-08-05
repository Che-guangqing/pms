<template>
  <d2-container>
    <template slot="header">
      <headSearch @conditionChange="onSearch"></headSearch>
    </template>
    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <sublistChargeOrder :orderID="scope.row.id"></sublistChargeOrder>
        </template>
      </el-table-column>
      <el-table-column prop="orderNumber" label="流水号">
      </el-table-column>
      <el-table-column prop="createDate" label="订单日期">
      </el-table-column>
      <el-table-column prop="amount" label="订单金额">
      </el-table-column>
      <el-table-column label="付款方式">
        <template slot-scope="scope">
          {{payMethodList[scope.row.payMethod]}}
        </template>
      </el-table-column>
      <el-table-column prop="operatorName" label="操作员">
      </el-table-column>
      <el-table-column label="订单状态">
        <template slot-scope="scope">
          {{orderStatusList[scope.row.orderStatus]}}
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>
  </d2-container>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      formData: {},
      tableData: [
        { id: '1', orderNumber: '1111', createDate: '2019-01-01 18:35:26', amount: 36, payMethod: 0, operatorName: '张三', orderStatus: 1 },
        { id: '2', orderNumber: '2222', createDate: '2019-02-01 18:35:26', amount: 36, payMethod: 1, operatorName: '李四', orderStatus: 0 },
        { id: '3', orderNumber: '3333', createDate: '2019-03-01 18:35:26', amount: 36, payMethod: 2, operatorName: '王五', orderStatus: 1 },
      ],
      payMethodList: ['现金', '微信支付', '支付宝', 'POS机-储蓄卡', 'POS机-信用卡'],
      orderStatusList: ['待支付', '支付成功', '订单关闭']
    }
  },
  methods: {
    onSearch(condition) {
      console.log('接收到子组件的事件,并且参数为:')
      console.log(condition)
      console.log('父组件得到查询条件后,就应该刷新数据')
      let beginDate = condition.dateRange[0]
      let endDate = condition.dateRange[1]

      //利用moment库进行格式化
      let m_beginDate = moment(beginDate)
      let m_endDate = moment(endDate)

      console.log('beginDate:' + m_beginDate.format('YYYY-MM-DD'))
      console.log('endDate:' + m_endDate.format('YYYY-MM-DD'))
    }
  },
  components: {
    sublistChargeOrder: () => import('./sublist-charge-order'),
    headSearch: () => import('./head-search')
  }
}
</script>