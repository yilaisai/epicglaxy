/**
 *  Content 全局组件引用，在此引用后就不需要在组件内单独引用
 */

import Vue from 'vue';
import Scroll from 'components/scroll';

// import SacDate from '@/components/sac-date';

const projectComponents = [
  Scroll
];
const plugin = {
  install(Vue) {
    projectComponents.forEach((comp) => {
      Vue.component(comp.name, comp);
    });
  },
};

export default plugin;
export const install = plugin.install;
