<template>
  <el-form :inline="true" :model="condition" size="mini">
    <el-form-item label="目标小区">
      <el-select v-model="condition.areaID" placeholder="请选择目标小区">
        <el-option v-for="(item,index) in areaList" :key="index" :label="item.areaName" :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="套户">
      <el-cascader :options="roomList" v-model="condition.roomIDList" clearable :disabled="!condition.areaID" collapse-tags size="small"></el-cascader>
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
      console.log(this.condition)
      //将this.condition对象中的areaID拆出来放入到areaID变量中
      //效果等同于let areaID=this.condition.areaID
      const { areaID } = this.condition
      //该语法就是将数组的三个元素,分别放入到三个变量中
      // let arr = [1, 2, 3]
      // const [one, two, three]=arr

      //将下标为2的变量,取出放入roomID
      const [, , roomID] = this.condition.roomIDList

      // console.log("one:" + one + " two:" + two + " three:" + three)
      let str = `roomID:${roomID}`
      console.log(str)
      //当对象的属性与赋值变量同名时,可以直接使用变量名
      //此时,属性名称等于变量名称,属性值等于变量值
      console.log({ areaID, roomID })
      this.$emit('conditionChange', { areaID, roomID })
    }
  }
}
</script>