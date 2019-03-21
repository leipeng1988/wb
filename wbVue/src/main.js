import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/common.css"
import "./assets/css/iconfont.css"
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
