<template>
  <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
    <el-form ref="form" size="mini" :model="formData" label-width="80px" :rules="validateRules">
      <el-form-item label="业主姓名" prop="ownerName">
        <el-input v-model="formData.ownerName" placeholder="请输入业主姓名" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="业主电话" prop="ownerTel">
        <el-input v-model="formData.ownerTel" placeholder="请输入业主电话" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="ownerIDNumber">
        <el-input v-model="formData.ownerIDNumber" placeholder="请输入身份证号" maxlength="18" show-word-limit></el-input>
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
      validateRules: {
        ownerName: [{ required: true, message: "请输入业主姓名", trigger: "blur" }],
        ownerTel: [{ required: true, message: "请输入业主电话", trigger: "blur" }],
        ownerIDNumber: [{ required: true, message: "请输入身份证号", trigger: "blur" }]
      },
    }
  },
  methods: {
    showDialog(data = {}) {
      this.formData = data
      this.showModify = true
    },
    onModify() {

    }
  }
}
</script>