// 导入所有和用户相关的请求
import axios from '@/utils/request'
import store from '@/store'
// 登录接口
export function login (mobile, code) {
  return axios({
    method: 'POST',
    url: '/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 获取个人信息
export function getUserInfo () {
  return axios({
    method: 'GET',
    url: '/v1_0/user/profile',
    headers: {
      Authorization: 'Bearer ' + store.state.token.token
    }
  })
}
