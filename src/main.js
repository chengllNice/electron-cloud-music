import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import '@/styles/components/iview-themes/var.less'
import '@/styles/index.scss'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css';

//全局组件
import CommonComponents from '@/components'

//全局方法
import CommonFuc from '@/utils'

Vue.use(ViewUI);
Vue.use(vuescroll);
Vue.use(CommonFuc);
Vue.use(CommonComponents);

Vue.config.productionTip = false;

const mainVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default mainVue;
