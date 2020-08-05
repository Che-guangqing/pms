import { getChargeItemByRoomID, getChargeItems } from '@/api/charge.item'

export default {
  namespaced: true,
  //数据保存在State中
  state: {
  },
  //对于后台的请求放在actions中
  actions: {
    getChargeItemByRoomID(context, roomID) {
      return new Promise((resolve, reject) => {
        getChargeItemByRoomID(roomID).then(result => {
          //服务器请求成功,调用resolve方法,代表该Promise执行成功,调用then方法
          resolve(result);
        })
      })
    },
    getChargeItems() {
      return new Promise((resolve, reject) => {
        getChargeItems().then(result => {
          resolve(result);
        })
      })
    }
  }
}