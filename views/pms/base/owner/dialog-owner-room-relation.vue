<template>
  <el-dialog title="关联套户" :visible.sync="showRelation" width="30%" center>
    <el-form ref="form" size="mini" :model="formData" label-width="80px" :rules="validateRules">
      <el-form-item label="业主姓名">
        {{formData.ownerName}}
      </el-form-item>
      <el-form-item label="业主电话">
        {{formData.ownerTel}}
      </el-form-item>
      <el-form-item label="身份证号">
        {{formData.ownerIDNumber}}
      </el-form-item>
      <el-form-item label="目标小区">
        <el-select v-model="formData.areaID" placeholder="请选择目标小区">
          <el-option v-for="(item,index) in areaList" :key="index" :label="item.areaName" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关联套户">
        <el-cascader :options="roomList" v-model="formData.roomIDList" :props="{ multiple: true }" clearable :disabled="!formData.areaID"></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onModify">确定</el-button>
        <el-button @click="showRelation=false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      showRelation: false,
      formData: {},
      validateRules: {},
      areaList: [
        { id: "1", areaName: "佳馨花园" },
        { id: "2", areaName: "印象城" },
      ],
      roomList: [
        {
          value: "1",
          label: '一号楼',
          children: [
            {
              value: '11',
              label: '1层',
              children: [
                { value: '111', label: '0101' },
                { value: '112', label: '0102' },
                { value: '113', label: '0103' },
                { value: '114', label: '0104' },
              ]
            },
            {
              value: '12',
              label: '2层',
              children: [
                { value: '121', label: '0201' },
                { value: '122', label: '0202' },
                { value: '123', label: '0203' },
                { value: '124', label: '0204' },
              ]
            }, {
              value: '13',
              label: '3层',
              children: [
                { value: '131', label: '0301' },
                { value: '132', label: '0302' },
                { value: '133', label: '0303' },
                { value: '134', label: '0304' },
              ]
            }, {
              value: '14',
              label: '4层',
              children: [
                { value: '141', label: '0401' },
                { value: '142', label: '0402' },
                { value: '143', label: '0403' },
                { value: '144', label: '0404' },
              ]
            }, {
              value: '15',
              label: '5层',
              children: [
                { value: '151', label: '0501' },
                { value: '152', label: '0502' },
                { value: '153', label: '0503' },
                { value: '154', label: '0504' },
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    showDialog(data) {
      this.formData = data
      this.showRelation = true
    },
    onModify() {
      //这里只是打印,以后会做数据保存,并且应该触发事件,通知父组件,刷新数据
      console.log(this.formData)
      this.showRelation = false
    }
  }
}
</script>