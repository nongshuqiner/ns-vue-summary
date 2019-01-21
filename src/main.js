import Vue from 'vue'
import App from './App.vue'

import NsUI from './index.js'
Vue.use(NsUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
