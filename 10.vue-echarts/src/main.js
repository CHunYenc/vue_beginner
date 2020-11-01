import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import echarts from 'echarts'
import router from '../src/Routers'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')