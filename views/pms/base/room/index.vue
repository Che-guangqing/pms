<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="loading">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <sublistBaseRoom :roomID="scope.row.id"></sublistBaseRoom>
        </template>
      </el-table-column>
      <el-table-column prop="roomNumber" label="房间编号">
      </el-table-column>
      <el-table-column prop="roomArea" label="建筑面积">
        <template slot-scope="scope">
          {{scope.row.roomArea}} 平米
        </template>
      </el-table-column>
      <el-table-column prop="roomFloor" label="楼层">
        <template slot-scope="scope">
          {{scope.row.roomFloor}} 层
        </template>
      </el-table-column>
      <el-table-column prop="roomDirection" label="朝向">
        <template slot-scope="scope">
          {{roomDirectionList[scope.row.roomDirection]}}
        </template>
      </el-table-column>
      <el-table-column prop="roomType" label="套户类型">
        <template slot-scope="scope">
          {{roomTypeList[scope.row.roomType]}}
        </template>
      </el-table-column>
      <el-table-column prop="buildingName" label="所在楼宇">
      </el-table-column>
      <el-table-column prop="ownerName" label="业主姓名">
      </el-table-column>
      <el-table-column align="right" width="250px">
        <template slot="header" slot-scope="scope">
          <el-button type="warning" plain size="mini" @click="onChargeItemRelation">批量分配收费标准</el-button>
          <el-button type="primary" plain size="mini" @click="onAdd">新增</el-button>

        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdate(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="page.total" :page-size="page.size" :current-page="page.index" @current-change="onPageChange">
      </el-pagination>
    </template>
    <dialogRoomModify ref="dialogRoomModify"></dialogRoomModify>
    <dialogRoomItemRelation ref="dialogRoomItemRelation"></dialogRoomItemRelation>
  </d2-container>
</template>
<script>
import { roomTypeList, roomDirectionList } from '@/enums/base'
import obj from '@/enums/base' //不推荐使用这种方法
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
      },
      roomDirectionList,
      roomTypeList,//es6 新语法,当一个变量要赋值给对象属性时,如果变量名称跟属性名称一致,那么直接传入变量名称即可
    };
  },
  methods: {
    ...mapActions('pms/base.room', ['getRoomList']),
    onAdd() {
      this.$refs.dialogRoomModify.showDialog()
    },
    onUpdate(row) {
      this.$refs.dialogRoomModify.showDialog(row)
    },
    onChargeItemRelation() {
      this.$refs.dialogRoomItemRelation.showDialog()
    },
    onPageChange(current) {
      this.page.index = current
      this.bindData()
    },
    bindData() {
      this.loading = true
      this.getRoomList({ page: this.page }).then(res => {
        this.tableData = res.data
        this.page = res.page
        this.loading = false
      })
    }
  },
  components: {
    dialogRoomModify: () => import('./dialog-room-modify'),
    sublistBaseRoom: () => import('./sublist-base-room'),
    dialogRoomItemRelation: () => import('./dialog-room-item-relation')
  }
};
</script>