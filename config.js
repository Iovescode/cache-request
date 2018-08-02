export default {
  BaseUrl: '',
  remote: {
    izj: ['dev-izj.hfjy.com', 'test-izj.hfjy.com', 'i-izj.hfjy.com', 'offline-izj.hfjy.com', 'izj.hfjy.com']
  },
  adapter: {
    req: {
      add1() {
        console.log(11111, this)
      },
      add2() {
        console.log(22222, this)
      },
      add3() {
        console.log(333333, this)
      }
    },
    res: {
      remove() {
        console.log(7777777777, this)
      }
    }
  },
  cache: '',
  indexDb: {
    name: '',
    table: []
  },
  headers: {
    'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
  }
}
