import Vue from 'vue'

import App from './App.vue'
import store from './store'

const app = new Vue({
  store,
  render: h => h(App)
})

app.$mount('#app')
