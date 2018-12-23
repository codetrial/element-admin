import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'

import './registerElementUI'

import './styles/app/index.scss'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
