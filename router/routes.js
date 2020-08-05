import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: '/page1',
        name: '/page1',
        meta: {
          title: '页面 1',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          title: '页面 2',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'page3',
        name: 'page3',
        meta: {
          title: '页面 3',
          auth: true
        },
        component: _import('demo/page3')
      }, {
        path: '/sys/rule',
        name: '/sys/rule',
        meta: {
          title: '角色管理',
          auth: true
        },
        component: _import('pms/sys/rule')
      }, {
        path: '/sys/user',
        name: '/sys/user',
        meta: {
          title: '用户管理',
          auth: true
        },
        component: _import('pms/sys/user')
      }, {
        path: '/sys/menu',
        name: '/sys/menu',
        meta: {
          title: '菜单管理',
          auth: true
        },
        component: _import('pms/sys/menu')
      }, {
        path: '/base/area',
        name: '/base/area',
        meta: {
          title: '小区管理',
          auth: true
        },
        component: _import('pms/base/area')
      }, {
        path: '/base/building',
        name: '/base/building',
        meta: {
          title: '楼宇管理',
          auth: true
        },
        component: _import('pms/base/building')
      }, {
        path: '/base/room',
        name: '/base/room',
        meta: {
          title: '套户管理',
          auth: true
        },
        component: _import('pms/base/room')
      }, {
        path: '/base/owner',
        name: '/base/owner',
        meta: {
          title: '业主管理',
          auth: true
        },
        component: _import('pms/base/owner')
      }, {
        path: '/charge/item',
        name: '/charge/item',
        meta: {
          title: '收费项目管理',
          auth: true
        },
        component: _import('pms/charge/item')
      }, {
        path: '/charge/order',
        name: '/charge/order',
        meta: {
          title: '订单列表',
          auth: true
        },
        component: _import('pms/charge/order')
      }, {
        path: '/charge/cost',
        name: '/charge/cost',
        meta: {
          title: '费用计算',
          auth: true
        },
        component: _import('pms/charge/cost')
      }, {
        path: '/charge/payment',
        name: '/charge/payment',
        meta: {
          title: '费用收取',
          auth: true
        },
        component: _import('pms/charge/payment')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
