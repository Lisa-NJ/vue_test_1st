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
  lintOnSave: false // stop grammer check
}