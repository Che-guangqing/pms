<template>
  <el-form :inline="true" :model="condition" size="mini">
    <el-form-item label="时间段">
      <el-date-picker v-model="condition.dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="付款方式">
      <el-select v-model="condition.payMethod" placeholder="付款方式">
        <el-option v-for="(item,index) in payMethodList" :key="index" :label="item" :value="index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    //props是一个单向的,由父组件向子组件传递数据的一个通道
  },
  data() {
    return {
      payMethodList: ['现金', '微信支付', '支付宝', 'POS机-储蓄卡', 'POS机-信用卡'],
      condition: {}
    }
  },
  methods: {
    onSubmit() {
      console.log('头部搜索子组件,触发change事件')
      //子组件向父组件传递数据,通过事件来完成
      this.$emit('conditionChange', this.condition)
    }
  }
}
</script>