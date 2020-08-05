import { menuList } from '@/api/sys.menu'
export default {
  namespaced: true,
  //数据保存在State中
  state: {
    menu: []
  },
  //对于后台的请求放在actions中
  actions: {
    getMenuList({ state }) {
      return new Promise((resolve, reject) => {
        //判断本地的state变量中是否已经有数据,如果没有,向服务器请求
        console.log('state')
        console.log(state)
        if (!state.menu) {
          menuList().then(res => {
            //服务器请求回来的数据,在state.menu中也保存一份,下次同样的请求,就可以直接返回数据,不用去服务器重新请求
            console.log('state')
            console.log(state)
            state.menu = res
            resolve(res)
          })
        } else {
          //本地有数据,直接返回本地数据即可
          return state.menu
        }

      })
    }
  }
}
//1.在store文件夹中创建了一个大目录pms
//2.在pms/modules/目录下按照模块名称,创建文件
//3. namespaced: true,添加state 跟actions
//4.在页面中,通过 mapActions 将指定的方法映射在页面中,供页面中的方法调用