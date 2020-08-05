
export default [
  {
    path: '/api/sys/rule/all',
    method: 'post',
    handle({ body }) {
      console.log(body)
      return [
        { id: '1', ruleName: '收银员', ruleDesc: '具备收银权限' },
        { id: '2', ruleName: '财务', ruleDesc: '具备报表浏览权限' },
        { id: '3', ruleName: '物业经理', ruleDesc: '' },
        { id: '4', ruleName: '财务经理', ruleDesc: '' },
        { id: '5', ruleName: '高层管理', ruleDesc: '具备所有权限' },
      ]
    }
  }
]
