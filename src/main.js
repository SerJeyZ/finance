import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import dateFilter from '@/filters/filter.date'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
