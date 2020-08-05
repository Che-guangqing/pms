import request from '@/plugin/axios'
const BASE_URL = "/sys/menu"
export function menuList() {
  return request({
    url: BASE_URL + "/all",
    method: 'post',
  })
}