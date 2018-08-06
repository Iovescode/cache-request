import { Context } from './context'
// 该文件用于拼装一个完整的请求配置文件
export function Request(...options) {
  if (options.length !== 3) {
    throw new Error(`请求参数配置失败`)
  }
  // 配置请求类型
  const that = Object.assign(Object.create(null), this)
  that.method = options[0]
  that.url = options[1]
  that.params = that.utils.qs.stringify(options[2])
  that.url=that.method==="get"? that.url+'?'+that.params :that.url  
  if (!that.allowMethod.includes(that.method)) {
    throw new Error(`暂不支持${that.method}这种请求方式`)
  }
  // 配置请求地址
  if (that.remote && !that.config.remoteConfig) {
    throw new Error(`请配置-${that.remote}-的跨域访问地址`)
  }
  if (((that.url.includes('http://') || that.url.includes('https://')) && that.globalConfig.BaseUrl)) {
    console.warn('BaseUrl 将会被不会生效')
  } else {
    that.url = that.globalConfig.BaseUrl ? that.globalConfig.BaseUrl + that.url : that.url
  }
  // 适配器执行
  if (that.adapter.req) {
    Object.keys(that.adapter.req).forEach(element => {
      that.adapter.req[element].bind(that)()
    })
  }
  console.log(444444444444)
  return Context.bind(that)()
}
