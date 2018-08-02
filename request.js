import { Context } from './context'
// 该文件用于拼装一个完整的请求配置文件
export function Request(...options) {
  if (options.length !== 3) {
    throw new Error(`请求参数配置失败`)
  }
  // 配置请求类型
  this.method = options[0]
  this.url = options[1]
  this.params = this.utils.qs.stringify(options[2])
  // 配置请求地址
  if (this.remote && !this.config.remoteConfig) {
    throw new Error(`请配置-${this.remote}-的跨域访问地址`)
  }
  if (((this.url.includes('http://') || this.url.includes('https://')) && this.globalConfig.BaseUrl)) {
    console.warn('BaseUrl 将会被不会生效')
  } else {
    this.url = this.globalConfig.BaseUrl ? this.globalConfig.BaseUrl + this.url : this.url
  }
  // 适配器执行
  if (this.adapter.req) {
    Object.keys(this.adapter.req).forEach(element => {
      this.adapter.req[element].bind(this)()
    })
  }
  console.log(444444444444)
  return Context.bind(this)()
}
