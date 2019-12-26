import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Http from './common/js/http';
import components from './common/js/components';
import './plugins/element.js';
import './plugins/scrollReveal.js';
import i18n from "./common/lang";


Vue.use(Http);
Vue.use(components);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
