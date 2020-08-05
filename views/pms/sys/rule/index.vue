<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" ref="tableData" v-loading="loading">
      <el-table-column prop="ruleName" label="角色名称">
      </el-table-column>
      <el-table-column prop="ruleDesc" label="角色描述">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAddRule">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdateRule(scope.row)">修改</el-button>
          <el-button size="mini" type="success" plain @click="showModifyMenuDialog(scope.row)">分配菜单</el-button>
          <el-button size="mini" type="danger" @click="onDelRule(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>
    <dialogRuleModify ref="dialogRuleModify" @ruleChanged="onRuleChanged"></dialogRuleModify>
    <dialogMenuModify ref="dialogMenuModify"></dialogMenuModify>
  </d2-container>
</template>
<script>
//同步加载组件,此种方式存在最终生成的js文件过大,所以说需要动态加载(懒加载)
// import dialogRuleModify from './dialog-rule-modify'
import { mapActions } from "vuex"
export default {
  mounted() {
    this.loading = true
    this.getRuleList().then(res => {
      this.tableData = res
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
    //mapActions('模块名/文件名',['方法名称'])
    ...mapActions('pms/sys.rule', ['getRuleList']),
    onAddRule() {
      this.$refs.dialogRuleModify.showDialog()
    },
    onUpdateRule(row) {
      this.$refs.dialogRuleModify.showDialog(row)
    },
    onDelRule(row) {
      this.$confirm("确认删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    onRuleChanged(data) {
      console.log(data)
      //父组件接收到了角色信息被修改或添加,这时,需要重新获取列表数据
    },
    showModifyMenuDialog(row) {
      this.$refs.dialogMenuModify.showDialog()
    },

  },
  components: {
    //把组件加载的方式,变成一个function,当需要使用到该组件的时候,才去执行该方法,动态加载组件
    dialogRuleModify: () => import("./dialog-rule-modify"),
    dialogMenuModify: () => import("./dialog-rule-menu")
  }
};
</script>