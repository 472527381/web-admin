import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import moment from 'moment';
import './api';
import './plugins/antd';
import './plugins/components';
import store from './store/'

Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
