import request from '@/plugin/axios'

export function HelloWorld() {
  return request({
    url: '/hello',
    method: 'get',
  })
}
export function GetSysMenu() {
  return request({
    url: '/getData',
    method: 'get',
  })
}
export function GetMenuList(id) {
  return request({
    url: '/getMenuList',
    method: 'get',
    params: { id }
  })
}