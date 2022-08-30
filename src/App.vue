<template>
  <v-app id=”app”>





    <home />




    <v-footer dark padless>
      <v-card flat tile class="flex green darken-3 lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :href="icon.href" :key="icon.img" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{  icon.img  }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="font-weight-bold white--text pt-0">
          For more info about me, you can find me on my networks and contact me directly at jovisaib@gmail.com
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{  new Date().getFullYear()  }} — <strong>jovisaib</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  data: () => ({
    icons: [
      { href: 'https://twitter.com/jovisaib', img: 'mdi-twitter' },
      { href: 'https://www.linkedin.com/in/jose-vicente-saez/', img: 'mdi-linkedin' },
      { href: 'https://github.com/jovisaib', img: 'mdi-github' },
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
  padding: 0vh 10vw;
  color: #2c3e50;
}

.footer-color {
  color: "rgba(59,130,246,.5)";
}
</style>
