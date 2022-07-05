export default [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue')
  },
  {
    path: '*', // 这个 * 会被处理到当前所有路由的最后面
    component: () =>
      import(/* webpackChunkName: "NotFoundView" */ '@/views/NotFoundView.vue')
  }
]
