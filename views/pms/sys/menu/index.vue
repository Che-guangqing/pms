<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="loading">
      <el-table-column prop="menuTitle" label="菜单名称">
      </el-table-column>
      <el-table-column prop="menuPath" label="菜单链接">
      </el-table-column>
      <el-table-column prop="menuOrder" label="菜单排序">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdateMenu(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>

    <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
      <el-form ref="form" size="mini" :model="formData" label-width="80px" :rules="validateRules">
        <el-form-item label="菜单名称" prop="menuTitle">
          <el-input v-model="formData.menuTitle" placeholder="请输入菜单名称" maxlength="50" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="菜单排序" prop="menuOrder">
          <el-input-number v-model="formData.menuOrder" controls-position="right" :min="1" :max="100"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onModify">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </d2-container>
</template>
<script>
//1.将请求对象加载进页面
import { menuList } from '@/api/sys.menu'
export default {
  mounted() {
    //页面初始化完毕时,执行该事件,数据初始化应该写在这里
    this.loading = true
    menuList().then(
      res => {
        //当请求成功的时候,调用then方法
        this.tableData = res
        this.loading = false
      }
    )
    // .catch(err => {
    //   //请求失败时调用catch方法,但是d2框架帮我们已经处理了异常情况,在页面上就不需要再处理了
    // })
  },
  data() {
    return {
      loading: false,
      formData: {},
      showModify: false,
      tableData: [
        // { id: "1", menuTitle: "角色管理", menuPath: "/sys/rule", menuOrder: 1 },
        // { id: "2", menuTitle: "菜单管理", menuPath: "/sys/menu", menuOrder: 2 },
        // { id: "3", menuTitle: "用户管理", menuPath: "/sys/user", menuOrder: 3 },
      ],
      validateRules: {
        menuTitle: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
        menuOrder: [{ required: true, message: "请输入菜单排序", trigger: "blur" }]
      },
    };
  },
  methods: {
    onUpdateMenu(row) {
      console.log(row);
      this.formData = row;
      this.showModify = true;
    },
    onModify() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          console.log("这是修改方法,调用修改方法");
          this.showModify = false;
        } else {
          console.log("验证失败");
        }
      });
    }
  }
};
</script>