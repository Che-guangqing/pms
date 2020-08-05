<template>
  <el-dialog title="提示" :visible.sync="showModify" width="50%" center>
    <el-form ref="form" size="mini" :model="formData" label-width="120px" :rules="validateRules">
      <el-form-item label="收费项目名称" prop="chargeItemName">
        <el-input v-model="formData.chargeItemName" placeholder="请输入收费项目名称" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="收费类型" prop="chargeItemType">
        <el-select v-model="formData.chargeItemType" placeholder="请选择收费类型">
          <el-option label="费用类" :value="0"></el-option>
          <el-option label="押金类" :value="1"></el-option>
          <el-option label="仪表类" :value="2"></el-option>
          <el-option label="临时类" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收费项目备注" prop="chargeItemRemark">
        <el-input v-model="formData.chargeItemRemark" type="textarea" :rows="2" placeholder="请输入收费项目备注" maxlength="100" show-word-limit></el-input>
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
        roomNumber: [
          { required: true, message: "请输入房间编号", trigger: "blur" }
        ],
      }
    }
  },
  methods: {
    showDialog(data = {}) {
      this.formData = data
      this.showModify = true
    },
    onModify() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log("这是修改方法,调用修改方法");
          this.showModify = false;
        } else {
          console.log("验证失败");
        }
      });
    }
  }
}
</script>