import { baseURL } from '@/config'
import axios from 'axios'

class HttpRequest {
  constructor() {
    this.baseURL = baseURL
    this.timeout = 10000
  }
  request(options) {
    const instance = axios.create()

    this.setInterceptors(instance)

    const opts = this.mergeOptions(options)

    return instance(opts)
  }
  setInterceptors(instance) {
    instance.interceptors.request.use((config) => {
      return config
    })
    instance.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject('服务端请求错误')
        }
      },
      (error) => {
        Promise.reject(error)
      }
    )
  }
  mergeOptions(options) {
    return { baseURL: this.baseURL, timeout: this.timeout, ...options }
  }
  get(url, config) {
    return this.request({
      method: 'get',
      url,
      ...config
    })
  }
  post(url, data) {
    return this.request({
      method: 'post',
      url,
      data
    })
  }
}

export default new HttpRequest()
