<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="loading">
      <el-table-column prop="areaName" label="小区名称">
      </el-table-column>
      <el-table-column prop="areaAddress" label="小区地址">
      </el-table-column>
      <el-table-column prop="areaManager" label="管理员">
      </el-table-column>
      <el-table-column prop="areaTel" label="联系方式">
      </el-table-column>
      <el-table-column prop="groupName" label="所属机构">
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
    <dialogAreaModify ref="dialogAreaModify"></dialogAreaModify>
  </d2-container>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  mounted() {
    this.loading = true
    this.getAreaList().then(result => {
      //服务器请求成功,Result中存放的是请求的结果
      this.tableData = result;//把结果赋值给tableData
      this.loading = false
    })
  },
  data() {
    return {
      loading: false,
      tableData: [],
    };
  },
  methods: {
    ...mapActions('pms/base.area', ['getAreaList']),
    onAdd() {
      this.$refs.dialogAreaModify.showDialog()
    },
    onUpdate(row) {
      this.$refs.dialogAreaModify.showDialog(row)
    },

  },
  components: {
    dialogAreaModify: () => import('./dialog-area-modify')
  }
};
</script>