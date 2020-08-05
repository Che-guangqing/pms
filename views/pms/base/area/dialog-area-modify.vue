<template>
  <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
    <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules">
      <el-form-item label="小区名称" prop="areaName">
        <el-input v-model="formData.areaName" placeholder="请输入小区名称" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="所属机构" prop="groupID">
        <el-cascader v-model="formData.groupID" :options="groupList" :show-all-levels="false"></el-cascader>
      </el-form-item>
      <el-form-item label="管理员" prop="areaManager">
        <el-input v-model="formData.areaManager" placeholder="请输入管理员" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="areaTel">
        <el-input v-model="formData.areaTel" placeholder="请输入联系方式" maxlength="50" show-word-limit></el-input>
      </el-form-item>

      <el-form-item label="小区地址">
        <el-input v-model="formData.areaAddress" type="textarea" :rows="2" placeholder="请输入小区地址" maxlength="100" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onModify">确定</el-button>
        <el-button @click="showModify=false">取消</el-button>
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
        areaName: [
          { required: true, message: "请输入小区名称", trigger: "blur" }
        ],
        groupID: [
          { required: true, message: "请选择所属机构", trigger: "blur" }
        ],
        areaManager: [
          { required: true, message: "请输入管理员名称", trigger: "blur" }
        ],
        areaTel: [
          { required: true, message: "请输入联系方式", trigger: "blur" }
        ]
      },
      groupList: [
        {
          value: "1",
          label: "集团公司",
          children: [
            {
              value: "11", label: "西安分公司", children: [
                { value: "111", label: "北郊分公司" },
                { value: "112", label: "东郊分公司" },
                { value: "113", label: "南郊分公司" },
                { value: "114", label: "西郊分公司" },
              ]
            },
            { value: "12", label: "渭南分公司" },
            { value: "13", label: "宝鸡分公司" },
          ]
        }
      ]
    }
  },
  methods: {
    showDialog(data = {}) {
      this.showModify = true
      this.formData = data
    },
    onModify() {
      console.log(this.formData)
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.formData.id) {
            console.log("这是修改方法,调用修改方法");
          } else {
            console.log("这是新增方法");
          }
          this.showModify = false;
        } else {
          console.log("验证失败");
        }
      });
    },
  }
}
</script>