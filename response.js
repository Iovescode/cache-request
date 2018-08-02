export function Response () {

  // 适配器执行
  if (this.adapter.req) {
    Object.keys(this.adapter.res).forEach(element => {
      if (this.adapter.res[element].constructor === Function) {
        this.adapter.res[element].bind(this)()
      } else {
        throw new Error(`${element}必须是一个函数`)
      }
    })
  }
  if (this.shop) {
    
  }
  return this.data.json()
}
