import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueGtag from 'vue-gtag-next';
import router from './router';  // Import the router

loadFonts();

const app = createApp(App);

app.use(vuetify);

app.use(VueGtag, {
  property: {
    id: 'G-KH8YDFLG7C'
  }
});

app.use(router);

app.mount('#app');
