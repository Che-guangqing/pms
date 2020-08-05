<template>
  <el-form :inline="true" :model="condition" size="mini">
    <el-form-item label="时间段">
      <el-date-picker v-model="condition.dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="目标小区">
      <el-select v-model="condition.areaID" placeholder="请选择目标小区">
        <el-option v-for="(item,index) in areaList" :key="index" :label="item.areaName" :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="套户">
      <el-cascader :options="roomList" v-model="condition.roomIDList" :props="{ multiple: true }" clearable :disabled="!condition.areaID" collapse-tags size="small"></el-cascader>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      condition: {},
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
      ],
      areaList: [
        { id: "1", areaName: "佳馨花园" },
        { id: "2", areaName: "印象城" },
      ],
    }
  },
  methods: {
    onSearch() {
      this.$emit('conditionChange', this.condition)
    }
  }
}
</script>