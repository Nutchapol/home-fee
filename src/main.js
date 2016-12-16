// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App'
import Bangkok from './components/Bangkok'
import kungthai from './components/Kungthai'
import kungsri from './components/Kungsri'
import kasikornthai from './components/Kasikornthai'
import kiatnakin from './components/Kiatnakin'
import tmb from './components/Tmb'
import cimb from './components/Cimb'
import thanachart from './components/Thanachart'
import uob from './components/Uob'
import standard from './components/Standard'
import gsb from './components/Gsb'
import ghb from './components/Ghb'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {name: 'Bangkok', path: '/Bangkok', component: Bangkok},
       {name: 'kungthai', path: '/kungthai', component: kungthai},
       {name: 'kungsri', path: '/kungsri', component: kungsri},
       {name: 'kasikornthai', path: '/kasikornthai', component: kasikornthai},
       {name: 'kiatnakin', path: '/kiatnakin', component: kiatnakin},
       {name: 'tmb', path: '/tmb', component: tmb},
       {name: 'cimb', path: '/cimb', component: cimb},
       {name: 'thanachart', path: '/thanachart', component: thanachart},
       {name: 'uob', path: '/uob', component: uob},
       {name: 'standard', path: '/standard', component: standard},
       {name: 'gsb', path: '/gsb', component: gsb},
       {name: 'ghb', path: '/ghb', component: ghb}

  ]
})

new Vue({
  router,
  template: '<App/>',
  components: { App },
  el: '#app',
  render: h => h(App) // Start component App.vue
}).$mount('#app')
