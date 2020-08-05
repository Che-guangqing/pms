import { getFormulaByChargeItemID } from "@/api/charge.formula"
export default {
  namespaced: true,
  //数据保存在State中
  state: {
  },
  //对于后台的请求放在actions中
  actions: {
    getFormulaByChargeItemID(context, chargeItemID) {
      return new Promise((resolve, reject) => {
        getFormulaByChargeItemID(chargeItemID).then(result => {
          //服务器请求成功,调用resolve方法,代表该Promise执行成功,调用then方法
          resolve(result);
        })
      })
    }
  }
}