const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 在vue.config.js中添加，表示不进行eslint验证即可
  lintOnSave: false
})
