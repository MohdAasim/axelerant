import Vue from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faBars ,faSearch ,faCartPlus,faCross} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {router} from './router'
import  store  from "./store/store.js"

Vue.config.productionTip = false
library.add(faBars,faSearch,faCartPlus,faCross)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
