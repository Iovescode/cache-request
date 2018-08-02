import { Request } from './request'
import utils from './utils'
require('es6-promise').polyfill()
require('isomorphic-fetch')
const Http = Object.create(null)
Http.create = function (config) {
  this.utils = utils
  this.adapter = utils.verifyAdapter(config.adapter)
  this.allowMethod = ['post', 'get', 'put', 'delete', 'options']
  this.globalConfig = config
  this.allowMethod.forEach(element => {
    if (!this[element]) {
      this[element] = Request.bind(this, element)
    }
  })
}
export default Http
