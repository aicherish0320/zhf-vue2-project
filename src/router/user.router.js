export default [
  {
    path: '/reg',
    component: () =>
      import(/* webpackChunkName: "RegView" */ '@/views/user/RegView')
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "LoginView" */ '@/views/user/LoginView')
  },
  {
    path: '/forget',
    component: () =>
      import(/* webpackChunkName: "ForgetView" */ '@/views/user/ForgetView')
  }
]
