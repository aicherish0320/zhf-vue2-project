import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const files = require.context('./', false, /\.router.js$/)
const routes = []
files.keys().forEach((key) => {
  console.log('key >>> ', key)

  console.log(files(key))
  routes.push(...files(key).default)
})

console.log(' >>> ', routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
