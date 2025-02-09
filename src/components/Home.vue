<template>
  <div class="home">
    <v-container fluid class="hero-section px-0">
      <div class="hero-background"></div>
      <v-row align="center" justify="center" class="hero-content ma-0">
        <v-col cols="12" lg="11" class="pa-0">
          <v-container>
            <v-row align="center" class="hero-row">
              <v-col cols="12" md="7" class="hero-left">
                <div class="hero-badge mb-4">
                  <span class="pulse-dot"></span>
                  <span class="badge-text">Now Accepting New Projects</span>
                </div>

                <h1 class="hero-title">
                  Transform Your Business with
                  <span class="gradient-text">AI-Powered Innovation</span>
                </h1>

                <p class="hero-subtitle mt-6">
                  Partner with AI experts to build groundbreaking solutions that drive real business value. 
                  From strategy to implementation, we deliver scalable AI systems that transform how businesses operate.
                </p>

                <div class="cta-container mt-8">
                  <v-btn
                    href="https://calendly.com/jovisaib/introcall"
                    class="primary-cta"
                    target="_blank"
                    elevation="0"
                    x-large
                    height="56"
                  >
                    <span class="cta-text">Book Free Strategy Call</span>
                    <span class="cta-time">→ Next slot: 24h</span>
                  </v-btn>
                  <div class="guarantee-text">
                    <span class="check-icon">✓</span> Free 30-min consultation
                    <span class="divider-dot">•</span>
                    <span class="check-icon">✓</span> No commitment required
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="5" class="hero-right">
                <div class="social-proof">
                  <div class="proof-header">
                    <div class="stars">★★★★★</div>
                    <div class="rating-text">Trusted by Industry Leaders</div>
                  </div>
                  <div class="metrics-grid">
                    <div class="metric-item">
                      <div class="metric-value">42+</div>
                      <div class="metric-label">Projects<br>Delivered</div>
                    </div>
                    <div class="metric-item">
                      <div class="metric-value">100%</div>
                      <div class="metric-label">Client<br>Satisfaction</div>
                    </div>
                    <div class="metric-item">
                      <div class="metric-value">8+</div>
                      <div class="metric-label">Industries<br>Served</div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <!-- Testimonials Section -->
    <v-container fluid class="testimonials-section py-16">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <v-chip class="service-tag mb-4" small outlined>Client Stories</v-chip>
          <h2 class="text-h3 font-weight-bold mb-4">
            What Our Clients
            <span class="gradient-text-testimonials">Say About</span>
          </h2>
          <p class="testimonial-subtitle">
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </v-col>
      </v-row>

      <!-- Company Logos Grid -->
      <v-container class="mb-16">
        <v-row justify="center" class="company-grid">
          <v-col cols="12" md="10" lg="8">
            <div class="logos-wrapper">
              <v-row justify="center" align="center">
                <v-col
                  v-for="i in 8"
                  :key="i"
                  cols="6"
                  sm="3"
                  class="px-4 mb-4"
                >
                  <v-img
                    :src="require(`@/assets/company-logo-${i}.png`)"
                    max-width="120"
                    contain
                    class="company-logo mx-auto"
                    height="60"
                  ></v-img>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Testimonials Widget -->
      <v-container class="pa-7">
        <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
      </v-container>
    </v-container>

    <!-- Services Section -->
    <v-container fluid class="services-section" id="services-section">
      <v-row class="px-4 px-md-6 d-flex flex-column align-center text-center ma-0">
        <v-col cols="12" class="d-flex flex-column align-center mb-12 pa-0">
          <div class="text-center">
            <v-chip class="service-tag mb-4" small outlined>Our Services</v-chip>
            <h2 class="text-h3 font-weight-bold mb-4">
              Transformative End-to-End
              <span class="gradient-text-services">AI Solutions</span>
            </h2>
            <p class="section-subtitle">
              Our team is your AI partner from ideation to launched product, delivering cutting-edge solutions that drive real business value.
            </p>
          </div>
        </v-col>

        <v-col cols="12">
          <v-row class="service-grid justify-center">
            <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="6" lg="3" class="service-col">
              <v-hover v-slot="{ hover }">
                <v-card class="service-card text-center" :class="{ 'on-hover': hover }" elevation="0">
                  <div class="service-icon-wrapper mb-6">
                    <span class="step-icon">{{ service.icon }}</span>
                  </div>
                  <h3 class="text-h5 font-weight-bold mb-4">{{ service.title }}</h3>
                  <p class="service-description">{{ service.description }}</p>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Process Section -->
    <v-container fluid class="process-section py-16" id="process-section">
      <v-row justify="center" class="text-center mb-16">
        <v-col cols="12" md="8">
          <v-chip class="process-tag mb-4" small outlined>How It Works</v-chip>
          <h2 class="text-h3 font-weight-bold mb-4">
            Your Journey to
            <span class="gradient-text-process">AI Excellence</span>
          </h2>
          <p class="process-subtitle">
            Experience a seamless journey from concept to implementation with our proven process that ensures success at every step.
          </p>
        </v-col>
      </v-row>

      <v-row class="process-timeline px-4" justify="center">
        <v-col cols="12" sm="4" v-for="(step, index) in processSteps" :key="index" class="process-col">
          <div class="process-number">{{ index + 1 }}</div>
          <v-card class="process-step-card" elevation="1">
            <div class="icon-wrapper mb-6">
              <span class="step-icon">{{ step.icon }}</span>
            </div>
            <h3 class="text-h5 font-weight-bold mb-4">{{ step.title }}</h3>
            <p class="process-step-description">{{ step.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Case Studies Section -->
    <v-container fluid class="case-studies-section py-16">
      <v-row justify="center" class="text-center mb-16">
        <v-col cols="12" md="8">
          <v-chip class="case-studies-tag mb-4" small outlined>Case Studies</v-chip>
          <h2 class="text-h3 font-weight-bold mb-4">
            Success Stories That
            <span class="gradient-text-cases">Drive Results</span>
          </h2>
          <p class="case-studies-subtitle">
            Discover how our AI solutions have transformed businesses across industries, delivering measurable impact and sustainable growth.
          </p>
        </v-col>
      </v-row>

      <v-row class="case-studies-grid px-4" justify="center">
        <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-hover v-slot="{ hover }">
            <v-card class="case-study-card" :class="{ 'on-hover': hover }" elevation="0">
              <div class="card-image-wrapper">
                <v-img
                  :src="require(`@/assets/${project.img}`)"
                  class="case-study-image"
                  height="240"
                  cover
                >
                  <div class="image-overlay" :class="{ 'show-overlay': hover }">
                    <v-btn
                      text
                      color="white"
                      class="learn-more-btn"
                      @click="setupDialog(project)"
                    >
                      View Case Study
                    </v-btn>
                  </div>
                </v-img>
              </div>
              <v-card-text class="pa-6">
                <div class="category-tag mb-4">{{ project.category || 'AI Solution' }}</div>
                <h3 class="text-h6 font-weight-bold mb-3">{{ project.title }}</h3>
                <p class="case-study-description">{{ project.description }}</p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- About Section -->
    <v-container fluid class="about-section py-16" id="about-me-section">
      <v-row justify="center" align="center" class="about-content">
        <v-col cols="12" md="6" class="text-center text-md-left pr-md-8">
          <v-chip class="about-tag mb-4" small outlined>About</v-chip>
          <h2 class="text-h3 font-weight-bold mb-4">
            Pioneering the Future of
            <span class="gradient-text-about">AI Innovation</span>
          </h2>
          
          <div class="about-stats mb-8">
            <div class="stat-item">
              <div class="stat-value">10+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">42+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">100%</div>
              <div class="stat-label">Client Satisfaction</div>
            </div>
          </div>

          <div class="about-description">
            <p class="text-body-1 mb-4">
              We are a team of AI consultants and experts, committed to driving innovation across diverse industries. Our focus on AI, IoT, and cutting-edge technologies enables us to transform complex prototypes into scalable, production-ready solutions.
            </p>
            <p class="text-body-1 mb-4">
              Our multidisciplinary team combines specialized knowledge in front-end and back-end development, DevOps, IoT, information retrieval, and AI innovation. We emphasize practical applications of advanced AI, delivering impactful projects through hands-on engineering and expert strategic guidance.
            </p>
            <div class="expertise-tags mt-6">
              <v-chip class="mr-2 mb-2" small>AI Development</v-chip>
              <v-chip class="mr-2 mb-2" small>Machine Learning</v-chip>
              <v-chip class="mr-2 mb-2" small>IoT Solutions</v-chip>
              <v-chip class="mr-2 mb-2" small>Cloud Architecture</v-chip>
              <v-chip class="mr-2 mb-2" small>DevOps</v-chip>
            </div>
          </div>

          <div class="contact-section mt-8">
            <v-btn
              href="mailto:hello@allometrik.com"
              class="contact-btn mr-4"
              color="primary"
              outlined
            >
              Contact Us
            </v-btn>
            <v-btn
              href="https://calendly.com/jovisaib/introcall"
              class="schedule-btn"
              color="primary"
              dark
            >
              Schedule a Call
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-none d-md-flex align-center justify-center">
          <div class="feature-grid">
            <div class="feature-item">
              <div class="feature-number">01</div>
              <h4 class="feature-title">Expert Team</h4>
              <p class="feature-text">Industry veterans with deep expertise in AI and emerging technologies</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">02</div>
              <h4 class="feature-title">Proven Track Record</h4>
              <p class="feature-text">Successful delivery of complex AI solutions across industries</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">03</div>
              <h4 class="feature-title">Innovation Focus</h4>
              <p class="feature-text">Cutting-edge solutions that drive real business value</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">04</div>
              <h4 class="feature-title">End-to-End Service</h4>
              <p class="feature-text">From strategy to implementation and ongoing support</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Form Section -->
    <v-container fluid class="contact-section py-16" id="contact-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <v-chip class="contact-tag mb-4" small outlined>Get in Touch</v-chip>
          <h2 class="text-h3 font-weight-bold mb-4">
            Let's Start Your
            <span class="gradient-text-contact">AI Journey</span>
          </h2>
          <p class="contact-subtitle">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-form ref="form" v-model="formValid" @submit.prevent="submitForm" class="contact-form">
            <v-card class="form-card pa-6" elevation="0">
              <v-text-field
                v-model="formData.name"
                label="Full Name"
                :rules="nameRules"
                required
                outlined
                dense
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="formData.email"
                label="Email Address"
                :rules="emailRules"
                required
                outlined
                dense
                class="mb-4"
              ></v-text-field>

              <v-textarea
                v-model="formData.message"
                label="Your Message"
                :rules="messageRules"
                required
                outlined
                dense
                rows="4"
                class="mb-6"
              ></v-textarea>

              <v-btn
                type="submit"
                :loading="formLoading"
                :disabled="!formValid"
                class="submit-btn"
                elevation="0"
                x-large
                block
                height="56"
              >
                <span class="btn-text">Send Message</span>
              </v-btn>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
                { property: 'og:image', content: 'https://allometrik.com/img/logo_main.a5f4ff0c.png' }, // Make sure to add an actual image URL
                { property: 'twitter:url', content: 'https://allometrik.com/' },
                { property: 'twitter:domain', content: 'allometrik.com' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Allometrik - AI Consulting & Integration Services' },
                { name: 'twitter:description', content: 'Expert AI consulting and Integration services to transform your business. From concept to reality, we deliver cutting-edge AI solutions.' },
                { name: 'twitter:image', content: 'https://allometrik.com/img/logo_main.a5f4ff0c.png' }, // Make sure to add an actual image URL
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
                    title: 'AI-Powered Document Processing',
                    description: 'Revolutionizing banking workflows with advanced machine vision and OCR technologies, reducing processing time by 80%.',
                    img: 'ocr_case.jpeg',
                    category: 'Banking & Finance'
                },
                {
                    title: 'Intelligent Report Generation',
                    description: 'Implementing RAG-based document generation for precise, context-aware business reporting and analytics.',
                    img: 'reportally.png',
                    category: 'Business Intelligence'
                },
                {
                    title: 'Enterprise Accounting Automation',
                    description: 'Streamlining complex accounting processes with AI, achieving 95% accuracy in transaction categorization.',
                    img: 'csv_ocr_case.jpeg',
                    category: 'Enterprise Solutions'
                },
                {
                    title: 'Industrial IoT Leadership',
                    description: 'Delivering cutting-edge training programs for global industrial companies in IoT and embedded AI implementation.',
                    img: 'industrial_jose.jpeg',
                    category: 'Training & Development'
                }
            ],
            processSteps: [
                {
                    icon: '📞',
                    title: 'Book a Free Call',
                    description: 'Schedule a no-obligation consultation with our founder to discuss your goals and explore how AI can transform your business.'
                },
                {
                    icon: '📋',
                    title: 'Strategic Planning',
                    description: 'We\'ll analyze your needs, develop a tailored strategy, and create a detailed roadmap for implementing AI solutions.'
                },
                {
                    icon: '🚀',
                    title: 'Execute & Scale',
                    description: 'Watch your business transform as we implement, iterate, and optimize your AI solutions for maximum impact.'
                }
            ],
            services: [
                {
                    icon: '💡',
                    title: 'AI Product Strategy',
                    description: 'We design novel, beautiful products that leverage generative AI to create entirely new possibilities for your business and delight your customers.'
                },
                {
                    icon: '⚡',
                    title: 'AI Development',
                    description: 'We implement state-of-the-art models through fine-tuning, RAG, and advanced prompt engineering to deliver accelerated workflows and powerful solutions.'
                },
                {
                    icon: '🎯',
                    title: 'AI Consulting',
                    description: 'Our team of experts helps you navigate the evolving AI landscape, identify high-value use cases, and develop strategic implementation plans.'
                },
                {
                    icon: '🚀',
                    title: 'AI Research',
                    description: 'We conduct cutting-edge research to keep you at the forefront of AI innovation, transforming theoretical advances into practical solutions.'
                }
            ],
            formValid: true,
            formLoading: false,
            formData: {
                name: '',
                email: '',
                message: ''
            },
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 50 || 'Name must be less than 50 characters'
            ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid'
            ],
            messageRules: [
                v => !!v || 'Message is required',
                v => v.length >= 10 || 'Message must be at least 10 characters'
            ]
        }
    },
    methods: {
        setupDialog(project) {
            this.currentProject = project;
            this.dialog = true;
            console.log('Opening case study:', project.title);
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        async submitForm() {
            if (!this.$refs.form.validate()) return;
            
            this.formLoading = true;
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: process.env.VUE_APP_WEB3FORMS_KEY,
                        name: this.formData.name,
                        email: this.formData.email,
                        message: this.formData.message,
                        subject: 'New Contact Form Submission - Allometrik'
                    })
                });
                
                const result = await response.json();
                if (result.success) {
                    this.snackbar = {
                        show: true,
                        text: 'Message sent successfully! We\'ll get back to you soon.',
                        color: 'success'
                    };
                    this.$refs.form.reset();
                    this.formData = {
                        name: '',
                        email: '',
                        message: ''
                    };
                }
            } catch (error) {
                this.snackbar = {
                    show: true,
                    text: 'Failed to send message. Please try again later.',
                    color: 'error'
                };
            } finally {
                this.formLoading = false;
            }
        }
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
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #1976D2, #2196F3);
    color: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.25rem;
    z-index: 2;
    box-shadow: 0 8px 24px rgba(25, 118, 210, 0.25);
    border: 3px solid white;
    transition: all 0.3s ease;
}

.process-col:hover .process-number {
    transform: translateX(-50%) translateY(-5px);
    box-shadow: 0 12px 28px rgba(25, 118, 210, 0.3);
    background: linear-gradient(135deg, #2196F3, #1976D2);
}

.process-step-card {
    background: white;
    border-radius: 20px;
    padding: 3rem 2rem 2rem;
    height: 100%;
    margin-top: 24px;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.process-step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
    border-color: transparent;
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

.hero-section {
    position: relative;
    min-height: 85vh;
    background: linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-top: 80px;
    border-bottom: 1px solid rgba(25, 118, 210, 0.08);
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 20%, rgba(66, 165, 245, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(66, 165, 245, 0.12) 0%, transparent 50%);
    z-index: 0;
    animation: gradientShift 15s ease-in-out infinite;
}

@keyframes gradientShift {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
}

.hero-row {
    min-height: 75vh;
    padding-top: 2rem; /* Added padding */
}

.hero-left {
    padding-right: 4rem;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(66, 165, 245, 0.15);
    padding: 8px 16px;
    border-radius: 100px;
    box-shadow: 0 2px 8px rgba(66, 165, 245, 0.1);
    backdrop-filter: blur(8px);
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #2196F3;
    border-radius: 50%;
    margin-right: 12px;
    position: relative;
}

.pulse-dot::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: pulse 2s ease-out infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }
    70% {
        transform: scale(2);
        opacity: 0;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

.badge-text {
    color: #1976D2;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
}

.hero-title {
    font-size: 3.75rem;
    font-weight: 800;
    line-height: 1.2;
    color: #1a237e;
}

.gradient-text {
    display: block;
    margin-top: 0.5rem;
    background: linear-gradient(135deg, #1976D2, #2196F3, #42A5F5);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 4rem;
    animation: gradientFlow 6s ease infinite;
}

@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.7;
    color: #546e7a;
    margin-bottom: 2rem;
    font-weight: 400;
}

.cta-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.primary-cta {
    padding: 0 32px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: none;
    border-radius: 100px;
    background: linear-gradient(135deg, #1976D2, #2196F3, #42A5F5) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
}

.primary-cta:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px rgba(33, 150, 243, 0.3);
}

.cta-text {
    font-size: 1.1rem;
    margin-bottom: 2px;
}

.cta-time {
    font-size: 0.85rem;
    opacity: 0.9;
}

.guarantee-text {
    font-size: 0.95rem;
    color: #546e7a;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.check-icon {
    color: #4CAF50;
    font-weight: bold;
}

.divider-dot {
    color: #90a4ae;
    margin: 0 4px;
}

.hero-right {
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-proof {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.8);
}

.proof-header {
    text-align: center;
    margin-bottom: 2rem;
}

.stars {
    color: #FFB400;
    font-size: 1.5rem;
    letter-spacing: 4px;
    margin-bottom: 0.5rem;
}

.rating-text {
    color: #546e7a;
    font-size: 1rem;
    font-weight: 500;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    text-align: center;
}

.metric-item {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.6);
}

.metric-item:hover {
    transform: translateY(-5px) scale(1.03);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 24px rgba(33, 150, 243, 0.15);
}

.metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1976D2, #2196F3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;
    line-height: 1;
}

.metric-label {
    font-size: 0.9rem;
    color: #546e7a;
    font-weight: 500;
    line-height: 1.4;
}

@media (max-width: 960px) {
    .hero-section {
        min-height: auto;
        padding: 4rem 0;
    }

    .hero-row {
        min-height: auto;
    }

    .hero-left {
        padding-right: 1rem;
        text-align: center;
    }

    .hero-title {
        font-size: 2.75rem;
    }

    .gradient-text {
        font-size: 3rem;
    }

    .hero-subtitle {
        font-size: 1.15rem;
        padding: 0 1rem;
    }

    .cta-container {
        align-items: center;
    }

    .guarantee-text {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }

    .divider-dot {
        display: none;
    }

    .hero-right {
        margin-top: 3rem;
    }

    .metrics-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .metric-item {
        padding: 1.5rem;
    }
}

.service-tag {
    background: rgba(66, 165, 245, 0.1);
    color: #1976D2;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    border-color: #1976D2;
    font-size: 0.875rem;
    padding: 0 12px;
    height: 24px;
}

.gradient-text-services {
  background: linear-gradient(135deg, #1976D2, #2196F3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: block;
  margin-top: 0.5rem;
}

.service-subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #546E7A;
  max-width: 700px;
  margin: 2rem auto 0;
}

.service-grid {
  max-width: 1200px;
  margin: 0 auto;
  gap: 1.5rem;
}

.service-col {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  width: 100%;
  max-width: 320px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  border-color: rgba(33, 150, 243, 0.2);
}

.service-icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(33, 150, 243, 0.12);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1);
  background: rgba(33, 150, 243, 0.18);
}

.step-icon {
  font-size: 28px;
}

.service-description {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .service-col {
    padding: 0.5rem;
  }
  
  .service-card {
    padding: 1.75rem 1.5rem;
  }
}

.process-section {
    background: #f8fafc;
    position: relative;
    overflow: hidden;
}

.process-subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #64748b;
    max-width: 700px;
    margin: 1rem auto 0;
}

.process-timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}

.process-col {
    position: relative;
    padding: 2rem;
}

.process-number {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #1976D2, #2196F3);
    color: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.25rem;
    z-index: 2;
    box-shadow: 0 8px 24px rgba(25, 118, 210, 0.25);
    border: 3px solid white;
    transition: all 0.3s ease;
}

.process-col:hover .process-number {
    transform: translateX(-50%) translateY(-5px);
    box-shadow: 0 12px 28px rgba(25, 118, 210, 0.3);
    background: linear-gradient(135deg, #2196F3, #1976D2);
}

.process-step-card {
    background: white;
    border-radius: 20px;
    padding: 3rem 2rem 2rem;
    height: 100%;
    margin-top: 24px;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.process-step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
    border-color: transparent;
}

.icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(33, 150, 243, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.process-step-description {
    color: #64748b;
    line-height: 1.6;
    font-size: 1rem;
}

@media (max-width: 600px) {
    .process-col {
        padding: 1rem;
    }
    
    .process-step-card {
        padding: 2rem 1.5rem 1.5rem;
    }
}

.step-icon {
    font-size: 24px;
    color: #2196F3;
    font-weight: bold;
}

.icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(33, 150, 243, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.case-studies-section {
    background: #f8fafc;
    position: relative;
    overflow: hidden;
}

.case-studies-tag {
    background: rgba(66, 165, 245, 0.1);
    color: #1976D2;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.gradient-text-cases {
    background: linear-gradient(135deg, #1976D2, #2196F3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
    margin-top: 0.5rem;
}

.case-studies-subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #64748b;
    max-width: 700px;
    margin: 1rem auto 0;
}

.case-studies-grid {
    max-width: 1400px;
    margin: 0 auto;
}

.case-study-card {
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: white;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.case-study-card.on-hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: rgba(33, 150, 243, 0.2);
}

.card-image-wrapper {
    position: relative;
    overflow: hidden;
}

.case-study-image {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-study-card:hover .case-study-image {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(25, 118, 210, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
}

.image-overlay.show-overlay {
    opacity: 1;
}

.learn-more-btn {
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.category-tag {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(66, 165, 245, 0.1);
    color: #1976D2;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.case-study-description {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.975rem;
    margin: 0;
}

@media (max-width: 600px) {
    .case-study-card {
        margin-bottom: 1.5rem;
    }
    
    .case-study-image {
        height: 200px !important;
    }
}

.process-tag {
    background: rgba(66, 165, 245, 0.1);
    color: #1976D2;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.gradient-text-process {
    background: linear-gradient(135deg, #1976D2, #2196F3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
    margin-top: 0.5rem;
}

.about-section {
    background: white;
    position: relative;
    overflow: hidden;
}

.about-content {
    max-width: 1400px;
    margin: 0 auto;
}

.about-tag {
    background: rgba(66, 165, 245, 0.1);
    color: #1976D2;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.gradient-text-about {
    background: linear-gradient(135deg, #1976D2, #2196F3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
    margin-top: 0.5rem;
}

.about-stats {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    margin: 2rem 0;
}

.stat-item {
    text-align: left;
}

.stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1976D2, #2196F3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
}

.about-description {
    color: #64748b;
    max-width: 600px;
}

.expertise-tags .v-chip {
    background: rgba(66, 165, 245, 0.1);
    color: #1976D2;
    font-weight: 500;
}

.contact-btn, .schedule-btn {
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    height: 48px;
    padding: 0 24px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 600px;
    width: 100%;
}

.feature-item {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: transparent;
}

.feature-number {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1976D2, #2196F3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
}

.feature-text {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
}

@media (max-width: 960px) {
    .about-stats {
        justify-content: center;
    }
    
    .stat-item {
        text-align: center;
    }
    
    .about-description {
        margin: 0 auto;
        text-align: center;
    }
    
    .expertise-tags {
        justify-content: center;
    }
    
    .contact-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .contact-btn, .schedule-btn {
        width: 100%;
    }
}

.testimonials-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f1f4ff 100%);
  position: relative;
}

.testimonial-tag {
  color: #1976D2;
  border-color: #1976D2;
  font-size: 0.875rem;
  padding: 0 12px;
  height: 24px;
}

.testimonial-subtitle {
  color: #546e7a;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.gradient-text-testimonials {
  background: linear-gradient(135deg, #1976D2, #2196F3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.company-grid {
  position: relative;
}

.logos-wrapper {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
}

.company-logo {
  opacity: 0.75;
  transition: all 0.3s ease;
  filter: grayscale(100%);
}

.company-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: translateY(-2px);
}

.partners-section {
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.company-carousel {
  background: transparent;
}

.company-logo {
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.company-logo:hover {
  opacity: 1;
}

/* Consistent Section Styling */
.section-tag {
  color: #1976D2;
  border-color: #1976D2;
  font-size: 0.875rem;
  padding: 0 12px;
  height: 24px;
}

.section-subtitle {
  color: #546e7a;
  font-size: 1.1rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Section Backgrounds */
.services-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f1f4ff 100%);
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
  overflow: hidden;
}

#services-section {
  margin-top: 0;
}

.process-section {
  background: #ffffff;
}

.case-studies-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f1f4ff 100%);
}

.about-section {
  background: #ffffff;
}

/* Card Styling */
.service-card,
.process-step-card,
.case-study-card,
.feature-item {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover,
.process-step-card:hover,
.case-study-card:hover,
.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

/* Icon Styling */
.service-icon-wrapper,
.icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(25, 118, 210, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.step-icon {
  font-size: 2rem;
}

/* Button Styling */
.contact-btn,
.schedule-btn,
.learn-more-btn {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 100px;
  height: 48px;
  min-width: 160px;
}

/* Responsive Adjustments */
@media (max-width: 959.98px) {
  .section-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .service-card,
  .process-step-card,
  .case-study-card,
  .feature-item {
    padding: 1.5rem;
  }
}

.contact-section {
  background: linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%);
  position: relative;
  overflow: hidden;
}

.contact-tag {
  background: rgba(33, 150, 243, 0.1) !important;
  color: #1976D2 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  border-color: #1976D2;
  font-size: 0.875rem;
  padding: 0 12px;
  height: 24px;
}

.gradient-text-contact {
  background: linear-gradient(135deg, #1976D2, #2196F3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: block;
  margin-top: 0.5rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #546E7A;
  max-width: 700px;
  margin: 0 auto;
}

.contact-form {
  position: relative;
}

.form-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.submit-btn {
  background: linear-gradient(135deg, #1976D2, #2196F3) !important;
  color: white !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.submit-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgba(33, 150, 243, 0.3);
}

.btn-text {
  font-size: 1.1rem;
}

@media (max-width: 960px) {
  .contact-section {
    padding: 4rem 0;
  }
  
  .form-card {
    margin: 0 1rem;
  }
}

</style>