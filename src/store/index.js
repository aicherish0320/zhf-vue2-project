import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)

files.keys().forEach((key) => {
  let store = files(key).default
  const moduleName = key.replace(/^\.\//, '').replace(/\.js$/, '')
  if (!rootModule.modules) {
    rootModule.modules = {}
  }
  rootModule.modules[moduleName] = store
  rootModule.modules[moduleName].namespaced = true
})

const store = new Vuex.Store(rootModule)
export default store
