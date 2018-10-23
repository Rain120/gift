import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Envelope',
      component: () => import('components/Envelope/Envelope')
    }
    // {
    //   path: '/',
    //   name: 'TypingWords',
    //   component: () => import('components/TypingWords/TypingWords')
    // }
  ]
})
