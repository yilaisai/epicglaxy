import Vue from 'vue'
import { Button } from 'element-ui'

const otcElementUi = [Button];

otcElementUi.forEach((comp) => {
  Vue.use(comp)
});

