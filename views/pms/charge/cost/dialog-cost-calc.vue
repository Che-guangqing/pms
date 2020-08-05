<template>
  <el-dialog title="费用计算" :visible.sync="show" width="30%" center>
    <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules" v-loading="pageLoading" element-loading-text="正在算费请稍等" element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 0.8)">
      <el-form-item label="计费月份" prop="month">
        <el-date-picker v-model="formData.month" type="month" placeholder="选择计费月份">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="目标小区">
        <el-select v-model="formData.areaID" placeholder="请选择目标小区">
          <el-option v-for="(item,index) in areaList" :key="index" :label="item.areaName" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="目标楼宇">
        <el-select v-model="formData.buildingIDList" multiple placeholder="请选择楼宇" multiple-limit="3">
          <el-option v-for="item in buildingList" :key="item.id" :label="item.buildingName" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="btnLoading">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      btnLoading: false,
      pageLoading: false,
      formData: {},
      validateRules: {},
      areaList: [
        { id: "1", areaName: "佳馨花园" },
        { id: "2", areaName: "印象城" },
      ],
      buildingList: [
        { id: '1', buildingName: '1号楼' },
        { id: '2', buildingName: '2号楼' },
        { id: '3', buildingName: '3号楼' },
        { id: '4', buildingName: '4号楼' },
        { id: '5', buildingName: '5号楼' },
      ]
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    onSubmit() {
      //做法 1
      //让提交按钮,变为加载状态
      // this.btnLoading = true
      // setTimeout(() => {
      //   //两秒钟之后,提交按钮,变回正常状态
      //   this.btnLoading = false
      //   //关闭dialog
      //   this.show = false
      // }, 2000);

      //做法2 整页显示加载状态(推荐)
      this.pageLoading = true
      setTimeout(() => {
        this.pageLoading = false
        this.show = false
      }, 2000);
    }
  }
}
</script>