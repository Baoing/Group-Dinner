import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/index.scss'//样式主文件
import './icons' // icon
import NavBar from "@/components/nav-bar"

// register globally
Vue.component('nav-bar', NavBar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
