import qs from 'qs'
import MD5 from 'md5'

const utils = Object.create(null)

utils.qs = qs

utils.md5 = MD5

utils.verifyAdapter = function (config) {
  if (config.res && config.res.constructor !== Object || config.res && config.req.constructor !== Object) {
    throw new Error(`配置文件res或者req的接收参数为数组类型`)
  } else {
    return config
  }
}
export default utils
