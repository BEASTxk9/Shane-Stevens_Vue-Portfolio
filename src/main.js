import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Embed from "v-video-embed"

createApp(App).use(Embed).use(store).use(router).mount('#app')
