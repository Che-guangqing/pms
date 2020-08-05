import request from '@/plugin/axios'
const BASE_URL = "/sys/rule"
export function ruleList() {
  return request({
    url: BASE_URL + "/all",
    method: 'post',
  })
}