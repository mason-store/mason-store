import axios from "axios";
export const bashUrl = 'http://127.0.0.1:13812'
const service = axios.create({
  baseURL: bashUrl,
  timeout: 50000,
});
// 设置请求头
service.interceptors.request.use((config) => {
  const token = 'toekn202'
  if (token) { config.headers['access-token'] = token }// 设置token
  return config
}, (error) => { console.error(error) })
service.interceptors.response.use(
  async response => {
    const res = response.data
    if (res.code === 504 || res.code === 503) {
      console.log('请重新登录'); // token 过期或无效
    } else if (res.code === 505 || res.code === 500) {
      console.log('服务错误'); // 服务器错误or内部代码错误
    } else {
      return res;
    }
  },
  error => {
    console.log('网络异常'); // 服务器错误or内部代码错误
    console.error('接口或网络异常', error);
  }
)
export default service;
