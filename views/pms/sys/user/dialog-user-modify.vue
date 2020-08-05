<template>
  <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
    <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules" size="small">
      <el-form-item label="登录名称" prop="loginName">
        <el-input v-model="formData.loginName" placeholder="请输入登录名称" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="loginPassword">
        <el-input placeholder="请输入密码" v-model="formData.loginPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="loginPassword2">
        <el-input placeholder="请输入密码" v-model="formData.loginPassword2" show-password></el-input>
      </el-form-item>
      <el-form-item label="用户姓名" prop="userName">
        <el-input v-model="formData.userName" placeholder="请输入用户姓名" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="userTel">
        <el-input v-model="formData.userTel" placeholder="请输入联系方式" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="ruleID">
        <el-select v-model="formData.ruleID" placeholder="请选择角色">
          <el-option v-for="item in ruleData" :key="item.id" :label="item.ruleName" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onModify">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.getRuleList().then(res => {
      this.ruleData = res
    })
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value == this.formData.loginPassword) {
        callback()
      } else {
        //两次输入的密码不一致
        callback(new Error('两次输入的密码不一致'))
      }
    };
    return {
      showModify: false,
      formData: {},
      ruleData: [],
      validateRules: {
        loginName: [{ required: true, message: "请输入登录名称", trigger: "blur" }],
        loginPassword: [{ required: true, message: "请输入密码", trigger: "blur" }],
        loginPassword2: [
          { required: true, message: "请输入重复密码", trigger: "blur" },
          { validator: validatePass, trigger: 'blur' }
        ],
        userName: [{ required: true, message: "请输入用户姓名", trigger: "blur" }],
        userTel: [{ required: true, message: "请输入联系方式", trigger: "blur" }],
        ruleID: [{ required: true, message: "请选择角色名称", trigger: "blur" }],

      }
    }
  },
  methods: {
    ...mapActions("pms/sys.user", ['addUser', 'updateUser']),
    ...mapActions('pms/sys.rule', ['getRuleList']),
    showDialog(data = {}) {
      this.formData = data
      this.showModify = true
    },
    onModify() {
      console.log('onModify')
      console.log(this.formData)
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.formData.id) {
            console.log("这是修改方法,调用修改方法");
          } else {
            this.addUser(this.formData).then(
              () => {
                this.$message.success('添加成功')
              }
            )
          }
          this.showModify = false;
          //当数据添加/修改成功,触发一个change事件
          this.$emit('change')
        } else {
          console.log("验证失败");
        }
      });
    },
  }
}
</script>