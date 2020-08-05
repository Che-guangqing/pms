<template>
  <el-form :inline="true" :model="condition" size="mini">
    <el-form-item label="业主姓名">
      <el-input v-model="condition.ownerName" placeholder="请输入业主姓名" maxlength="50" show-word-limit></el-input>
    </el-form-item>
    <el-form-item label="业主电话">
      <el-input v-model="condition.ownerTel" placeholder="请输入业主电话" maxlength="20" show-word-limit></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      condition: {}
    }
  },
  methods: {
    onSubmit() {
      this.$emit('conditionChange', this.condition)
    }
  }
}
</script>