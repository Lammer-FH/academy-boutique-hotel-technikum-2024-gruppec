import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import {BootstrapVue3} from 'bootstrap-vue-3'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBPohtjgqntHgx5C5yW-039rwwEwKZMFLA', // API Key
    },
});

app.mount('#app')
