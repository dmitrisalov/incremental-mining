import '../node_modules/milligram/dist/milligram.min.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from '/src/store/store.js'

const app = createApp(App)
app.use(store)
app.mount('#app')
