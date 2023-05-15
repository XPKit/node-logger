import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import LogViewer from '.'

Vue.config.productionTip = false

Vue.use(LogViewer)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
