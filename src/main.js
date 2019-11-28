import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from "./router";
//Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueSweetAlert2 from 'vue-sweetalert2'

Vue.use(VueAxios,axios)
// Vue.use(VueSweetAlert2);
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
