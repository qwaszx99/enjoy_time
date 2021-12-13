import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ResponseProps } from 'types'
import { APP } from '../config'

class Http {
  baseUrl: string
  header: {}
  instance: AxiosInstance | null

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.header = { ...APP.header }
    this.instance = null
    this.init()
  }

  /**初始化 */
  init() {
    let instance = axios.create({ baseURL: this.baseUrl, headers: this.header })
    this.interceptors(instance)
    this.instance = instance
  }

  /**绑定请求拦截器 */
  interceptors(instance: AxiosInstance) {
    // 请求
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      if (process.env.NODE_ENV === 'development') console.warn(error)
      return Promise.reject(error ? `${error.message || ''}` : '')
    })

    // 响应
    instance.interceptors.response.use(res => {
      return this.handleRespone(res)
    }, error => {
      return Promise.reject(error.response ? `${error.response.message || ''}` : '')
    })
  }


  /**请求 */
  async request(options: AxiosRequestConfig<any>) {
    if(!this.instance) return
    return this.instance(options)
  }

  /**
   * 设置请求头
   * @param {string} key 
   * @param {any} value 
   */
  setHeader(key: string | number, value: string) {
    if(!this.instance) return
    this.instance.defaults.headers.common[key] = value
  }

  /**
   * 设置URL
   * @param {string} url 
   */
  setBaseUrl(url: string | undefined) {
    if(!this.instance) return
    this.instance.defaults.baseURL = url
  }

  /**
   * 处理响用体
   * @param {response} res 
   */
  handleRespone(res: AxiosResponse<unknown, any>) {
    const { code, msg, data } = res.data as ResponseProps
    switch (code) {
      case 200:
        return data
      case 401:
        return Promise.reject(`未登录或登录状态已过期`)
      case 403:
        return Promise.reject(`无权限使用此功能`)
      default:
        return Promise.reject(`${msg || '未知原因'}`)
    }
  }

}

export default Http
