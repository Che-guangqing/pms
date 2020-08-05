<template>
  <el-dialog title="缴费确认" :visible.sync="show" width="50%" center>
    <el-form label-width="80px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="房号:">
            {{roomInfo.roomNumber}}
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="业主:">
            {{roomInfo.ownerName}}
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="业主电话:">
            {{roomInfo.ownerTel}}
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="建筑面积:">
            {{roomInfo.roomArea}}
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="楼层:">
            {{roomInfo.roomFloor}}
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <el-row>
      <el-col :span="8">房号:{{roomInfo.roomNumber}}</el-col>
      <el-col :span="8">{{`业主:${roomInfo.ownerName}`}}</el-col>
      <el-col :span="8">业主电话:{{roomInfo.ownerTel}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">建筑面积:{{roomInfo.roomArea}}</el-col>
      <el-col :span="8">楼层:{{roomInfo.roomFloor}}</el-col>
      <el-col :span="8"></el-col>
    </el-row> -->
    <!-- Emmet语法,速写HTML -->
    <!-- el-row>el-col[:span='3']*3 -->
    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column prop="month" label="计费期" />
      <el-table-column prop="chargeItemName" label="收费项目" />
      <el-table-column prop="feeAccount" label="应收金额" />
      <el-table-column prop="feePayment" label="已收金额" />
      <el-table-column prop="feeBalance" label="欠款" />
    </el-table>
    <div slot="footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="danger" @click="onPay">缴费</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      tableData: [],
      areaID: "",
      roomID: "",
      roomInfo: {}
    }
  },
  methods: {
    showDialog(data) {
      this.show = true
      this.tableData = data.selectedData
      this.roomID = data.roomID

      //得到roomID后需要根据roomID去后台查询出对应的房间信息
      this.roomInfo = {
        roomNumber: '101',
        roomFloor: 33,
        roomArea: 120,
        ownerName: '张三',
        ownerTel: '13322223333'
      }
    },
    onPay() {
      this.$message({
        message: '缴费成功',
        type: 'success'
      });
      this.show = false
    }
  }
}
</script>
<style>
/* 新增一个样式,用来覆盖elementUI的样式,由于业内样式的优先级高于外部css优先级
  当样式名称冲突时,以页内样式为准(标签的style优先级最高>页内样式>外部CSS文件)
 */
.el-form-item {
  margin-bottom: 5px;
}
</style>