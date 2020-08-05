import request from '@/plugin/axios'
const BASE_URL = "/sys/user"
export function userList() {
  return request({
    url: BASE_URL + "/all",
    method: 'post',
  })
}

export function userPage(data) {
  return request({
    url: BASE_URL + "/page",
    method: 'post',
    data
  })
}
export function userAdd(data) {
  return request({
    url: BASE_URL + "/add",
    method: 'post',
    data
  })
}
export function userUpdate(data) {
  return request({
    url: BASE_URL + "/update",
    method: 'post',
    data
  })
}
export function userDelete(id) {
  return request({
    url: BASE_URL + "/del",
    method: 'post',
    data: { id }
  })
}