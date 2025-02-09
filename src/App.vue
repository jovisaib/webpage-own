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
                    <v-btn text class="nav-link" @click="navigateOrScroll('about-me-section')" style="color: black;">About</v-btn>
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
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <router-view />
    <v-footer class="footer">
      <v-container class="py-12">
        <v-row justify="center" align="start">
          <!-- Brand Column -->
          <v-col cols="12" sm="6" md="4" class="text-center text-sm-left mb-8 mb-md-0">
            <h3 class="text-h5 mr-8 font-weight-bold mb-0 d-flex align-center" style="font-family: 'Montserrat', sans-serif;">allometrik</h3>
            <p class="footer-description mb-6">
              Transforming businesses through innovative AI and IoT solutions. We help companies build, scale, and optimize their technology.
            </p>
            <div class="social-links">
              <v-btn
                v-for="icon in icons"
                :key="icon.img"
                :href="icon.href"
                target="_blank"
                rel="noopener noreferrer"
                icon
                class="mr-4"
                color="primary"
              >
                <v-icon>{{ icon.img }}</v-icon>
              </v-btn>
            </div>
          </v-col>

          <!-- Quick Links -->
          <v-col cols="12" sm="6" md="4" class="text-center text-sm-left mb-8 mb-md-0">
            <h4 class="text-h6 font-weight-bold mb-6">Quick Links</h4>
            <div class="d-flex flex-column footer-links">
              <a class="footer-link mb-3" @click="navigateOrScroll('services-section')">
                <span class="arrow-icon">→</span>
                Services
              </a>
              <a class="footer-link mb-3" @click="navigateOrScroll('process-section')">
                <span class="arrow-icon">→</span>
                Process
              </a>
              <a class="footer-link mb-3" @click="navigateOrScroll('about-me-section')">
                <span class="arrow-icon">→</span>
                About
              </a>
            </div>
          </v-col>

          <!-- Contact Info -->
          <v-col cols="12" sm="6" md="4" class="text-center text-sm-left">
            <h4 class="text-h6 font-weight-bold mb-6">Contact Us</h4>
            <div class="contact-info">
              <a href="mailto:hello@allometrik.com" class="footer-contact-link mb-4 d-flex align-center">
                <span class="contact-icon">✉️</span>
                <span>hello@allometrik.com</span>
              </a>
              <a href="https://calendly.com/jovisaib/introcall" target="_blank" class="footer-contact-link mb-4 d-flex align-center">
                <span class="contact-icon">📅</span>
                <span>Schedule a Call</span>
              </a>
            </div>
          </v-col>
        </v-row>

        <!-- Copyright Bar -->
        <v-divider class="my-6"></v-divider>
        <v-row justify="space-between" align="center" class="copyright-bar">
          <v-col cols="12" sm="auto" class="text-center text-sm-left">
            <p class="mb-0 copyright-text">&copy; {{ new Date().getFullYear() }} Allometrik. All rights reserved.</p>
          </v-col>
          <v-col cols="12" sm="auto" class="text-center text-sm-right">
            <a href="#" class="footer-legal-link mr-4">Privacy Policy</a>
            <a href="#" class="footer-legal-link">Terms of Service</a>
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
  background: #f8faff;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-description {
  color: #546e7a;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 400px;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-link {
  color: #546e7a !important;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: #1976D2 !important;
  transform: translateX(5px);
}

.footer-contact-link {
  color: #546e7a;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-contact-link:hover {
  color: #1976D2;
}

.copyright-text {
  color: #546e7a;
  font-size: 0.9rem;
}

.footer-legal-link {
  color: #546e7a;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-legal-link:hover {
  color: #1976D2;
}

.v-btn.v-btn--icon {
  background: rgba(25, 118, 210, 0.1);
  transition: all 0.3s ease;
}

.v-btn.v-btn--icon:hover {
  transform: translateY(-3px);
  background: rgba(25, 118, 210, 0.15);
}

@media (max-width: 960px) {
  .social-links {
    justify-content: center;
  }
  
  .footer-description {
    margin: 0 auto;
    text-align: center;
  }

  .copyright-bar {
    text-align: center;
  }

  .footer-legal-link {
    display: inline-block;
    margin: 0.5rem 1rem;
  }
}

.blurred-nav {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8);
}

.nav-link {
    color: #000;
    font-weight: bold;
    font-size: 1.2rem;
}

.v-app-bar {
    z-index: 10;
}

.footer .v-btn {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
}

.footer .v-btn:hover {
    opacity: 1;
}

.footer h3, .footer h4 {
    margin-bottom: 1rem;
}

.footer p {
    font-size: 0.9rem;
    line-height: 1.5;
}

.footer-link {
    color: black !important;
    text-align: left;
    font-size: 0.9rem;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
}

.footer-link:hover {
    opacity: 1;
}

.arrow-icon {
  display: inline-block;
  margin-right: 8px;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.footer-link:hover .arrow-icon {
  transform: translateX(5px);
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  font-size: 1.2rem;
}

.footer-link {
  color: #546e7a !important;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: #1976D2 !important;
  transform: translateX(5px);
}
</style>
