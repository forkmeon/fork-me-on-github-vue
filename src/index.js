'use strict';

const Ribbon = require('./ribbon.vue');

export default {
  install(Vue) {
    Vue.component('Ribbon', Ribbon);
  }
};
