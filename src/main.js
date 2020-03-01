import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//加载初始化样式
import '@/assets/css/base.css'
//加载封装的网络请求相关
import '@/network/request.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
