import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueGtag from 'vue-gtag-next';

loadFonts();

const app = createApp(App);


app.use(vuetify);

app.use(VueGtag, {
  property: {
    id: 'G-KH8YDFLG7C' // Replace with your Google Analytics 4 measurement ID
  }
});

app.mount('#app');