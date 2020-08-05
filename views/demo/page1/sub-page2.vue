<template>
  <div>
    <h1>这是组件2</h1>
    <h2>{{data}}</h2>
    <h2>{{boolData}}</h2>
    <el-button type="info" @click="onClick">触发事件</el-button>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('sub-page2 初始化完成')
  },
  props: {
    data: {
      type: String,
      default: '这是默认字符串'
    },
    boolData: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      console.log("触发事件,用于通知父组件")
      this.$emit('eventSubPage2Click', { data1: this.data, data2: this.boolData })
    }
  }
}
</script>