import request from '@/utils/request'

export function getFormOptions(params) {
  return request({
    url: '/vue-element-admin/rendless/options',
    method: 'get',
    params
  })
}
