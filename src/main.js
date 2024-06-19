import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { createRouter, createWebHistory } from 'vue-router'; // Assuming you are using vue-router
import VueGtag from 'vue-gtag-next';
import routes from './routes'; // Adjust this to your routes file

loadFonts();

const app = createApp(App);

// Create a router instance (if using vue-router)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(vuetify);

app.use(VueGtag, {
  property: {
    id: 'G-KH8YDFLG7C' // Replace with your Google Analytics 4 measurement ID
  }
}, router);

app.mount('#app');