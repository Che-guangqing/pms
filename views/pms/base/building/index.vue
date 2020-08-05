<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column prop="buildingName" label="楼宇名称">
      </el-table-column>
      <el-table-column prop="buildingManager" label="管理员">
      </el-table-column>
      <el-table-column prop="buildingManagerTel" label="管家电话">
      </el-table-column>
      <el-table-column prop="buildingFloor" label="总楼层">
      </el-table-column>
      <el-table-column prop="areaName" label="小区名称">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAdd">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdate(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>

    <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
      <el-form ref="form" :model="formData" label-width="100px" :rules="validateRules">
        <el-form-item label="小区名称" prop="buildingName">
          <el-input v-model="formData.buildingName" placeholder="请输入小区名称" maxlength="50" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="所在小区" prop="areaID">
          <el-select v-model="formData.areaID" placeholder="请选择所在小区">
            <el-option v-for="item in areaList" :key="item.id" :label="item.areaName" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="管理员" prop="buildingManager">
          <el-input v-model="formData.buildingManager" placeholder="请输入管理员" maxlength="50" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="管理员电话" prop="buildingManagerTel">
          <el-input v-model="formData.buildingManagerTel" placeholder="请输入管理员电话" maxlength="20" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="总楼层" prop="buildingFloor">
          <el-input-number v-model="formData.buildingFloor" controls-position="right" :min="1" :max="200"></el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onModify">确定</el-button>
          <el-button @click="showModify=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      formData: { buildingFloor: 1 },
      showModify: false,
      tableData: [
        { id: '1', buildingName: '一号楼', buildingManager: '张三', buildingManagerTel: '13344445555', buildingFloor: 33, areaName: '印象城', areaID: '1' },
        { id: '2', buildingName: '二号楼', buildingManager: '李四', buildingManagerTel: '13344445555', buildingFloor: 33, areaName: '印象城', areaID: '1' },
        { id: '3', buildingName: '三号楼', buildingManager: '王麻子', buildingManagerTel: '13344445555', buildingFloor: 33, areaName: '印象城', areaID: '1' },
      ],
      areaList: [
        { id: "1", areaName: "佳馨花园" },
        { id: "2", areaName: "印象城" },
      ],
      validateRules: {
        buildingName: [
          { required: true, message: "请输入楼宇名称", trigger: "blur" }
        ],
        buildingManager: [
          { required: true, message: "请输入管理员姓名", trigger: "blur" }
        ],
        buildingManagerTel: [
          { required: true, message: "请输入管理员电话", trigger: "blur" }
        ],
        buildingFloor: [
          { required: true, message: "请输入总楼层", trigger: "blur" }
        ],
        areaID: [
          { required: true, message: "请选择所属小区", trigger: "blur" }
        ]
      },

    };
  },
  methods: {
    onAdd() {
      this.showModify = true;
    },
    onUpdate(row) {
      console.log(row);
      this.formData = row;
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
        } else {
          console.log("验证失败");
        }
      });
    },
  }
};
</script>