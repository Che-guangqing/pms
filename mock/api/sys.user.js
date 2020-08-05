const list = [
  { id: '1', loginName: '测试收银', userName: '高雪雪1', userTel: '13312341234', ruleName: '收银' },
  { id: '2', loginName: '测试收银', userName: '高雪雪2', userTel: '13312341234', ruleName: '收银' },
  { id: '3', loginName: '测试收银', userName: '高雪雪3', userTel: '13312341234', ruleName: '收银' },
]
export default [
  {
    //模拟拦截后台请求
    path: 'http://localhost:8081/sys/user/page',
    method: 'post',
    handle({ body }) {
      return {
        data: list,
        page: {
          index: 1,
          size: 10,
          total: list.length
        }
      }
    }
  },
  {
    path: '/api/sys/user/add',
    method: 'post',
    handle({ body }) {
      console.log('/api/sys/user/add')
      console.log(body)
      return {}
    }
  }
]
