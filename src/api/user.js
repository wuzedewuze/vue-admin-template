import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login/',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user_api/userinfo/',
    method: 'get'
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserList(page) {
  return request({
    url: '/user_api/user/',
    method: 'get',
    params: { page }
  })
}
