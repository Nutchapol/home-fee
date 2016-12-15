// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import kungthai from './components/Kungthai'
import kungsri from './components/Kungsri'
import kasikornthai from './components/Kasikornthai'
import kiatnakin from './components/Kiatnakin'
import tmb from './components/Tmb'
import cimb from './components/Cimb'
import scb from './components/Scb'
import thanachart from './components/Thanachart'
import uob from './components/uob'
import standard from './components/Standard'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {name: 'Helo', path: '/Hello', component: Hello},
       {name: 'kungthai', path: '/kungthai', component: kungthai},
       {name: 'kungsri', path: '/kungsri', component: kungsri},
       {name: 'kasikornthai', path: '/kasikornthai', component: kasikornthai},
       {name: 'kiatnakin', path: '/kiatnakin', component: kiatnakin},
       {name: 'tmb', path: '/tmb', component: tmb},
       {name: 'cimb', path: '/cimb', component: cimb},
       {name: 'scb', path: '/scb', component: scb},
       {name: 'thanachart', path: '/thanachart', component: thanachart},
       {name: 'uob', path: '/uob', component: uob},
       {name: 'standard', path: '/standard', component: standard}

  ]
})

new Vue({
  router,
  template: '<App/>',
  components: { App },
  el: '#app',
  render: h => h(App) // Start component App.vue
}).$mount('#app')
