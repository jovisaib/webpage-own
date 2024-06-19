<template>
  <v-app id="app">
    <home />

    <v-footer dark class="footer green darken-3 lighten-1 white--text text-center">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-btn v-for="icon in icons" :href="icon.href" :key="icon.img" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon.img }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider class="my-2"></v-divider>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card-text class="white--text">
              <strong>© Copyright  {{ new Date().getFullYear() }} Jovisaib</strong>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  data: () => ({
    icons: [
        { href: 'https://x.com/jovisaib', img: 'fas fa-brands fa-x-twitter' },
        { href: 'https://www.linkedin.com/in/jose-vicente-saez/', img: 'mdi:mdi-linkedin' },
        { href: 'https://github.com/jovisaib', img: 'mdi:mdi-github' },
    ],
  }),
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  color: #2c3e50;
}

.footer {
  width: 100%;
  padding: 0;
}

.width-100 {
  width: 100%;
}
</style>
