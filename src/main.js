import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'
import anime from 'animejs'

Vue.use(anime)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
