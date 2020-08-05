import { roomPage } from '@/api/base.room'

export default {
  namespaced: true,
  //数据保存在State中
  state: {
    menu: []
  },
  //对于后台的请求放在actions中
  actions: {
    getRoomList(context, data) {
      return new Promise((resolve, reject) => {
        roomPage(data).then(result => {
          //服务器请求成功,调用resolve方法,代表该Promise执行成功,调用then方法
          resolve(result);
        })
      })

    }
  }
}