import request from '@/plugin/axios'
const BASE_URL = "/base/room"
export function roomPage(data) {
  return request({
    url: BASE_URL + "/page",
    method: 'post',
    data
  })
}