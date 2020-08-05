import { ruleList } from '@/api/sys.rule'
export default {
  namespaced: true,
  state: {
    ruleList: []
  },
  actions: {
    getRuleList({ state }) {
      return new Promise((resolve, reject) => {
        //判断本地的state(缓存)中ruleList这个数组的长度是否为0,如果为0说明ruleList(缓存)中没有数据,然后去后台请求数据
        if (state.ruleList.length == 0) {
          ruleList().then(
            res => {
              console.log('向服务器请求角色列表')
              //把向服务器请求到的数据,保存一份在state中
              state.ruleList = res
              resolve(res)
            }
          )
        } else {
          console.log('state中已经存在角色列表,直接返回,没有请求服务器')
          //ruleList中已经有数据了,直接返回数据即可
          resolve(state.ruleList)
        }

      })
    },
    addRule(ruleInfo) {

    },
    updateRule(ruleInfo) {

    }
  }
}