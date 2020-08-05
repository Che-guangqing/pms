<template>
  <el-dialog title="关联套户" :visible.sync="showRelation" width="30%" center>
    <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules">
      <el-form-item label="收费标准">
        <el-cascader :options="chargeItemList" v-model="formData.chargeItemIDList" :props="propsChargeItem" clearable></el-cascader>
      </el-form-item>
      <el-form-item label="目标小区">
        <el-select v-model="formData.areaID" placeholder="请选择目标小区">
          <el-option v-for="(item,index) in areaList" :key="index" :label="item.areaName" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关联套户">
        <el-cascader :options="roomList" v-model="formData.roomIDList" :props="{ multiple: true }" clearable :disabled="!formData.areaID" collapse-tags></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onModify">确定</el-button>
        <el-button @click="showRelation=false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.bindData()
  },
  data() {
    return {
      showRelation: false,
      formData: {},
      validateRules: {},
      propsChargeItem: {
        lazy: true,
        lazyLoad: this.loadFormula
      },
      areaList: [],
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
      chargeItemList: []
    }
  },
  methods: {
    ...mapActions('pms/base.area', ['getAreaList']),
    ...mapActions('pms/charge.item', ['getChargeItems']),
    ...mapActions('pms/charge.formula', ['getFormulaByChargeItemID']),
    showDialog() {
      this.showRelation = true
    },
    loadFormula(node, resolve) {
      console.log(`选中节点的label:${node.label} value:${node.value}`)
      this.getFormulaByChargeItemID(node.value).then(res => {
        let arr = []
        for (let item of res) {
          arr.push({
            value: item.id,
            label: item.chargeFormulaName,
            leaf: true
          })
          item.leaf = true
        }
        console.log(res)
        resolve(res)
      })
    },
    onModify() {
      //这里只是打印,以后会做数据保存,并且应该触发事件,通知父组件,刷新数据
      console.log(this.formData)
      this.showRelation = false
    },
    bindData() {
      //加载小区列表
      this.getAreaList().then(res => {
        this.areaList = res
      })

      this.getChargeItems().then(res => {
        this.chargeItemList = res
      })
    }
  }
}
</script>