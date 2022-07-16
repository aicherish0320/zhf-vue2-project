const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      devServer.app.get('/api/public/getSlider', (_, response) => {
        response.json([
          {
            _id: 1,
            url: 'https://www.keaidian.com/uploads/allimg/190424/24110307_35.jpg'
          },
          {
            _id: 2,
            url: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
          },
          {
            _id: 3,
            url: 'https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg'
          }
        ])
      })
      devServer.app.post('/api/user/reg', (_, response) => {
        response.json({
          code: 0,
          message: '成功'
        })
      })

      return middlewares
    }
  }
})
