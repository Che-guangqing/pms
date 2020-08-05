<template>
  <el-dialog title="提示" :visible.sync="showModify" width="30%" center @close="$refs.form.resetFields()">
    <el-form ref="form" :model="formData" label-width="100px" :rules="validateRules" size="mini">
      <el-form-item label="房间编号" prop="roomNumber">
        <el-input v-model="formData.roomNumber" placeholder="请输入房间编号" maxlength="20" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="建筑面积" prop="roomArea">
        <el-input-number v-model="formData.roomArea" controls-position="right" :min="0" :max="9999" :precision="2" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="楼层" prop="roomFloor">
        <el-input-number v-model="formData.roomFloor" controls-position="right" :min="0" :max="200" :precision="0" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="朝向" prop="roomDirection">
        <el-select v-model="formData.roomDirection" default-first-option placeholder="请选择朝向">
          <el-option v-for="(item,index) in roomDirectionList" :key="index" :label="item" :value="index">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="套户类型" prop="roomType">
        <el-select v-model="formData.roomType" default-first-option placeholder="请选择套户类型">
          <el-option v-for="(item,index) in roomTypeList" :key="index" :label="item" :value="index">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属楼宇" prop="buildingIDList">
        <el-cascader v-model="formData.buildingIDList" :options="buildingOptions" @change="onBuildingChange"></el-cascader>
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
      formData: {},
      showModify: false,
      roomDirectionList: ['正东', '正南', '正西', '正北'],
      roomTypeList: ['一室', '两室', '三室', '四室', '五室', '六室'],
      buildingOptions: [
        {
          value: '1', label: '印象城', children: [
            {
              value: '11', label: '1号楼', children: [
                { value: '111', label: '一单元' },
                { value: '112', label: '二单元' },]
            },
            { value: '12', label: '2号楼' },
            { value: '13', label: '3号楼' },
            { value: '14', label: '4号楼' },
            { value: '15', label: '5号楼' },
          ],

        },
        {
          value: '2', label: '佳馨花园', children: [
            { value: '21', label: '1号楼' },
            { value: '22', label: '2号楼' },
            { value: '23', label: '3号楼' },
            { value: '24', label: '4号楼' },
            { value: '25', label: '5号楼' },
          ]
        }
      ],
      validateRules: {
        roomNumber: [
          { required: true, message: "请输入房间编号", trigger: "blur" }
        ],
        roomArea: [
          { required: true, message: "请输入建筑面积", trigger: "blur" }
        ],
        roomFloor: [
          { required: true, message: "请输入楼层", trigger: "blur" }
        ],
        roomDirection: [
          { required: true, message: "请选择套户朝向", trigger: "blur" }
        ],
        roomType: [
          { required: true, message: "请选择套户类型", trigger: "blur" }
        ],
        buildingIDList: [
          { required: true, message: "请选择楼宇单元", trigger: "blur" }
        ]
      },
    }
  },
  methods: {
    showDialog(data = { roomArea: 100, roomFloor: 1 }) {
      this.showModify = true
      this.formData = data
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
    onBuildingChange(arg) {
      let buildingID = arg[1];
      let unitID = arg[2];
      //在极少数情况下,直接通过=赋值,会使得界面中的双向绑定失效,通过this.$set可以解决此类问题
      this.$set(this.formData, 'buildingID', buildingID)
      // this.formData.buildingID = buildingID
      this.$set(this.formData, 'unitID', unitID)
      // this.formData.unitID = unitID
    }
  }
}
</script>