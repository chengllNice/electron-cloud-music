import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import '@/styles/components/iview-themes/var.less'
import '@/styles/index.scss'

//全局组件
import CommonComponents from 'components/index.js'

//全局方法
import CommonFuc from '@/utils'

Vue.use(ViewUI);
Vue.use(CommonFuc);
Vue.use(CommonComponents);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
