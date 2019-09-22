import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import * as filters from '@/utils/filters.js';
import rootStore from './store/index.js';

Vue.config.productionTip = false;

Vue.use(Element);
Vue.use(Vuex);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

const store = new Vuex.Store(rootStore);

// get blockchain basic info
store.dispatch('basic/fetch');

// 注册全局组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
