const { defineConfig } = require('@vue/cli-service')
const svgCaptcha = require('svg-captcha')

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
            url: 'https://aic-lego.oss-cn-hangzhou.aliyuncs.com/editor-uploads/kj.jpeg'
          },
          {
            _id: 2,
            url: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
          },
          {
            _id: 3,
            url: 'https://aic-lego.oss-cn-hangzhou.aliyuncs.com/editor-uploads/lisa.jpg'
          }
        ])
      })
      devServer.app.post('/api/user/reg', (_, response) => {
        response.json({
          code: 0,
          message: '成功'
        })
      })
      devServer.app.get('/api/public/getCaptcha', (_, response) => {
        const captcha = svgCaptcha.create()
        response.type('svg')
        response.status(200).send(captcha.data)
      })

      return middlewares
    }
  }
})
