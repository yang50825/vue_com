import Vue from 'vue'
import App from './App.vue'
import PannleG from './components/Pannle.vue'

Vue.config.productionTip = false
Vue.component('PannleG', PannleG)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
