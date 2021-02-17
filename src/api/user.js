// 导入所有和用户相关的请求
import axios from '@/utils/request'

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
