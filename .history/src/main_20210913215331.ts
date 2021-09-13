import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import VueQrcodeReader from 'vue-qrcode-reader';

Vue.config.productionTip = false;
Vue.use(VueQrcodeReader);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
