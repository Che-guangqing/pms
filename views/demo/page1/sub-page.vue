<template>
  <div>
    <el-button @click="onTest1">test1</el-button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    console.log('sub-page1 初始化完成')
  },
  methods: {
    ...mapActions('pms/sys.user', ['addUser']),
    onTest1() {
      this.addUser({
        loginName: '张三',
        userName: '李四',
        loginPassword: '123123'
      })
    }
  }
}
</script>