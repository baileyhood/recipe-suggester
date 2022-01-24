import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

// Bootstrap Grid: https://getbootstrap.com/docs/4.0/layout/grid/
import './assets/scss/global.scss'

Amplify.configure(awsconfig)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
