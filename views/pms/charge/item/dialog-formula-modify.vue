<template>
  <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
    <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules">
      <el-form-item label="公式名称" prop="formulaName">
        <el-input v-model="formData.formulaName" placeholder="请输入公式名称" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="公式类型" prop="formulaType">
        <el-select v-model="formData.formulaType" placeholder="请选择">
          <el-option label="单价*面积" :value="0"></el-option>
          <el-option label="单价*使用量" :value="1"></el-option>
          <el-option label="定额" :value="2"></el-option>
          <el-option label="自定义" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="系数" prop="coefficient">
        <el-input-number v-model="formData.coefficient" controls-position="right" :min="0.01" :max="10" :precision="2" :step="0.1"></el-input-number>
      </el-form-item>
      <el-form-item label="单价" prop="unitPrice" v-if="formData.formulaType<2">
        <el-input-number v-model="formData.unitPrice" controls-position="right" :min="0.01" :max="9999" :precision="2" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="金额" prop="unitPrice" v-if="formData.formulaType==2">
        <el-input-number v-model="formData.unitPrice" controls-position="right" :min="0.01" :max="9999" :precision="2" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onModify">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      showModify: false,
      formData: {},
    }
  },
  methods: {
    showDialog(data = { coefficient: 1 }) {
      this.formData = data
      this.showModify = true
    },
    onModify() {

    }
  }
}
</script>