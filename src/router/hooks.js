import store from '@/store'
import * as types from '@/store/action-types'

export const createWebScoket = async function (to, from, next) {
  // 登录了 但是没有 ws
  if (store.state.user.hasPermission && !store.state.ws) {
    store.dispatch(`${types.CREATE_WEBSOCKET}`)
    next()
  } else {
    next()
  }
}
