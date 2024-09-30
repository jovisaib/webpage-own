<template>
        <v-container fluid class="pa-12 with-top-margin">
              <v-row
                align="center"
                justify="center"
                class="text-center"
              >
                <v-col cols="12" md="8" lg="6">
                  <h1 class="text-h2 font-weight-bold mb-8">
                    We transform your<br>
                    AI projects from<br>
                    <span class="bg-black text-white px-4 py-2 d-inline-block">concept to reality</span>
                  </h1>
                  <p class="text-body-1 mb-12">
                    From innovative startups to established industry leaders,<br>
                    we've helped organizations build groundbreaking AI and IoT solutions.<br>
                    Let's unlock your potential together.
                  </p>
                  <v-btn
                    href="https://calendly.com/jovisaib/30-min-intro"
                    class="book-call-btn"
                    target="_blank"
                    x-large
                    elevation="2"
                    color="primary"
                    dark
                    :ripple="{ class: 'white--text' }"
                    style="text-transform: none; border-radius: 8px; padding: 12px 24px; display: inline-flex; align-items: center; justify-content: center; height: 56px; margin: 0 auto;"
                  >
                    <span>Book Your Free Consultation</span>
                  </v-btn>
                </v-col>
              </v-row>
        </v-container>
        
        <v-container class="pa-7">
            <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
        </v-container>
        <!-- Trusted by Industry Leaders -->
        <v-container fluid class="py-12 bg-gray-100">
            <v-row justify="center" class="text-center mb-2">
                <v-col cols="12" md="10" lg="8">
                    <h2 class="text-h3 font-weight-bold mb-4">Trusted by Industry Leaders</h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        Our expertise has empowered a diverse range of organizations, from cutting-edge startups to big corporations. Join the ranks of innovators who've partnered with us to revolutionize their industries.
                    </p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <v-carousel
                        hide-delimiters
                        :show-arrows="false"
                        height="150"
                        cycle
                        interval="3000"
                        class="company-carousel"
                    >
                        <v-carousel-item
                            v-for="n in 2"
                            :key="n"
                        >
                            <v-row class="fill-height" align="center" justify="center">
                                <v-col
                                    v-for="i in 4"
                                    :key="i"
                                    class="d-flex justify-center"
                                    cols="3"
                                >
                                    <v-img
                                        :src="require(`@/assets/company-logo-${(n-1)*4 + i}.png`)"
                                        max-width="120"
                                        contain
                                        class="company-logo"
                                    ></v-img>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
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
          <h3 class="text-h6 font-weight-bold">AI Integration</h3>
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
        <v-container id="process-section" class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 mt-16 mb-16">
            <v-row justify="center" class="text-center mb-12">
                <v-col cols="12" md="10" lg="8">
                    <h2 class="text-h3 font-weight-bold mb-4">Our Streamlined Process</h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        Experience a seamless journey from concept to implementation. Our innovative approach ensures your AI initiatives are executed with precision and agility.
                    </p>
                </v-col>
            </v-row>

            <v-row class="text-center" dense>
                <v-col cols="12" sm="6" md="4" v-for="(step, index) in processSteps" :key="index">
                    <v-card class="process-card h-full d-flex flex-column justify-space-between" elevation="0">
                        <div class="process-icon-wrapper mb-4">
                            <svg v-if="index === 0" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <svg v-else-if="index === 1" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <line x1="10" y1="9" x2="8" y2="9"></line>
                            </svg>
                            <svg v-else width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 12L12 2 2 12h3v8h14v-8h3z"></path>
                            </svg>
                        </div>
                        <v-card-title class="text-h5 font-weight-bold mb-4">
                            <span class="process-number">{{ index + 1 }}</span> {{ step.title }}
                        </v-card-title>
                        <v-card-text class="text-body-1 text-gray-700">
                            {{ step.description }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>


        <v-container fluid class="py-12 md:py-24 lg:py-32 bg-muted">
            <v-row justify="center" class="text-center mb-8">
            <v-col cols="12">
                <h2 class="text-h3 font-weight-bold sm:text-h4 md:text-h2">Case Studies</h2>
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



        <v-container id="about-me-section" class="pa-7 py-12 md:py-24 lg:py-32 justify-center">
            <v-row justify="center" class="text-center mb-8">
                <v-col cols="12" md="12">
                    <h2 class="text-h3 font-weight-bold sm:text-h4 md:text-h2">About Us</h2>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12" md="12" sm="12">
                    <p class="text-body-1 text-md-subtitle-1 mb-4 max-w-600 text-muted-foreground">
                        We are a team of AI consultants and experts, committed to driving innovation across diverse industries with a focus on AI, IoT, and cutting-edge technologies. Our collective expertise allows us to transform complex prototypes into scalable, production-ready solutions that deliver measurable business growth.
                        <br/><br/>
                        Our multidisciplinary team combines specialized knowledge in front-end and back-end development, DevOps, IoT, information retrieval, and AI innovation. We emphasize practical applications of advanced AI, delivering impactful projects through hands-on engineering and expert strategic guidance.
                        <br/><br/>
                        By leveraging our deep knowledge and years of experience, we help businesses unlock new opportunities, optimize operations, and achieve their strategic goals. Let's connect to explore how our expertise can elevate your business to new heights.
                        <br/><br/>
                        For any inquiries or to discuss how we can assist your business, feel free to reach out to us at <a href="mailto:hello@allometrik.com">hello@allometrik.com</a>. We look forward to hearing from you!
                    </p>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
    components: {
    },
    setup() {
        useHead({
            title: 'Allometrik - AI Consulting & Integration Services',
            meta: [
                {
                    name: 'description',
                    content: 'Allometrik offers expert AI consulting, integration, and training services. Transform your business with cutting-edge AI solutions tailored to your needs.'
                },
                {
                    name: 'keywords',
                    content: 'AI consulting, AI Integration, machine learning, data science, IoT, artificial intelligence, technology consulting'
                },
                { property: 'og:title', content: 'Allometrik - AI Consulting & Integration Services' },
                { property: 'og:description', content: 'Transform your business with Allometrik\'s expert AI consulting and integration services. From concept to reality, we deliver cutting-edge AI solutions.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://allometrik.com' },
                { property: 'og:image', content: 'https://allometrik.com/og-image.jpg' }, // Make sure to add an actual image URL
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Allometrik - AI Consulting & Integration Services' },
                { name: 'twitter:description', content: 'Expert AI consulting and Integration services to transform your business. From concept to reality, we deliver cutting-edge AI solutions.' },
                { name: 'twitter:image', content: 'https://allometrik.com/twitter-image.jpg' }, // Make sure to add an actual image URL
            ],
            link: [
                { rel: 'canonical', href: 'https://allometrik.com' }
            ]
        })
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
            processSteps: [
                {
                    title: 'Connect',
                    description: 'Free 30-minute session. We analyze your goals and challenges to customize our approach.'
                },
                {
                    title: 'Strategize',
                    description: 'Custom AI proposal with innovative strategy, timeline, and costs. Collaborative refinement for perfect alignment.'
                },
                {
                    title: 'Execute & Iterate',
                    description: 'Real-time collaboration via Slack. Agile integration with continuous feedback for maximum impact.'
                }
            ],
        }
    },
    methods: {
        setupDialog(project) {
            this.currentProject = project;
            this.dialog = true;
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
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 32px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.process-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.process-icon-wrapper {
  background: linear-gradient(135deg, #e6f7ff, #e6e6ff);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.process-icon {
  font-size: 48px;
}

.v-card-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #333;
}

.v-card-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.process-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #3a94db, #42a5f5);
    color: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

.book-call-btn {
  border-radius: 50px !important;
  text-transform: none;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 12px 24px;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, #4CAF50, #45a049);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.book-call-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.5s;
}

.book-call-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(45deg, #45a049, #4CAF50);
}

.book-call-btn:hover::before {
  left: 100%;
}

.book-call-btn .v-icon {
  transition: all 0.3s ease;
}

.book-call-btn:hover .v-icon.mdi-arrow-right {
  transform: translateX(4px);
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #3b82f6, #6366f1);
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-50 {
  --tw-gradient-from: #eff6ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 246, 255, 0));
}

.to-indigo-50 {
  --tw-gradient-to: #eef2ff;
}

</style>
