import request from './network.js'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}