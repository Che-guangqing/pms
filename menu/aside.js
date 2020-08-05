// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '系统管理',
    icon: 'folder-o',
    children: [
      { path: '/sys/rule', title: '角色管理' },
      { path: '/sys/user', title: '用户管理' },
      { path: '/sys/menu', title: '菜单管理' },
    ]
  },
  {
    title: '基础资料',
    icon: 'folder-o',
    children: [
      { path: '/base/area', title: '小区管理' },
      { path: '/base/building', title: '楼栋管理' },
      { path: '/base/room', title: '套户管理' },
      { path: '/base/owner', title: '业主管理' },
    ]
  },
  {
    title: '费用信息',
    icon: 'folder-o',
    children: [
      { path: '/charge/item', title: '收费项目管理' },
      { path: '/page1', title: '组件演示' },
      { path: '/charge/order', title: '订单列表' },
      { path: '/charge/cost', title: '费用计算' },
      { path: '/charge/payment', title: '费用收取' },
    ]
  }
]
