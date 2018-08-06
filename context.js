import { Response } from './response'
export async function Context () {
  this.data = await fetch(this.url, {
    method: this.method.toUpperCase(),
    body: this.method === 'get' ? undefined : this.params,
    headers: new Headers(this.globalConfig.headers),
    mode: 'cors',
    cache: true
  })
  return Response.bind(Object.assign(Object.create(null), this))()
}
