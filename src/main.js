import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue';
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(ElementUI);
locale.use(lang)

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
