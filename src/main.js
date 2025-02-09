import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueGtag from 'vue-gtag-next';
import router from './router';  // Import the router

loadFonts();

const app = createApp(App);
const head = createHead();

app.use(vuetify);

app.use(VueGtag, {
  property: {
    id: 'G-KH8YDFLG7C'
  },
  config: {
    cookie_flags: 'SameSite=None;Secure',
    cookie_domain: 'auto',
    consent: 'default'
  }
});

app.use(router);
app.use(head);

app.mount('#app');
