import { areaList } from '@/api/base.area'

export default {
  namespaced: true,
  //数据保存在State中
  state: {
    menu: []
  },
  //对于后台的请求放在actions中
  actions: {
    getAreaList() {
      return new Promise((resolve, reject) => {
        areaList().then(result => {
          //服务器请求成功,调用resolve方法,代表该Promise执行成功,调用then方法
          resolve(result);
        })
      })

    }
  }
}