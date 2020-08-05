import request from '@/plugin/axios'
const BASE_URL = "/base/area"
export function areaList() {
  return request({
    url: BASE_URL + "/all",
    method: 'post',
  })
}
export function addArea(data) {
  return request({
    url: BASE_URL + "/add",
    method: 'post',
    data
  })
}