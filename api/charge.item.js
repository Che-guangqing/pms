import request from '@/plugin/axios'
const BASE_URL = "/charge/item"
export function getChargeItemByRoomID(roomID) {
  return request({
    url: BASE_URL + "/getByRoomID/" + roomID,
    method: 'get'
  })
}
export function getChargeItems() {
  return request({
    url: BASE_URL + "/allItem",
    method: 'post'
  })
}