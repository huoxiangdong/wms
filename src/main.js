import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import router from './router'


Vue.config.productionTip = false

var instance = axios.create({
  baseURL: 'http://192.168.31.10:89/api',
  headers: {
    "Access-Control-Allow-Orign": "**",
    "Authorization": "Bearer 7sQDR8x1L5pkQnJ6esklhN7lXZkZckMDurGRRnghpJ4jQFK2dYgTmRf8m2RH8eKZCLT3wBQH6KG3I6AQYERKefWfSPyzm77AozvmQ7RvGcW6UOXMj3Vd1Hcls-YucnmxC-ENjT4nHYObo05Hj0zJJEWdH0J2O_zOkBgUUhcj2wQPEwax638uVJ-FYcT6-8nu4I6tSrZvWPT_y6Rh8ukt147-u7grKhFoUxsCf8TRhmSoApQL_AcXmiAZnMJTrbzZRdqCE5MZi44TiGNGXYvmWA"
  }
})

Vue.use(VueAxios, instance)

new Vue({
  router,
  render: h => h('router-view')
}).$mount('#app')
