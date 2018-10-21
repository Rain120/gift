import Vue from 'vue'
import Router from 'vue-router'
import TypingWords from 'components/TypingWords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TypingWords',
      component: TypingWords
    }
  ]
})
