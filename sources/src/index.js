import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)
var abc = 0;
new Vue({
  render: (h) => h(App)
}).$mount(root)