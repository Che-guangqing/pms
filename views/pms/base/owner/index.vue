<template>
  <d2-container>
    <template slot="header">
      <headOwnerSearch @conditionChange="onSearch"></headOwnerSearch>
    </template>

    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <sublistOwnerRoom></sublistOwnerRoom>
        </template>
      </el-table-column>
      <el-table-column prop="ownerName" label="业主姓名">
      </el-table-column>
      <el-table-column prop="ownerTel" label="业主电话">
      </el-table-column>
      <el-table-column prop="ownerIDNumber" label="业主身份证号">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAdd">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onRelation(scope.row)">关联套户</el-button>
          <el-button size="mini" type="success" plain @click="onUpdate(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </template>
    <dialogOwnerModify ref="dialogOwnerModify"></dialogOwnerModify>
    <dialogOwnerRoomRelation ref="dialogOwnerRoomRelation"></dialogOwnerRoomRelation>
  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { id: "1", ownerName: "张三", ownerTel: "13311112222", ownerIDNumber: '123123123123' },
        { id: "2", ownerName: "李四", ownerTel: "13311112222", ownerIDNumber: '123123123123' },
        { id: "3", ownerName: "王麻子", ownerTel: "13311112222", ownerIDNumber: '123123123123' },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$refs.dialogOwnerModify.showDialog()
    },
    onUpdate(row) {
      this.$refs.dialogOwnerModify.showDialog(row)
    },
    onRelation(row) {
      this.$refs.dialogOwnerRoomRelation.showDialog(row)
    },
    onSearch(condition) {
      console.log(condition)
    }
  },
  components: {
    headOwnerSearch: () => import('./head-owner-search'),
    dialogOwnerModify: () => import('./dialog-owner-modify'),
    sublistOwnerRoom: () => import('./sublist-owner-room'),
    dialogOwnerRoomRelation: () => import('./dialog-owner-room-relation')
  }
};
</script>