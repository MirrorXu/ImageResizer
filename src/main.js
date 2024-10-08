import Vue from 'vue'
import App from './App'
// import './font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
