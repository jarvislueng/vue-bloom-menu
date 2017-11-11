import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import goods from 'components/goods/goods'
// import ratings from 'components/ratings/ratings'
// import seller from 'components/seller/seller'
// import vueTap from 'v-tap'
// import fastclick from 'fastclick'
import Vuex from 'vuex'

// Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)

const vstore = new Vuex.Store({
  state: {
    count: 0,
    isOpen: false,
    showItem: true
  },

  mutations: {
    changeState (state) {
      state.isOpen = !state.isOpen
    },
    changeState2 (state) {
      state.showItem = !state.showItem
    }

  }
})
// const router = new VueRouter({
//   // routes: [{
//   //   path: '/goods',
//   //   component: goods
//   // }, {
//   //   path: '/ratings',
//   //   component: ratings
//   // }, {
//   //   path: '/seller',
//   //   component: seller
//   // }],
//   // linkActiveClass: 'active'
// })

new Vue({
  // router,
  store: vstore,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

// router.push('goods')
