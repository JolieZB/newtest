import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  //关闭产品说明

new Vue({
  router,
  render: h => h(App)  //渲染App组件
}).$mount('#app')
