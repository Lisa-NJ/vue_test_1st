import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局使用 mixin
// import {show} from './show'

// Vue.mixin(show)

new Vue({
  el: '#app',
  render: h => h(App)
})