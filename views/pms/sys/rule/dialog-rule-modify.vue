<template>
  <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
    <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules">
      <el-form-item label="角色名称" prop="ruleName">
        <el-input v-model="formData.ruleName" placeholder="请输入角色名称" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="formData.ruleDesc" type="textarea" :rows="2" placeholder="请输入角色描述" maxlength="100" show-word-limit></el-input>
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
        ruleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    showDialog(data = {}) {
      this.formData = data
      this.showModify = true;
    },
    onModify() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.formData.id) {
            console.log("这是修改方法,调用修改方法");
          } else {
            console.log("这是新增方法");
          }
          this.showModify = false;
          //发送一个事件,通过该事件来通知父组件修改/添加成功
          this.$emit("ruleChanged", this.formData)
        } else {
          console.log("验证失败");
        }
      });
    },
  }
}
</script>