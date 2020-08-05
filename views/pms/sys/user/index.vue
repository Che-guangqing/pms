<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="loading">
      <el-table-column prop="loginName" label="登录名称">
      </el-table-column>
      <el-table-column prop="userName" label="用户名称">
      </el-table-column>
      <el-table-column prop="userTel" label="联系方式">
      </el-table-column>
      <el-table-column prop="createDate" label="创建日期">
      </el-table-column>
      <el-table-column prop="ruleName" label="角色">
      </el-table-column>
      <el-table-column align="right" width="260">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAddRule">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdateRule(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="onDelUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="page.total" :page-size="page.size" :current-page="page.index" @current-change="onPageChange">
      </el-pagination>
    </template>
    <dialogUserModify ref="dialogUserModify" @change="onUserChanged"></dialogUserModify>
  </d2-container>
</template>
<script>
import { mapActions } from 'vuex';
import { PAGE_SIZE } from '@/const'
export default {
  mounted() {
    this.bindData()
  },
  data() {
    return {
      tableData: [],
      loading: false,
      page: {
        index: 1,
        total: 0,
        size: PAGE_SIZE
      }
    };
  },
  methods: {
    ...mapActions("pms/sys.user", ['getUserPage', 'deleteUser']),
    onAddRule() {
      this.$refs.dialogUserModify.showDialog()
    },
    onUpdateRule(row) {
      this.$refs.dialogUserModify.showDialog(row)
    },
    onDelUser(row) {
      this.$confirm("确认删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);
          this.deleteUser(row.id).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    onDelConfirm() {
      this.showDelConfirm = false;
      console.log(this.currentDelRow);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    onUserChanged() {
      //当子控件改变了数据后,通过该方法重新加载数据
      this.bindData()
    },
    bindData() {
      this.loading = true
      this.getUserPage({ page: this.page }).then(result => {
        console.log(result)
        this.tableData = result.data
        this.page = result.page
        this.loading = false
      })
    },
    onPageChange(index) {
      //当当前页切换时,修改page对象,然后重新绑定数据
      this.page.index = index
      this.bindData()
    }
  },
  components: {
    dialogUserModify: () => import('./dialog-user-modify')
  }
};
</script>