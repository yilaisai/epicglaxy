import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Http from './common/js/http';
import components from './common/js/components';
import filter from './common/js/filter';
import './plugins/element.js';

Vue.use(Http);
Vue.use(components);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
