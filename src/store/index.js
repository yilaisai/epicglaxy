import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';


Vue.use(Vuex);

// Open strict mode. https://vuex.vuejs.org/zh-cn/strict.html
const strict = `"${process.env.NODE_ENV}"` === 'development';

const store = new Vuex.Store({
  state: {
    isLoading: false, // loading
    ScrollConfig: {
      duration: 600,
      delay: 200,
      enter: 'bottom',
      // reset: true,
      mobile: true,
      distance: '40px',
      opacity: 0.001
    }
  },
  actions,
  mutations,
  strict,
});

export default store;
