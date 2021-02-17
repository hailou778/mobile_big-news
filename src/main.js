import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入，可适配移动端，rem
import 'amfe-flexible'
// 全局导入Vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入全局的样式
import '@/styles/base.less'

// 使用Vant组件
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
