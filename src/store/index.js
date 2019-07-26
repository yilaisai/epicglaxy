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
  },
  actions,
  mutations,
  strict,
});

export default store;
