<template>
    <div>
        <v-app-bar app color="transparent" class="blurred-nav" flat>
            <v-container>
                <v-row justify="center">
                    <v-col cols="auto" class="d-flex d-md-none"> <!-- Only show on small screens -->
                        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                    </v-col>
                    <v-col cols="auto" class="d-none d-md-flex"> <!-- Only show on medium and larger screens -->
                        <v-btn text class="nav-link" @click="scrollToSection('services-section')">Services</v-btn>
                        <v-btn text class="nav-link" @click="scrollToSection('process-section')">Process</v-btn>
                        <v-btn text class="nav-link" @click="scrollToSection('about-me-section')">About me</v-btn>
                        <v-btn text href="https://allinsync.beehiiv.com/" target="_blank" class="nav-link">Newsletter</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app temporary left>
            <v-list>
                <v-list-item @click="scrollToSection('services-section')">
                    <v-list-item-title>Services</v-list-item-title>
                </v-list-item>
                <v-list-item @click="scrollToSection('process-section')">
                    <v-list-item-title>Process</v-list-item-title>
                </v-list-item>
                <v-list-item @click="scrollToSection('about-me-section')">
                    <v-list-item-title>About me</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://allinsync.beehiiv.com/" target="_blank">
                    <v-list-item-title>Newsletter</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-container fluid class="pa-7 with-top-margin">
              <v-row
                align="center"
                class="gap-6 lg:gap-12"
                no-gutters
              >
                <!-- Text Column -->
                <v-col
                  class="d-flex flex-column justify-center space-y-4"
                  cols="12"
                  md="6"
                >
                  <div class="space-y-4 pa-4 pa-md-6">
                    <h1 class="display-2 font-weight-bold text-lg-none sm:text-display-2 xl:text-display-1">
                      Unleash the Power of AI
                    </h1>
                    <p class="text-body-1 text-md-subtitle-1 mb-4 max-w-600 text-muted-foreground">
                      Our AI consultancy helps businesses harness the transformative
                      potential of artificial intelligence to drive innovation, boost productivity, drive revenue, and
                      achieve competitive advantage.
                    </p>
                  </div>

                  <div class="px-6 d-flex flex-column gap-2 flex-sm-row">
                    <v-btn
                      href="https://calendly.com/jovisaib/main"
                      rounded="lg"
                      size="x-large"
                      class="mb-2 text-black text-capitalize py-2 px-6 font-weight-medium mr-sm-4"
                      elevation="2"
                    >
                      Get in Touch
                    </v-btn>
                    <v-btn
                      @click="scrollToSection('services-section')"
                      outlined
                      rounded="lg"
                      size="x-large"
                      elevation="2"
                      class="text-black text-capitalize py-2 px-6 font-weight-medium"
                    >
                      Our Services
                    </v-btn>
                  </div>
                </v-col>
                <!-- Image Column -->
                <v-col
                  cols="12"
                  md="6"
                  class="d-flex justify-center pa-4 pa-md-6"
                >
                  <v-img
                    src="../assets/landingph.png"
                    aspect-ratio="16/9"
                    max-width="480"
                    alt="AI Consultancy"
                    class="mx-auto rounded-xl object-cover object-center"
                    contain
                  />
                </v-col>
              </v-row>
        </v-container>
        
        <v-container class="pa-7">
            <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
        </v-container>


        <v-container fluid style="background-color: #F5F5F5;" id="services-section" class="py-12 py-md-24 py-lg-32 bg-muted">
  <!-- Main Container -->
  <v-row class="px-4 px-md-6 d-flex flex-column align-center text-center space-y-12">
    <!-- Heading Section -->
    <v-col cols="12" class="d-flex flex-column align-center space-y-4">
      <div class="space-y-2">
        <v-chip class="bg-muted mb-2 px-3 py-1 text-sm" outlined>Our Services</v-chip>
        <h2 class="text-h4 font-weight-bold text-center sm:text-h3 lg:text-h2">
          Transformative AI Solutions
        </h2>
        <p class="text-body-1 text-muted-foreground max-w-300 md:text-xl lg:text-base xl:text-xl">
          Our team of AI experts delivers cutting-edge solutions to help businesses unlock the full potential of artificial intelligence.
        </p>
      </div>
    </v-col>

    <!-- Services Grid -->
    <v-col cols="12">
      <v-row class="d-flex gap-8 sm:grid-cols-2 md:gap-12 text-left lg:grid-cols-3">
        <!-- Service 1 -->
        <v-col cols="12" sm="6" md="4" class="d-flex flex-column gap-1">
          <h3 class="text-h6 font-weight-bold">AI reporting</h3>
          <p class="text-body-1 text-muted-foreground justify-left">
            Use our expertise in Retrieval-Augmented Generation (RAG) to boost your AI applications.
          </p>
        </v-col>
        <!-- Service 2 -->
        <v-col cols="12" sm="6" md="4" class="d-flex flex-column gap-1">
          <h3 class="text-h6 font-weight-bold">AI Implementation</h3>
          <p class="text-body-1 text-muted-foreground justify-left">
            Our experts seamlessly integrate AI solutions into your existing infrastructure.
          </p>
        </v-col>
        <!-- Service 3 -->
        <v-col cols="12" sm="6" md="4" class="d-flex flex-column gap-1">
          <h3 class="text-h6 font-weight-bold">Fractional CTO</h3>
          <p class="text-body-1 text-muted-foreground justify-left">
            Get top-tier CTO services on a suscription basis. Leverage expert leadership to guide your strategy.
          </p>
        </v-col>
        <!-- Service 4 -->
        <v-col cols="12" sm="6" md="4" class="d-flex flex-column gap-1">
          <h3 class="text-h6 font-weight-bold">Training</h3>
          <p class="text-body-1 text-muted-foreground justify-left">
            Our comprehensive training programs empower your team to leverage AI and emerging technologies effectively.
          </p>
        </v-col>
        <!-- Service 5 -->
        <v-col cols="12" sm="6" md="4" class="d-flex flex-column gap-1">
          <h3 class="text-h6 font-weight-bold">AI Consulting</h3>
          <p class="text-body-1 text-muted-foreground justify-left">
            We provide expert guidance to help you navigate the complex world of artificial intelligence.
          </p>
        </v-col>
        <!-- Service 6 -->
        <v-col cols="12" sm="6" md="4" class="d-flex flex-column gap-1">
          <h3 class="text-h6 font-weight-bold">AI Research</h3>
          <p class="text-body-1 text-muted-foreground justify-left">
            Our team conducts cutting-edge research to stay at the forefront of AI innovation.
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>


        <h1 class="text-center" id="process-section">Processs</h1>

        <v-container class="pa-7">
            <v-row class="text-center" dense>
                <v-col cols="12" sm="6" md="4">
                    <v-card class="pa-4 process-card">
                        <v-icon class="process-icon" color="primary">mdi:mdi-phone</v-icon>
                        <v-card-title class="text-h5">
                            <span class="process-number">1</span> Connect
                        </v-card-title>
                        <p>
                            Start with a 30-minute free call to discuss your needs and goals. We'll explore how my expertise can help your business.
                        </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-card class="pa-4 process-card">
                        <v-icon class="process-icon" color="primary">mdi:mdi-file-document-outline</v-icon>
                        <v-card-title class="text-h5">
                            <span class="process-number">2</span> Proposal
                        </v-card-title>
                        <p>
                            Receive a tailored proposal outlining the strategy, timeline, and costs. We'll refine it together to ensure it meets your expectations.
                        </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-card class="pa-4 process-card">
                        <v-icon class="process-icon" color="primary">mdi:mdi-chart-line</v-icon>
                        <v-card-title class="text-h5">
                            <span class="process-number">3</span> Iterate
                        </v-card-title>
                        <p>
                            We'll engage in a custom Slack chat to continuously gather feedback. This ongoing process will ensure maximum efficiency and impact by regularly reviewing results and optimizing solutions.
                        </p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>


        <v-container fluid class="py-12 md:py-24 lg:py-32 bg-muted">
            <v-row justify="center" class="text-center mb-8">
            <v-col cols="12">
                <h2 class="text-h3 font-weight-bold sm:text-h4 md:text-h2">Our Cases</h2>
                <p class="mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our consulting services have helped businesses like yours achieve their goals.
                </p>
            </v-col>
            </v-row>

    <v-row class="pt-8" dense>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-hover v-slot:default="{ isHovering }">
            <v-card
            class="overflow-hidden rounded-lg shadow-lg p-2 transition-all duration-300 ease-in-out"
            :elevation="isHovering ? 10 : 2"
            :class="isHovering ? 'hovered-card' : ''"
          >
            <v-img
              :src="require(`@/assets/${project.img}`)"
              class="h-36 object-cover"
              aspect-ratio="16/9"
            ></v-img>
            <v-card-text class="bg-background">
              <h3 class="text-h6 font-weight-bold">{{project.title}}</h3>
              <p class="text-muted-foreground text-body-2">{{ project.description }}</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>



        <v-container class="pa-7 py-12 md:py-24 lg:py-32 justify-center">
            <v-row justify="center" class="text-center mb-8">
                <v-col cols="12" md="12">
                    <h2 class="text-h3 font-weight-bold sm:text-h4 md:text-h2">About Us</h2>
                    <p class="mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    
                    </p>
                </v-col>
            </v-row>
            <v-row class="text-center" dense>
                <v-col cols="12" md="12" sm="12">
                    <p class="text-body-1 text-md-subtitle-1 mb-4 max-w-600 text-muted-foreground">
                        I'm an AI Consultant Expert based in Spain, renowned for driving innovation across diverse industries with a strong emphasis on AI and IoT. My expertise lies in transforming complex prototypes into scalable, production-ready solutions that drive significant business growth.
                        <br><br>
                        As a seasoned speaker on applied AI, I regularly share insights and practical applications, demonstrating how cutting-edge technologies can solve real-world business challenges. My passion for tackling new challenges fuels my ability to develop innovative solutions tailored to meet the specific needs of each client.
                        <br><br>
                        By leveraging my extensive experience and deep understanding of AI, I help businesses unlock new opportunities, optimize operations, and achieve their strategic goals. Let’s connect to discuss how my expertise can contribute to your success and take your business to the next level.
                    </p>
                </v-col>
            </v-row>
        </v-container>


        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar class="light-green accent-1">
                        <v-btn icon @click="dialog = false">
                            <v-icon>mdi:mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{projectMap[currentProject].title}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <DMXShow v-if="currentProject=='dmx'" />
                    <Talks v-if="currentProject=='talks'" />
                    <TinyMLWorkshop v-if="currentProject=='workshop'" />
                </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script>
import DMXShow from './projects/DMXShow.vue';
import Talks from './projects/Talks.vue';
import MaterialIconsViz from './projects/MaterialIconsViz.vue';
import TinyMLWorkshop from './projects/TinyMLWorkshop.vue';
export default {
    components: {
        MaterialIconsViz,
        DMXShow,
        TinyMLWorkshop,
        Talks
    },
    data() {
        return {
            dialog: false,
            currentProject: "",
            drawer: false, // Add drawer state
            projectMap:{
                "":{
                    title: "none"
                },
                "workshop":{
                    title: "Workshop"
                },
                "dmx":{
                    title: "DMX"
                },
                "talks":{
                    title: "TinyML Talks"
                },
            },
            notifications: false,
            sound: true,
            widgets: false,
            projects: [
                {
                    title: "Automating Workflows in Banking with AI-driven Machine Vision and OCR",
                    description: "Revolutionizing banking and financial systems by automating workflows with advanced machine vision and OCR technologies, reducing errors and boosting efficiency.",
                    img: "ocr_case.jpeg",
                },
                {
                    title: "Advanced Document & Report Generation Using Generative AI with RAG",
                    description: "Providing intelligent document and report generation, leveraging RAG to integrate external information for precise, context-rich outputs.",
                    img: 'reportally.png',
                },
                {
                    title: "Streamlining Accounting with Generative AI for Large Enterprises",
                    description: "Enhancing complex accounting processes for large corporations using generative AI, delivering scalability, cost savings, and compliance improvements.",
                    img: "csv_ocr_case.jpeg",
                },
                {
                    title: "Leadership & Training Solutions for Global Industrial Companies",
                    description: "Offering tailored leadership and training programs to enhance team performance and drive success for industrial companies operating internationally in complex fields like IoT and embedded AI.",
                    img: "industrial_jose.jpeg",
                },
            ],
        }
    },
    methods: {
        setupDialog(project) {
            this.currentProject = project;
            this.dialog = true;
        },
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                this.drawer = false; // Close drawer after navigation
            }
        },
    },
    mounted() {
        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = "https://widget.senja.io/widget/eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede/platform.js";
        document.head.appendChild(script);
    }
};
</script>

<style scoped>
.blurred-nav {
    backdrop-filter: blur(10px); /* Apply blur effect */
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
}

.d-none {
    display: none !important;
}

.d-md-flex {
    display: flex !important;
}

.d-flex {
    display: flex !important;
}

.d-md-none {
    display: none !important;
}

@media (min-width: 960px) {
    .d-md-flex {
        display: flex !important;
    }

    .d-md-none {
        display: none !important;
    }
}

@media (max-width: 959.98px) {
    .d-md-flex {
        display: none !important;
    }

    .d-md-none {
        display: flex !important;
    }
}

.nav-link {
    color: #000; /* Black text color */
    font-weight: bold;
    font-size: 1.2rem; /* Adjust the font size as needed */
}

.v-app-bar {
    z-index: 10; /* Ensure the navbar is always on top */
}

.presentation-container {
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* Cool gradient background */
    padding: 6rem 4rem; /* Increased padding for better spacing */
    border-radius: 12px; /* More rounded corners for a softer look */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Stronger shadow for more depth */
    text-align: center; /* Center align text for a balanced look */
}

.display-1 {
    font-size: 4rem; /* Larger font size for a striking headline */
    color: #031425; /* Dark color for text */
    font-weight: 700; /* Bolder font for emphasis */
}

.headline {
    font-size: 2.5rem; /* Larger font size for subtitle */
    color: #333333; /* Darker color for contrast */
}

.subheading {
    font-size: 1.25rem; /* Standard size for main content */
    color: #555555; /* Lighter color for less emphasis */
}

.headline {
    font-size: 2.5rem; /* Larger font size for subtitle */
    margin-bottom: 2rem; /* Increased margin for better spacing */
    color: #333333; /* Darker color for contrast */
}

.subheading {
    font-size: 1.5rem; /* Larger font size for main content */
    margin-bottom: 3rem; /* Increased margin for better spacing */
    color: #555555; /* Lighter color for less emphasis */
}

.consultation-btn {
    font-size: 1.25rem; /* Slightly larger button text */
    padding: 0.4rem 2rem; /* Adjusted padding for better fit */
    border-radius: 50px; /* More rounded button for modern style */
    background: linear-gradient(135deg, #42a5f5, #1e88e5); /* Gradient background */
    color: white; /* White text for better contrast */
    transition: background 0.3s ease, transform 0.3s ease; /* Smooth transitions */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.consultation-btn:hover {
    background: linear-gradient(135deg, #1e88e5, #1565c0); /* Darker gradient on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
}

.with-top-margin {
    margin-top: 100px; /* Adjust this value as needed to create space for the navbar */
}

.service-card {
    border-radius: 12px;
    background: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 24px; /* Increased padding */
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #42a5f5;
}

.v-card-title {
    font-size: 1.5rem; /* Slightly increased font size */
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.normal_link {
    text-decoration: none;
    color: #031425;
    position: relative;
    cursor: pointer;
    font-weight: bolder;
}

.normal_link::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 80%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    background-color: rgba(136, 88, 248, 0.5);
}

.normal_link:hover::after {
    background-color: rgba(196, 173, 250, 0.5);
}

.projects_content {
    position: relative;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
}

.emoji-style {
    color: rgba(0, 0, 0, 1);
    font-size: 5.00rem !important;
}

.cursor-pointer {
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.v-card--link:before {
    background: none;
}

.v-card-subtitle {
    font-size: 1rem;
    line-height: 1.6; /* Increased line height for better readability */
    color: #555555;
    padding-left: 12px; /* Ensure padding inside subtitle */
}

.emoji-style {
    font-size: 3rem; /* Increased font size */
    margin-bottom: 1rem;
}

.text-left {
    text-align: left;
}


.process-card {
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 24px;
}

.process-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.process-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #42a5f5;
}


.v-card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: #555555;
  padding-left: 12px;
}

.process-number {
    display: inline-block;
    background: #42a5f5;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    font-size: 1.25rem;
    margin-right: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
    background: linear-gradient(145deg, #3a94db, #42a5f5);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.process-number::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    z-index: -1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#services-section,
#process-section,
#about-me-section {
    margin-top: 90px; /* Adjust this value as needed */
}

.email-link {
    color: #1e88e5; /* Primary color */
    text-decoration: none; /* Remove underline */
    font-weight: 600; /* Semi-bold */
    border-bottom: 2px solid transparent; /* Bottom border for subtle underlining */
    transition: color 0.3s ease, border-bottom-color 0.3s ease; /* Smooth transition for color and border */
}

.email-link:hover {
    color: #1565c0; /* Darker shade on hover */
    border-bottom-color: #1565c0; /* Underline appears on hover */
    text-decoration: none; /* Ensure no underline on hover */
}

.bg-muted {
  background-color: #f5f5f5;
}

.text-muted-foreground {
  color: #6b7280;
}

.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hovered-card {
  transform: translateY(-8px);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
}

</style>
