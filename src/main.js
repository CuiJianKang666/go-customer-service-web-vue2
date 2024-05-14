import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import $ from 'jquery';
import '@/../public/static/js/index.js';
import '@/../public/static/js/reconnecting-websocket.min.js';
import "@/../public/static/js/echarts.min.js"
import "@/../public/static/js/functions.js"
import Service_LANG from '@/../public/static/js/chat-lang.js?v=0.3.7';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入jquery
window.$ = window.jQuery = $;


Vue.use(ElementUI);
Vue.prototype.Service_LANG = Service_LANG.Service_LANG;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
