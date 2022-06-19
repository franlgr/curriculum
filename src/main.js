import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import VueNoty from 'vuejs-noty'
Vue.use(VueNoty)
import VueMeta from 'vue-meta';
Vue.use(VueMeta);
// import VeeValidate from 'vee-validate';
// Vue.use(VeeValidate);



Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");