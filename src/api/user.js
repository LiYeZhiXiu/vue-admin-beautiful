import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenName } from '@/config'

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  // console.log(data, '1-------------------------1')
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}

export function getUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data: data,
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/register',
    method: 'post',
  })
}
