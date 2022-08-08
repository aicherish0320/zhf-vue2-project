// webSocket 可以实现双向通信 长链接 h5 提供的 可以实时通信
class WS {
  constructor(config = {}) {
    this.url = config.url || 'localhost'
    this.port = config.port || '3300'
    this.protocol = config.protocol || 'ws'
    // 心跳检测
    this.time = config.time || 30 * 1000
    this.ws = null
  }
  onOpen = () => {
    // 规定好发的必须是对象 对象里包含两个字段 type data
    // websocket 是基于 tcp 第一次连接靠的是 http，但不能修改 header
    this.ws.send(
      JSON.stringify({
        type: 'auth',
        data: 'token'
      })
    )
  }
  onMessage = (e) => {
    let { type, data } = JSON.parse(e.data)
    switch (type) {
      case 'noAuth':
        console.log('没有权限')
        break
      case 'hearCheck':
        this.checkServer()
        this.ws.send(JSON.stringify({ type: 'hearCheck' }))
        break
      default:
        console.log('message', data)
        break
    }
  }
  onClose = () => {
    this.ws.close()
  }
  onError = () => {
    setTimeout(() => {
      this.create()
    }, 1000)
  }
  create() {
    this.ws = new WebSocket(`${this.protocol}://${this.url}:${this.port}`)
    this.ws.onopen = this.onOpen
    this.ws.onmessage = this.onMessage
    this.ws.onclose = this.onClose
    this.ws.onerror = this.onError
  }
  checkServer() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.onClose()
      this.onError()
    }, this.time + 1000)
  }
  send = (msg) => {
    this.ws.send(JSON.stringify(msg))
  }
}

export default WS
