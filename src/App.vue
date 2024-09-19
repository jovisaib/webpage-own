<template>
  <v-app id="app">

    <v-app-bar app color="transparent" class="blurred-nav" flat>
        <v-container>
            <v-row align="center" justify="space-between">
                <v-col cols="auto" class="d-flex d-md-none"> <!-- Only show on small screens -->
                    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                </v-col>
                <v-col cols="auto" class="d-flex align-center d-md-none pr-8"> <!-- Only show on small screens, added right padding -->
                    <v-img :src="require('@/assets/logo_main.png')" max-height="50" min-width="50" class="mr-1"></v-img>
                    <router-link to="/" class="text-decoration-none">
                        <h1 class="text-h4 font-weight-bold" style="font-family: 'Montserrat', sans-serif; color: black !important;">allometrik</h1>
                    </router-link>
                </v-col>
                <v-col cols="auto" class="d-none d-md-flex align-center justify-center"> <!-- Only show on medium and larger screens -->
                    <v-img :src="require('@/assets/logo_main.png')" max-height="50" min-width="50" class="mr-1"></v-img>
                    <router-link to="/" class="text-decoration-none">
                        <h1 class="text-h4 font-weight-bold" style="font-family: 'Montserrat', sans-serif; color: black !important;">allometrik</h1>
                    </router-link>
                </v-col>
                <v-col cols="auto" class="d-none d-md-flex"> <!-- Only show on medium and larger screens -->
                    <v-btn text class="nav-link" @click="navigateOrScroll('services-section')" style="color: black;">Services</v-btn>
                    <v-btn text class="nav-link" @click="navigateOrScroll('process-section')" style="color: black;">Process</v-btn>
                    <v-btn text class="nav-link" @click="navigateOrScroll('about-me-section')" style="color: black;">About Us</v-btn>
                    <v-btn text to="/blog" class="nav-link" style="color: black;">Blog</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app temporary left>
        <v-list>
            <v-list-item @click="navigateOrScroll('services-section')">
                <v-list-item-title>Services</v-list-item-title>
            </v-list-item>
            <v-list-item @click="navigateOrScroll('process-section')">
                <v-list-item-title>Process</v-list-item-title>
            </v-list-item>
            <v-list-item @click="navigateOrScroll('about-me-section')">
                <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
            <v-list-item to="/blog">
                <v-list-item-title>Blog</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <router-view />

    <v-footer dark class="footer green darken-3 white--text">
      <v-container>
        <v-row justify="center" align="center" class="py-4">
          <v-col cols="12" sm="6" md="4" class="text-center text-sm-left">
            <h3 class="text-h6 font-weight-bold mb-3">Allometrik</h3>
            <p class="mb-0">Innovating with AI and IoT solutions</p>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="text-center my-4 my-sm-0">
            <v-btn
              v-for="icon in icons"
              :key="icon.img"
              :href="icon.href"
              target="_blank"
              rel="noopener noreferrer"
              icon
              class="mx-2"
              color="white"
            >
              <v-icon>{{ icon.img }}</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="4" class="text-center text-md-right">
            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Allometrik</p>
            <p class="mb-0">All rights reserved</p>
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
    drawer: false, // Add drawer state
    icons: [
      { href: 'https://x.com/allometrik', img: 'fas fa-brands fa-x-twitter' },
      { href: 'https://www.linkedin.com/company/allometriktech/', img: 'mdi:mdi-linkedin' },
      { href: 'https://github.com/jovisaib', img: 'mdi:mdi-github' },
    ],
  }),
  name: "app",
  components: {
    Home
  },
  methods: {
      scrollToSection(sectionId) {
          const section = document.getElementById(sectionId);
          if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
              this.drawer = false; // Close drawer after navigation
          }
      },
      navigateOrScroll(sectionId) {
          if (this.$route.path !== '/') {
              this.$router.push({ path: '/', query: { section: sectionId } });
          } else {
              this.scrollToSection(sectionId);
          }
      },
  },
  watch: {
      $route(to) {
          if (to.path === '/' && to.query.section) {
              this.$nextTick(() => {
                  this.scrollToSection(to.query.section);
              });
          }
      },
  },
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
  padding: 20px 0;
}

.v-btn.v-btn--icon {
  transition: transform 0.2s ease-in-out;
}

.v-btn.v-btn--icon:hover {
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .footer .v-col {
    margin-bottom: 20px;
  }
}


.blurred-nav {
    backdrop-filter: blur(10px); /* Apply blur effect */
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
}


.nav-link {
    color: #000; /* Black text color */
    font-weight: bold;
    font-size: 1.2rem; /* Adjust the font size as needed */
}

.v-app-bar {
    z-index: 10; /* Ensure the navbar is always on top */
}
</style>
