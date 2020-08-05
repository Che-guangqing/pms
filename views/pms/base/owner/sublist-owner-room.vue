<template>
  <el-table :data="tableData" style="width: 100%" stripe size="mini" v-loading="loading">
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
    <el-table-column prop="unitName" label="单元">
    </el-table-column>
    <el-table-column prop="ownerName" label="业主姓名">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.tableData = [
        { id: '1', roomNumber: '1-101', roomArea: 108, roomFloor: 1, roomDirection: 0, roomType: 2, buildingIDList: ['1', '11', '111'], buildingName: '一号楼', unitName: '一单元', ownerName: '张三', ownerID: '1' },
        { id: '2', roomNumber: '1-102', roomArea: 90, roomFloor: 1, roomDirection: 1, roomType: 1, buildingIDList: ['1', '11', '111'], buildingName: '一号楼', ownerName: '张三', ownerID: '1' },
        { id: '3', roomNumber: '1-103', roomArea: 150, roomFloor: 1, roomDirection: 2, roomType: 3, buildingIDList: ['1', '11', '111'], buildingName: '一号楼', ownerName: '张三', ownerID: '1' },
      ]
      this.loading = false
    }, 3000);
  },
  data() {
    return {
      loading: false,
      tableData: [],
      roomDirectionList: ['正东', '正南', '正西', '正北'],
      roomTypeList: ['一室', '两室', '三室', '四室', '五室', '六室'],
      buildingOptions: [
        {
          value: '1', label: '印象城', children: [
            {
              value: '11', label: '1号楼', children: [
                { value: '111', label: '一单元' },
                { value: '112', label: '二单元' },]
            },
            { value: '12', label: '2号楼' },
            { value: '13', label: '3号楼' },
            { value: '14', label: '4号楼' },
            { value: '15', label: '5号楼' },
          ],

        },
        {
          value: '2', label: '佳馨花园', children: [
            { value: '21', label: '1号楼' },
            { value: '22', label: '2号楼' },
            { value: '23', label: '3号楼' },
            { value: '24', label: '4号楼' },
            { value: '25', label: '5号楼' },
          ]
        }
      ],
    };
  },
  methods: {
    onUpdate(row) {
    },
    onBuildingChange(arg) {
      let buildingID = arg[1];
      let unitID = arg[2];
      //在极少数情况下,直接通过=赋值,会使得界面中的双向绑定失效,通过this.$set可以解决此类问题
      this.$set(this.formData, 'buildingID', buildingID)
      // this.formData.buildingID = buildingID
      this.$set(this.formData, 'unitID', unitID)
      // this.formData.unitID = unitID
    }
  }
};
</script>