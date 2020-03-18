import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入fastclick
import Fastclick from 'fastclick'

import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();

//加载初始化样式
import '@/assets/css/base.css'
//加载封装的网络请求相关
import '@/network/request.js'

//引入图标库
import '@/assets/icon/iconfont.css'

//解决移动端300ms延迟
Fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/lazy.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
