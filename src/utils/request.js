// 引入axios
import axios from 'axios'

// 使用自定义配置新建一个 axios 实例
var instance = axios.create({
  // 基础路径
  baseURL: 'http://toutiao-app.itheima.net/',
  // 超时处理
  timeout: 3000
})

// 导出axios
export default instance
