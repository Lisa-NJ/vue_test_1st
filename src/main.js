// 项目入口文件

import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 创建 Vue 实例对象 vm
new Vue({
  el: "#app",
  // 下面这一行以后解释，将 App 放入容器中
  render: h => h(App)
})