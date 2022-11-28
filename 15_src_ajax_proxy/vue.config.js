//  const { defineConfig } = require('@vue/cli-service')

//  module.exports = defineConfig({
//   transpileDependencies: true
// })

//commonJS 
module.exports =
{
  pages: {
    index: {
      entry: 'src/main.js'
    },
  },
  lintOnSave: false, // stop grammer check
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      '/stu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/stu': '' },
        ws: true,
        changeOrigin: true
      },
      '/car': {
        target: 'http://localhost:5002',
        pathRewrite: { '^/car': '' },
        ws: true,
        changeOrigin: true
      }
    }

  }
}