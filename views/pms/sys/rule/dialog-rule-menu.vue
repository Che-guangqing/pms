<template>
  <el-dialog title="提示" :visible.sync="showModifyMenu" width="570px">
    <el-transfer v-model="selectedMenuList" :data="menuData" :titles="['待选菜单', '已选菜单']"></el-transfer>
    <span slot="footer" class="dialog-footer">
      <el-button @click="showModifyMenu = false">取 消</el-button>
      <el-button type="primary" @click="onModifyMenu">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      showModifyMenu: false,
      menuData: [
        { key: "1", label: "角色管理" },
        { key: "2", label: "菜单管理" },
        { key: "3", label: "用户管理" }
      ],
      selectedMenuList: [],
    }
  },
  methods: {
    showDialog() {
      //将菜单Dialog显示出来
      this.showModifyMenu = true
    },
    onModifyMenu() {
      //在用户修改了菜单之后执行
      this.showModifyMenu = false;
      console.log(this.selectedMenuList);
      console.log(this.currentModifyMenuRow);
    }
  }
}
</script>