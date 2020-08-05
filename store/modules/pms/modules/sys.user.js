import { userList, userPage, userAdd, userUpdate, userDelete } from '@/api/sys.user'
export default {
  namespaced: true,
  state: {},
  actions: {
    getUserList() {
      return new Promise((resolve, reject) => {
        userList().then(
          res => {
            resolve(res)
          }
        )
      })
    },
    //context 对象是vuex框架自己放入到第一个参数,界面上调用时传入的参数,需要放入第二个参数
    getUserPage(context, data) {
      return new Promise((resolve, reject) => {
        userPage(data).then(
          res => {
            resolve(res)
          }
        )
      })
    },
    addUser(context, data) {
      return new Promise((resolve, reject) => {
        console.log('addUser')
        console.log(data)
        userAdd(data).then(
          resolve()
        )
      })
    },
    deleteUser(context, id) {
      return new Promise((resolve, reject) => {
        userDelete(id).then(
          resolve()
        )
      })
    }
  }
}