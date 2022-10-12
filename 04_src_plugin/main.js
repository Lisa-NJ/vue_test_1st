import Vue from 'vue'
import plugin from './plugin'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
  el: '#app',
  render: h => h(App)
})