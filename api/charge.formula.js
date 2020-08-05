import request from '@/plugin/axios'
const BASE_URL = "/charge/formula"
export function getFormulaByChargeItemID(chargeItemID) {
  return request({
    url: BASE_URL + "/getFormulaByChargeItemID/" + chargeItemID,
    method: 'get'
  })
}