import { createApp } from 'vue'
import App from './pages/app/App.vue'
import router from './router'
import store from './store'

// Toast
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, { position: POSITION.BOTTOM_RIGHT })
  .mount('#app')
