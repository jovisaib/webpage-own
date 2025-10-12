<template>
  <div class="home">
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="5000"
    >
      {{ snackbar.text }}
    </v-snackbar>
    <v-container fluid class="hero-section px-0">
      <div class="hero-background"></div>
      <v-row align="center" justify="center" class="hero-content ma-0">
        <v-col cols="12" lg="11" class="pa-0">
          <v-container>
            <v-row align="center" class="hero-row">
              <v-col cols="12" md="7" class="hero-left">
                <div class="hero-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-text">Available for new projects</span>
                </div>

                <h1 class="hero-title">
                  Enterprise AI<br>
                  <span class="gradient-text">That Works</span>
                </h1>

                <p class="hero-subtitle">
                  Production-grade AI systems for global institutions. From intelligent document processing to compliance automation. 
                  Battle-tested across banking, chemical, hospitality, and state sectors.
                </p>

                <div class="cta-container">
                  <v-btn
                    href="https://calendly.com/jovisaib/introcall"
                    class="primary-cta"
                    target="_blank"
                    elevation="0"
                    large
                  >
                    <span>Book a call</span>
                    <span class="cta-arrow">→</span>
                  </v-btn>
                  <span class="cta-note">30 min · No strings attached</span>
                </div>
              </v-col>

              <v-col cols="12" md="5" class="hero-right">
                <div class="hero-visual-card">
                  <div class="visual-stat-item">
                    <div class="stat-icon-wrapper">
                      <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                      </svg>
                    </div>
                    <div class="stat-content">
                      <div class="stat-big-number">50+</div>
                      <div class="stat-description">Projects Delivered</div>
                    </div>
                  </div>

                  <div class="visual-stat-item">
                    <div class="stat-icon-wrapper">
                      <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                        <path d="M2 12h20"/>
                      </svg>
                    </div>
                    <div class="stat-content">
                      <div class="stat-big-number">10+</div>
                      <div class="stat-description">Countries Worldwide</div>
                    </div>
                  </div>

                  <div class="industries-grid">
                    <div class="industry-pill">Banking</div>
                    <div class="industry-pill">Chemical</div>
                    <div class="industry-pill">Hospitality</div>
                    <div class="industry-pill">State Sector</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <!-- Testimonials Section -->
    <v-container fluid class="testimonials-section">
      <v-row justify="center" class="text-center mb-16">
        <v-col cols="12" md="8">
          <div class="section-label mb-6">Social proof</div>
          <h2 class="section-title">
            Trusted By<br>
            <span class="gradient-text-testimonials">Industry Leaders</span>
          </h2>
        </v-col>
      </v-row>

      <!-- Company Logos Infinite Scroll -->
      <div class="logos-scroll-container">
        <div class="logos-scroll-wrapper">
          <div class="logos-scroll-track">
            <!-- First set of logos -->
            <div class="logo-item" v-for="i in 8" :key="`logo-1-${i}`">
              <img
                :src="require(`@/assets/company-logo-${i}.png`)"
                :alt="`Company ${i}`"
                class="company-logo"
              />
            </div>
            <!-- Duplicate set for seamless loop -->
            <div class="logo-item" v-for="i in 8" :key="`logo-2-${i}`">
              <img
                :src="require(`@/assets/company-logo-${i}.png`)"
                :alt="`Company ${i}`"
                class="company-logo"
              />
            </div>
          </div>
        </div>
        <!-- Fade masks -->
        <div class="scroll-fade scroll-fade-left"></div>
        <div class="scroll-fade scroll-fade-right"></div>
      </div>

      <!-- Testimonials Widget -->
      <v-container class="pa-7">
        <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
      </v-container>
    </v-container>

    <!-- Services Section -->
    <v-container fluid class="services-section" id="services-section">
      <v-row class="px-4 px-md-6 d-flex flex-column align-center text-center ma-0">
        <v-col cols="12" class="d-flex flex-column align-center mb-16 pa-0">
          <div class="text-center">
            <div class="section-label mb-6">What we do</div>
            <h2 class="section-title">
              Enterprise AI<br>
              <span class="gradient-text-services">That Ships</span>
            </h2>
          </div>
        </v-col>

        <v-col cols="12">
          <v-row class="service-grid justify-center">
            <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" lg="3" class="service-col">
              <v-hover v-slot="{ hover }">
                <v-card class="service-card" :class="{ 'on-hover': hover }" elevation="0">
                  <div class="service-number">{{ String(index + 1).padStart(2, '0') }}</div>
                  <h3 class="service-title">{{ service.title }}</h3>
                  <p class="service-description">{{ service.description }}</p>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Process Section -->
    <v-container fluid class="process-section" id="process-section">
      <v-row justify="center" class="text-center mb-16">
        <v-col cols="12" md="8">
          <div class="section-label mb-6">How it works</div>
          <h2 class="section-title">
            Simple Process,<br>
            <span class="gradient-text-process">Real Results</span>
          </h2>
        </v-col>
      </v-row>

      <v-row class="process-timeline" justify="center">
        <v-col cols="12" md="4" v-for="(step, index) in processSteps" :key="index" class="process-col">
          <v-card class="process-step-card" elevation="0">
            <div class="process-step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="process-step-title">{{ step.title }}</h3>
            <p class="process-step-description">{{ step.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Case Studies Section -->
    <v-container fluid class="case-studies-section">
      <v-row justify="center" class="text-center mb-16">
        <v-col cols="12" md="8">
          <div class="section-label mb-6">Selected work</div>
          <h2 class="section-title">
            Production Systems<br>
            <span class="gradient-text-cases">That Deliver</span>
          </h2>
        </v-col>
      </v-row>

      <v-container class="projects-showcase-container">
        <div class="projects-masonry-grid">
          <v-hover v-slot="{ hover }" v-for="(project, index) in projects" :key="index">
            <div 
              class="project-card" 
              :class="[
                { 'project-hover': hover },
                { 'project-featured': project.featured },
                `project-${project.size || 'medium'}`
              ]"
            >
              <div class="project-card-inner">
                <!-- Category Tag -->
                <div class="project-category-badge">
                  {{ project.category }}
                </div>

                <!-- Content Area -->
                <div class="project-text-content">
                  <h3 class="project-card-title">
                    {{ project.title }}
                  </h3>
                  <p class="project-card-description">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Image Area -->
                <div class="project-image-container">
                  <div class="image-frame">
                    <img
                      :src="require(`@/assets/${project.img}`)"
                      class="project-showcase-image"
                      :alt="project.title"
                    />
                  </div>
                </div>

                <!-- Hover Action -->
                <div class="project-hover-action" :class="{ 'visible': hover }">
                  <div class="action-content">
                    <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    <span>View Case Study</span>
                  </div>
                </div>
              </div>
            </div>
          </v-hover>
        </div>
      </v-container>
    </v-container>

    <!-- About Section -->
    <v-container fluid class="about-section py-16" id="about-me-section">
      <v-row justify="center" align="center" class="about-content">
        <v-col cols="12" md="6" class="text-center text-md-left pr-md-8">
          <div class="section-label mb-6">About</div>
          <h2 class="section-title" style="text-align: left;">
            Production AI<br>
            <span class="gradient-text-about">for Enterprise</span>
          </h2>

          <div class="about-description">
            <p class="about-text">
              Allometrik builds production-grade AI systems for global enterprises. We direct master's programs at Nuclio Digital School, deliver bootcamps at Saudi Digital Academy, and serve as pre-sales AI partners for international consultancies opening new AI projects.
            </p>
            <p class="about-text">
              From processing millions of financial documents and automating compliance audits for chemical manufacturers, to building conversational AI platforms for document generation and HR automation—we solve complex technical challenges that drive real business value across continents.
            </p>

            <div class="capability-list">
              <div class="capability-item">
                <svg class="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Document Intelligence & Agent Systems</span>
              </div>
              <div class="capability-item">
                <svg class="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Compliance & Audit Automation</span>
              </div>
              <div class="capability-item">
                <svg class="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Education Leadership & Training</span>
              </div>
              <div class="capability-item">
                <svg class="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>HR Automation & Recruitment</span>
              </div>
              <div class="capability-item">
                <svg class="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Pre-Sales AI Consulting</span>
              </div>
              <div class="capability-item">
                <svg class="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Conversational AI Platforms</span>
              </div>
            </div>
          </div>

          <div class="about-cta-section">
            <v-btn
              href="https://calendly.com/jovisaib/introcall"
              class="about-primary-btn"
              elevation="0"
              large
            >
              <span>Let's talk</span>
              <span class="btn-arrow">→</span>
            </v-btn>
            <a href="mailto:hello@allometrik.com" class="about-email-link">
              hello@allometrik.com
            </a>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-none d-md-flex align-center justify-center">
          <div class="feature-grid">
            <div class="feature-item">
              <div class="feature-number">01</div>
              <h4 class="feature-title">Production Ready</h4>
              <p class="feature-text">Battle-tested systems handling millions of transactions</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">02</div>
              <h4 class="feature-title">Global Scale</h4>
              <p class="feature-text">Deployed across 10+ countries, multiple industries</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">03</div>
              <h4 class="feature-title">Fast Delivery</h4>
              <p class="feature-text">Rapid prototyping to production deployment</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">04</div>
              <h4 class="feature-title">Full Support</h4>
              <p class="feature-text">From strategy to implementation and beyond</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Form Section -->
    <v-container fluid class="contact-section" id="contact-section">
      <v-row justify="center" class="contact-wrapper">
        <v-col cols="12" lg="10">
          <v-row class="contact-content">
            <!-- Left Side - Info -->
            <v-col cols="12" md="5" class="contact-info-col">
              <div class="section-label mb-6">Get in touch</div>
              <h2 class="contact-main-title">
                Let's Talk<br>
                <span class="gradient-text-contact">About Your Project</span>
              </h2>
              <p class="contact-description">
                Have something in mind? We'd love to hear about it. Reach out and we'll get back within 24 hours.
              </p>

              <div class="contact-methods">
                <div class="contact-method-item">
                  <div class="method-icon-wrapper">
                    <svg class="method-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <div class="method-label">Email</div>
                    <a href="mailto:hello@allometrik.com" class="method-value">hello@allometrik.com</a>
                  </div>
                </div>

                <div class="contact-method-item">
                  <div class="method-icon-wrapper">
                    <svg class="method-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <div class="method-label">Schedule</div>
                    <a href="https://calendly.com/jovisaib/introcall" target="_blank" class="method-value">Book a call</a>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- Right Side - Compact Form -->
            <v-col cols="12" md="7" class="contact-form-col">
              <v-form ref="form" v-model="formValid" @submit.prevent="submitForm" class="compact-form">
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <v-text-field
                    v-model="formData.name"
                    :rules="nameRules"
                    required
                    outlined
                    dense
                    hide-details="auto"
                    class="modern-input"
                  ></v-text-field>
                </div>

                <div class="form-group">
                  <label class="form-label">Email</label>
                  <v-text-field
                    v-model="formData.email"
                    :rules="emailRules"
                    required
                    outlined
                    dense
                    hide-details="auto"
                    class="modern-input"
                  ></v-text-field>
                </div>

                <div class="form-group">
                  <label class="form-label">Message</label>
                  <v-textarea
                    v-model="formData.message"
                    :rules="messageRules"
                    required
                    outlined
                    dense
                    rows="3"
                    hide-details="auto"
                    class="modern-input"
                  ></v-textarea>
                </div>

                <v-btn
                  type="submit"
                  :loading="formLoading"
                  :disabled="!formValid"
                  class="compact-submit-btn"
                  elevation="0"
                  large
                >
                  <span>Send message</span>
                  <span class="btn-arrow-submit">→</span>
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
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
                    title: 'Nuclio Digital School',
                    description: 'Global Head Expert and Director of the AI for Business and Innovation master\'s program at Nuclio Digital School. Leading cutting-edge curriculum design and delivering executive training to business leaders worldwide on Generative AI, Machine Learning, and AI strategy implementation.',
                    img: 'nuclio_digital_school.png',
                    category: 'Education Leadership',
                    size: 'large',
                    featured: true
                },
                {
                    title: 'ReportAlly Platform',
                    description: 'Intelligent document generation platform for Unidoc with conversational AI interface. Chat-powered system for creating complex PDFs: financial reports, airline tickets, concert passes, invoices, and custom business documents. Natural language processing meets document automation.',
                    img: 'reportally.png',
                    category: 'Enterprise SaaS',
                    size: 'medium'
                },
                {
                    title: 'Comply Platform',
                    description: 'Automated audit compliance system for Intemic. Multi-industry regulatory documentation platform that reduces manual work by 85%. Intelligent audit generation for chemical, manufacturing, and enterprise sectors. Scale compliance operations with AI-powered validation.',
                    img: 'comply.png',
                    category: 'Compliance & Automation',
                    size: 'medium'
                },
                {
                    title: 'Financial Document Processing',
                    description: 'Production OCR system processing thousands of promissory notes and financial documents for Spanish fintech. Advanced extraction with validation and compliance checks. Multi-format parsing with intelligent data validation.',
                    img: 'ocr_case.jpeg',
                    category: 'Financial Services',
                    size: 'small'
                },
                {
                    title: 'Saudi Digital Academy',
                    description: 'AI training bootcamp delivered at Saudi Digital Academy (SDA). Intensive programs on Generative AI, AIoT for industrial applications, and enterprise AI implementation. Training next-generation leaders in the Middle East on production AI systems.',
                    img: 'saudi_digital_academy.png',
                    category: 'Executive Training',
                    size: 'medium'
                },
                {
                    title: '401k Document Intelligence',
                    description: 'Complex document extraction and analysis for retirement fund processing. Multi-format parsing with intelligent data validation. Processing millions of documents with high accuracy OCR and agent-based verification systems.',
                    img: 'csv_ocr_case.jpeg',
                    category: 'Document Processing',
                    size: 'small'
                }
            ],
            processSteps: [
                {
                    icon: '01',
                    title: 'Discovery Call',
                    description: 'Technical consultation with the founder. We discuss your challenges, assess feasibility, and determine if we\'re the right fit for your project.'
                },
                {
                    icon: '02',
                    title: 'Technical Planning',
                    description: 'Deep dive into requirements, data architecture, and implementation strategy. We create a detailed roadmap with milestones and deliverables.'
                },
                {
                    icon: '03',
                    title: 'Build & Deploy',
                    description: 'Rapid prototyping to production deployment. Iterative development with regular check-ins, testing, and optimization until we achieve your objectives.'
                }
            ],
            services: [
                {
                    icon: 'AI',
                    title: 'Document Intelligence',
                    description: 'Advanced OCR and machine vision systems for processing financial documents, 401k statements, and complex enterprise paperwork at scale.'
                },
                {
                    icon: 'R&D',
                    title: 'Applied AI R&D',
                    description: 'Research-backed solutions that move from prototype to production. We build what others can\'t, leveraging state-of-the-art techniques for real business impact.'
                },
                {
                    icon: 'Enterprise',
                    title: 'Enterprise Consulting',
                    description: 'Strategic AI guidance for consultancies and large organizations. Pre-sales support, technical architecture, and implementation roadmaps for Fortune 500 clients.'
                },
                {
                    icon: 'Training',
                    title: 'Executive Training',
                    description: 'Leadership programs for AI adoption. Experience includes directing master\'s programs and delivering training for international digital academies.'
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
            ],
            snackbar: {
                show: false,
                text: '',
                color: 'success'
            }
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
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                this.snackbar = {
                    show: true,
                    text: 'Failed to send message. Please try again later or contact us directly at hello@allometrik.com',
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
    min-height: 90vh;
    background: #ffffff;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-top: 80px;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(66, 165, 245, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(66, 165, 245, 0.02) 0%, transparent 50%);
    z-index: 0;
}

@keyframes gradientShift {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
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
    gap: 8px;
    background: transparent;
    padding: 0;
    margin-bottom: 32px;
}

.badge-dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.badge-text {
    color: #64748b;
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: -0.01em;
}

.hero-title {
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: #0f172a;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
}

.gradient-text {
    display: inline;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.hero-subtitle {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #64748b;
    margin-bottom: 40px;
    font-weight: 400;
    max-width: 540px;
    letter-spacing: -0.01em;
}

.cta-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}

.primary-cta {
    padding: 0 28px !important;
    height: 52px !important;
    font-weight: 600;
    font-size: 1rem !important;
    letter-spacing: -0.01em;
    text-transform: none !important;
    border-radius: 12px !important;
    background: #0f172a !important;
    color: #ffffff !important;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.primary-cta:hover {
    background: #1e293b !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cta-arrow {
    font-size: 1.25rem;
    margin-left: 8px;
    transition: transform 0.2s ease;
    display: inline-block;
}

.primary-cta:hover .cta-arrow {
    transform: translateX(3px);
}

.cta-note {
    font-size: 0.875rem;
    color: #64748b;
    letter-spacing: -0.01em;
}

.check-icon {
    width: 18px;
    height: 18px;
    color: #4CAF50;
    flex-shrink: 0;
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

.hero-visual-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    padding: 40px 36px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.visual-stat-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid #e2e8f0;
}

.visual-stat-item:last-of-type {
    border-bottom: none;
}

.stat-icon-wrapper {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.stat-icon {
    width: 28px;
    height: 28px;
    color: #ffffff;
    stroke-width: 2.5;
}

.stat-content {
    flex: 1;
}

.stat-big-number {
    font-size: 2.75rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 6px;
}

.stat-description {
    font-size: 0.9375rem;
    color: #64748b;
    letter-spacing: -0.01em;
    line-height: 1.4;
}

.industries-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 28px;
}

.industry-pill {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px 16px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    color: #475569;
    letter-spacing: -0.01em;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.industry-pill:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    transform: translateY(-2px);
}


@media (max-width: 960px) {
    .hero-section {
        min-height: auto;
        padding: 3rem 0;
    }

    .hero-row {
        min-height: auto;
    }

    .hero-left {
        padding-right: 0;
        text-align: center;
    }

    .hero-badge {
        justify-content: center;
    }

    .hero-title {
        font-size: clamp(2.5rem, 10vw, 3.5rem);
    }

    .hero-subtitle {
        font-size: 1rem;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-container {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .primary-cta {
        width: 100%;
        max-width: 280px;
    }

    .cta-note {
        text-align: center;
    }

    .hero-right {
        margin-top: 3rem;
    }

    .hero-visual-card {
        max-width: 100%;
        padding: 32px 24px;
    }

    .stat-big-number {
        font-size: 2.25rem;
    }

    .stat-icon-wrapper {
        width: 48px;
        height: 48px;
    }

    .stat-icon {
        width: 24px;
        height: 24px;
    }

    .industries-grid {
        grid-template-columns: 1fr;
        gap: 8px;
    }
}

.section-label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
    letter-spacing: -0.01em;
    text-transform: lowercase;
}

.section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    color: #0f172a;
    letter-spacing: -0.03em;
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
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
}

.service-subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #546E7A;
  max-width: 700px;
  margin: 2rem auto 0;
}

.service-grid {
  max-width: 1400px;
  margin: 0 auto;
  gap: 24px;
}

.service-col {
  display: flex;
  justify-content: center;
  padding: 12px;
}

.service-card {
  background: white;
  border-radius: 20px;
  padding: 40px 32px;
  height: 100%;
  width: 100%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: none;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-color: #cbd5e1;
}

.service-number {
  font-size: 2rem;
  font-weight: 700;
  color: #e2e8f0;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.service-card:hover .service-number {
  color: #cbd5e1;
}

.step-icon {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.01em;
}

.service-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  line-height: 1.3;
}

.service-description {
  color: #64748b;
  line-height: 1.7;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
  text-align: left;
}

@media (max-width: 960px) {
  .service-col {
    padding: 12px;
  }
  
  .service-card {
    padding: 32px 24px;
  }

  .service-number {
    font-size: 1.75rem;
  }

  .service-title {
    font-size: 1.25rem;
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
    max-width: 1400px;
    margin: 0 auto;
    gap: 32px;
}

.process-col {
    padding: 16px;
}

.process-step-card {
    background: white;
    border-radius: 20px;
    padding: 40px 32px;
    height: 100%;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #e2e8f0;
    box-shadow: none;
}

.process-step-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    border-color: #cbd5e1;
}

.process-step-number {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
}

.process-step-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: #0f172a;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    line-height: 1.3;
}

.process-step-description {
    color: #64748b;
    line-height: 1.7;
    font-size: 0.9375rem;
    letter-spacing: -0.01em;
}

@media (max-width: 600px) {
    .process-col {
        padding: 12px;
    }
    
    .process-step-card {
        padding: 32px 24px;
    }

    .process-step-number {
        font-size: 2.5rem;
    }
}

.step-icon {
    font-size: 20px;
    color: #2196F3;
    font-weight: 700;
    letter-spacing: -0.5px;
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
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline;
}

.case-studies-subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #64748b;
    max-width: 700px;
    margin: 1rem auto 0;
}

/* Modern Production Systems Showcase */
.projects-showcase-container {
    max-width: 1400px;
    padding: 0 24px;
}

.projects-masonry-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
    width: 100%;
}

.project-card {
    position: relative;
    background: white;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.project-large {
    grid-column: span 2;
}

.project-medium {
    grid-column: span 2;
}

.project-small {
    grid-column: span 1;
}

.project-featured {
    border: 2px solid #3b82f6;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
}

.project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
    border-color: #cbd5e1;
}

.project-featured:hover {
    border-color: #3b82f6;
    box-shadow: 0 20px 48px rgba(59, 130, 246, 0.2);
}

.project-card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
}

/* Category Badge */
.project-category-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    color: #3b82f6;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Text Content Area */
.project-text-content {
    padding: 56px 24px 20px;
    flex: 0 0 auto;
}

.project-card-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    line-height: 1.3;
}

.project-large .project-card-title {
    font-size: 1.5rem;
}

.project-card-description {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.9375rem;
    letter-spacing: -0.01em;
}

.project-large .project-card-description {
    font-size: 1rem;
    line-height: 1.7;
}

/* Image Container */
.project-image-container {
    flex: 1;
    padding: 0 24px 24px;
    display: flex;
    align-items: flex-end;
}

.image-frame {
    width: 100%;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #e2e8f0;
    position: relative;
    overflow: hidden;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-large .image-frame {
    min-height: 280px;
    padding: 32px;
}

.project-medium .image-frame {
    min-height: 220px;
    padding: 24px;
}

.project-showcase-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.3s ease;
    max-height: 100%;
}

.project-card:hover .project-showcase-image {
    transform: scale(1.05);
}

/* Hover Action Overlay */
.project-hover-action {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent);
    padding: 60px 24px 24px;
    transform: translateY(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

.project-hover-action.visible {
    transform: translateY(0);
}

.action-content {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-weight: 600;
    font-size: 0.9375rem;
    letter-spacing: 0.3px;
}

.action-icon {
    width: 20px;
    height: 20px;
    color: white;
}

/* Responsive Design */
@media (max-width: 1400px) {
    .projects-masonry-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .project-large {
        grid-column: span 3;
    }
    
    .project-medium {
        grid-column: span 3;
    }
    
    .project-small {
        grid-column: span 1;
    }
}

@media (max-width: 1024px) {
    .projects-masonry-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
    
    .project-large,
    .project-medium {
        grid-column: span 2;
    }
    
    .project-small {
        grid-column: span 1;
    }
}

@media (max-width: 768px) {
    .projects-showcase-container {
        padding: 0 16px;
    }
    
    .projects-masonry-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .project-large,
    .project-medium,
    .project-small {
        grid-column: span 1;
    }
    
    .project-text-content {
        padding: 52px 20px 16px;
    }
    
    .project-card-title {
        font-size: 1.125rem;
    }
    
    .project-large .project-card-title {
        font-size: 1.25rem;
    }
    
    .image-frame {
        min-height: 180px;
        padding: 16px;
    }
    
    .project-large .image-frame,
    .project-medium .image-frame {
        min-height: 200px;
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
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline;
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
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline;
}

.about-description {
    max-width: 560px;
    margin-top: 32px;
}

.about-text {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: #64748b;
    letter-spacing: -0.01em;
    margin-bottom: 20px;
}

.capability-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 24px;
    margin-top: 32px;
}

.capability-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.9375rem;
    color: #475569;
    letter-spacing: -0.01em;
}

.capability-icon {
    width: 20px;
    height: 20px;
    color: #2563eb;
    flex-shrink: 0;
}

.about-cta-section {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
}

.about-primary-btn {
    background: #0f172a !important;
    color: #ffffff !important;
    text-transform: none !important;
    font-weight: 600;
    letter-spacing: -0.01em;
    border-radius: 12px !important;
    padding: 0 28px !important;
    height: 52px !important;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-primary-btn:hover {
    background: #1e293b !important;
    transform: translateY(-1px);
}

.btn-arrow {
    font-size: 1.25rem;
    margin-left: 8px;
    transition: transform 0.2s ease;
    display: inline-block;
}

.about-primary-btn:hover .btn-arrow {
    transform: translateX(3px);
}

.about-email-link {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    transition: color 0.2s ease;
}

.about-email-link:hover {
    color: #0f172a;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 640px;
    width: 100%;
}

.feature-item {
    background: white;
    border-radius: 20px;
    padding: 32px 24px;
    box-shadow: none;
    border: 1px solid #e2e8f0;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    border-color: #cbd5e1;
}

.feature-number {
    font-size: 1.25rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 16px;
    line-height: 1;
    letter-spacing: -0.02em;
}

.feature-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
    line-height: 1.3;
}

.feature-text {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

@media (max-width: 960px) {
    .about-description {
        margin: 32px auto 0;
        text-align: center;
    }

    .about-text {
        font-size: 1rem;
    }

    .capability-list {
        align-items: center;
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .capability-item {
        justify-content: center;
    }

    .about-cta-section {
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .about-primary-btn {
        width: 100%;
        max-width: 280px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-top: 3rem;
    }

    .feature-item {
        padding: 24px 20px;
    }
}

.testimonials-section {
  background: #ffffff;
  position: relative;
  padding-top: 8rem;
  padding-bottom: 8rem;
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
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
}

/* Infinite Logos Scroll */
.logos-scroll-container {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 4rem;
  overflow: hidden;
  padding: 0 0;
}

.logos-scroll-wrapper {
  overflow: hidden;
  padding: 48px 0;
}

.logos-scroll-track {
  display: flex;
  align-items: center;
  gap: 80px;
  animation: scroll-logos 40s linear infinite;
  will-change: transform;
}

.logos-scroll-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-logos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 80px;
}

.company-logo {
  max-width: 140px;
  max-height: 70px;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: 0.4;
  filter: grayscale(100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-item:hover .company-logo {
  opacity: 0.8;
  filter: grayscale(0%);
  transform: scale(1.05);
}

/* Fade masks on edges */
.scroll-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  pointer-events: none;
  z-index: 2;
}

.scroll-fade-left {
  left: 0;
  background: linear-gradient(to right, #ffffff, transparent);
}

.scroll-fade-right {
  right: 0;
  background: linear-gradient(to left, #ffffff, transparent);
}

@media (max-width: 768px) {
  .logos-scroll-track {
    gap: 60px;
    animation-duration: 25s;
  }

  .logo-item {
    min-width: 120px;
    height: 60px;
  }

  .company-logo {
    max-width: 100px;
    max-height: 50px;
  }

  .scroll-fade {
    width: 60px;
  }
}

.company-grid {
  position: relative;
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
  background: #fafafa;
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;
  overflow: hidden;
}

#services-section {
  margin-top: 0;
}

.process-section {
  background: #ffffff;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.case-studies-section {
  background: #fafafa;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.about-section {
  background: #ffffff;
  padding-top: 8rem;
  padding-bottom: 8rem;
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

  .services-section,
  .process-section,
  .case-studies-section,
  .about-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .section-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .service-card,
  .process-step-card,
  .case-study-card,
  .feature-item {
    padding: 1.5rem;
  }
}

.contact-section {
  background: #ffffff;
  padding: 6rem 0 5rem;
  position: relative;
  overflow: hidden;
}

.contact-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  gap: 0;
  align-items: flex-start;
}

.contact-info-col {
  padding: 0 32px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-main-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  line-height: 1.1;
  color: #0f172a;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.gradient-text-contact {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
}

.contact-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
  letter-spacing: -0.01em;
  margin-bottom: 32px;
  max-width: 420px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-method-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.method-icon-wrapper {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.method-icon {
  width: 20px;
  height: 20px;
  color: #475569;
}

.method-content {
  flex: 1;
}

.method-label {
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 2px;
  letter-spacing: -0.01em;
}

.method-value {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #0f172a;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.method-value:hover {
  color: #2563eb;
}

.contact-form-col {
  padding: 32px;
  background: #fafafa;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.compact-form {
  width: 100%;
}

.form-group {
  margin-bottom: 18px;
  width: 100%;
}

.form-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #475569;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.modern-input {
  margin-bottom: 0;
  width: 100%;
}

.modern-input .v-input__control {
  background: #ffffff;
  width: 100%;
}

.modern-input fieldset {
  border-color: #e2e8f0 !important;
  border-radius: 10px;
}

.modern-input:hover fieldset {
  border-color: #cbd5e1 !important;
}

.modern-input.v-input--is-focused fieldset {
  border-color: #2563eb !important;
  border-width: 2px !important;
}

.compact-submit-btn {
  width: 100%;
  background: #0f172a !important;
  color: white !important;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-transform: none !important;
  border-radius: 10px !important;
  height: 48px !important;
  margin-top: 4px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.compact-submit-btn:hover {
  background: #1e293b !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-arrow-submit {
  font-size: 1.25rem;
  margin-left: 8px;
  transition: transform 0.2s ease;
  display: inline-block;
}

.compact-submit-btn:hover .btn-arrow-submit {
  transform: translateX(3px);
}

@media (max-width: 960px) {
  .contact-section {
    padding: 4rem 0;
  }

  .contact-content {
    gap: 32px;
  }

  .contact-info-col {
    padding: 0 16px;
    text-align: center;
  }

  .contact-main-title {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
    margin-bottom: 12px;
  }

  .contact-description {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    font-size: 0.9375rem;
  }

  .contact-methods {
    align-items: center;
    gap: 12px;
  }

  .contact-form-col {
    padding: 24px 20px;
    min-height: auto;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .compact-submit-btn {
    height: 46px !important;
  }
}

</style>