import Vue from 'vue'
import ScrollReveal from 'ScrollReveal';         //滚动动画插件

const ScrollInstall = {
  install(Vue) {
    Vue.prototype.$ScrollReveal = ScrollReveal
  }
}

Vue.use(ScrollInstall);