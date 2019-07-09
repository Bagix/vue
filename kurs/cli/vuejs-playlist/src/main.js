import Vue from 'vue'
import App from './App.vue'
//import Ninjas from './Ninjas.vue'

//Vue.component('ninjas', Ninjas); // Komponent globalny

new Vue({
  el: '#app',
  render: h => h(App)
})
