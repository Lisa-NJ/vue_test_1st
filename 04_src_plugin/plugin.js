import show from './show'

export default {
  install(Vue) {
    Vue.filter('upperCase', function (val) {
      return val.toString().toUpperCase()
    })

    Vue.directive('fbind', {
      bind(element, binding) {
        element.value = binding.value
      },
      inserted(element, binding) {
        element.focus()
      },
      update(element, binding) {
        element.value = binding.value
      }
    })

    Vue.mixin(show)

    Vue.prototype.hello = () => {
      console.log('Hello');
    }
  }
}