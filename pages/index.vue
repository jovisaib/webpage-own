<template>
  <div class="home">
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="5000"
    >
      {{ snackbar.text }}
    </v-snackbar>

    <!-- HERO SECTION -->
    <v-container fluid class="hero-section px-0">
      <div class="hero-background">
        <div class="hero-grid"></div>
        <div class="hero-glow"></div>
      </div>
      <v-row align="center" justify="center" class="hero-content ma-0">
        <v-col cols="12" lg="11" class="pa-0">
          <v-container>
            <v-row align="center" class="hero-row">
              <v-col cols="12" md="7" class="hero-left">
                <div class="hero-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-text">Trusted by Fortune 500 & Top 10 EU Legal Firms</span>
                </div>

                <h1 class="hero-title">
                  AI Systems That<br>
                  <span class="gradient-text">Ship to Production</span>
                </h1>

                <p class="hero-subtitle">
                  Custom AI agents and document intelligence systems that replace manual work and redundant SaaS. Built for enterprise compliance. Deployed in weeks, not months.
                </p>

                <div class="hero-stats">
                  <div class="hero-stat">
                    <span class="stat-number">2-4</span>
                    <span class="stat-label">weeks to deploy</span>
                  </div>
                  <div class="hero-stat">
                    <span class="stat-number">1000s</span>
                    <span class="stat-label">docs processed/month</span>
                  </div>
                  <div class="hero-stat">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">professionals trained</span>
                  </div>
                </div>

                <div class="cta-container">
                  <v-btn
                    href="https://calendly.com/jovisaib/introcall"
                    class="primary-cta"
                    target="_blank"
                    elevation="0"
                    large
                  >
                    <span>Book a Free Consultation</span>
                    <span class="cta-arrow">→</span>
                  </v-btn>
                  <span class="cta-note">30 min · Get your automation roadmap</span>
                </div>
              </v-col>

              <v-col cols="12" md="5" class="hero-right d-none d-md-flex">
                <div class="hero-visual-card">
                  <div class="visual-header">
                    <div class="visual-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span class="visual-title">agent_status.live</span>
                  </div>
                  <div class="visual-content">
                    <div class="agent-row">
                      <span class="agent-icon-small">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      </span>
                      <span class="agent-name">Document Agent</span>
                      <span class="agent-status active">Processing 847 docs</span>
                    </div>
                    <div class="agent-row">
                      <span class="agent-icon-small">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                      </span>
                      <span class="agent-name">Compliance Agent</span>
                      <span class="agent-status active">Audit ready</span>
                    </div>
                    <div class="agent-row">
                      <span class="agent-icon-small">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      </span>
                      <span class="agent-name">Extraction Agent</span>
                      <span class="agent-status active">99.2% accuracy</span>
                    </div>
                    <div class="visual-divider"></div>
                    <div class="visual-metrics">
                      <div class="metric">
                        <span class="metric-value">↓ 85%</span>
                        <span class="metric-label">manual work</span>
                      </div>
                      <div class="metric">
                        <span class="metric-value">↑ 10x</span>
                        <span class="metric-label">throughput</span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <!-- LOGOS SECTION -->
    <v-container fluid class="logos-section">
      <div class="logos-label">Trusted by enterprises across 10+ countries</div>
      <div class="logos-scroll-container">
        <div class="logos-scroll-wrapper">
          <div class="logos-scroll-track">
            <div class="logo-item" v-for="i in 8" :key="`logo-1-${i}`">
              <img
                :src="`/company-logo-${i}.png`"
                :alt="`Company ${i}`"
                class="company-logo"
              />
            </div>
            <div class="logo-item" v-for="i in 8" :key="`logo-2-${i}`">
              <img
                :src="`/company-logo-${i}.png`"
                :alt="`Company ${i}`"
                class="company-logo"
              />
            </div>
          </div>
        </div>
        <div class="scroll-fade scroll-fade-left"></div>
        <div class="scroll-fade scroll-fade-right"></div>
      </div>
    </v-container>

    <!-- INTEGRATIONS SECTION -->
    <v-container fluid class="integrations-section">
      <v-row justify="center" class="text-center mb-8">
        <v-col cols="12" md="8">
          <div class="integrations-badge">
            <svg class="badge-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>
            <span>Integrations</span>
          </div>
          <h2 class="integrations-title">
            Deep integration with your<br>existing stack
          </h2>
        </v-col>
      </v-row>

      <div class="integrations-scroll-container">
        <div class="integrations-scroll-track">
          <div class="integration-logo" v-for="integration in integrations" :key="`a-${integration.name}`" :title="integration.name">
            <img :src="`/integrations/${integration.file}`" :alt="integration.name" />
          </div>
          <div class="integration-logo" v-for="integration in integrations" :key="`b-${integration.name}`" :title="integration.name">
            <img :src="`/integrations/${integration.file}`" :alt="integration.name" />
          </div>
        </div>
        <div class="scroll-fade scroll-fade-left"></div>
        <div class="scroll-fade scroll-fade-right"></div>
      </div>
    </v-container>

    <!-- PAIN POINTS SECTION -->
    <v-container fluid class="pain-section" id="pain-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <h2 class="section-title">
            Stop Spending,<br>
            <span class="gradient-text-accent">Start Automating</span>
          </h2>
          <p class="section-subtitle">
            Manual processes and subscription bloat are operational headaches. Replace them with specialized AI systems.
          </p>
        </v-col>
      </v-row>

      <v-row class="pain-grid" justify="center">
        <v-col cols="12" sm="6" lg="3" v-for="(pain, index) in painPoints" :key="index" class="pain-col">
          <v-hover v-slot="{ hover }">
            <v-card class="pain-card" :class="{ 'on-hover': hover }" elevation="0">
              <div class="pain-icon-wrapper">
                <svg v-if="pain.icon === 'fire'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                  <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                </svg>
                <svg v-else-if="pain.icon === 'money'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <svg v-else-if="pain.icon === 'tool'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="pain-title">{{ pain.title }}</h3>
              <p class="pain-description">{{ pain.description }}</p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- SERVICES / AGENTS SECTION -->
    <v-container fluid class="services-section" id="services-section">
      <v-row class="px-4 px-md-6 d-flex flex-column align-center text-center ma-0">
        <v-col cols="12" class="d-flex flex-column align-center mb-12 pa-0">
          <div class="text-center">
            <div class="section-label mb-4">What we build</div>
            <h2 class="section-title">
              A Specialized System<br>
              <span class="gradient-text-accent">For Every Cost Sink</span>
            </h2>
            <p class="section-subtitle">
              From document processing to compliance automation—custom-built for your specific workflows, data, and industry requirements.
            </p>
          </div>
        </v-col>

        <v-col cols="12">
          <v-row class="service-grid justify-center">
            <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" lg="3" class="service-col">
              <v-hover v-slot="{ hover }">
                <v-card class="service-card" :class="{ 'on-hover': hover }" elevation="0">
                  <div class="service-icon-wrapper">
                    <svg v-if="service.icon === 'document'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <svg v-else-if="service.icon === 'compliance'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <svg v-else-if="service.icon === 'agent'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    </svg>
                  </div>
                  <h3 class="service-title">{{ service.title }}</h3>
                  <p class="service-description">{{ service.description }}</p>
                  <div class="service-tag">{{ service.tag }}</div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- AGENTS BENTO SECTION -->
    <v-container fluid class="agents-section" id="agents-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <div class="section-label mb-4">Example agents</div>
          <h2 class="section-title">
            A Specialized Agent for<br>
            <span class="gradient-text-accent">Every Cost Sink</span>
          </h2>
          <p class="section-subtitle">
            From document processing to customer support—our AI agents are custom-built for your specific workflows, data, and industry requirements. These are just examples: let us build you what you need.
          </p>
        </v-col>
      </v-row>

      <v-row class="agents-bento" justify="center">
        <!-- Voice Agent - Large Card -->
        <v-col cols="12" md="6" class="agent-col">
          <div class="agent-card agent-card-large">
            <div class="agent-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <h3 class="agent-title">The AI Voice Agent</h3>
            <p class="agent-subtitle">Service Desks & Call Centers</p>
            <div class="agent-divider"></div>
            <p class="agent-description">
              Answers, triages, schedules, and resolves FAQs with high accuracy, cutting support spend significantly and recapturing missed revenue. Handles routine inquiries 24/7.
            </p>
            <div class="agent-visual voice-visual">
              <div class="voice-badge">Speech Recognition</div>
              <div class="voice-wave">
                <div class="wave-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </div>
                <div class="wave-bars">
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Automation Agent - Large Card -->
        <v-col cols="12" md="6" class="agent-col">
          <div class="agent-card agent-card-large">
            <div class="agent-icon-badge automation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="agent-title">The Automation Agent</h3>
            <p class="agent-subtitle">Finance & Back Office</p>
            <div class="agent-divider"></div>
            <p class="agent-description">
              Reconciles invoices, cross-checks GL accounts, and updates dashboards overnight. Saving organizations significant costs and returning staff hours each week.
            </p>
            <div class="agent-visual chat-visual">
              <div class="chat-message user">
                <span class="chat-avatar">Co</span>
                <div class="chat-content">
                  <span class="chat-name">Cole</span>
                  <span class="chat-time">2:34 PM</span>
                  <p>Hi, I need help with a refund for my order.</p>
                </div>
              </div>
              <div class="chat-message agent">
                <span class="chat-avatar">AI</span>
                <div class="chat-content">
                  <span class="chat-name">Agent</span>
                  <span class="chat-time">8:15 AM</span>
                  <p>I've reviewed your order #SC-89432 and processed a full refund of $127.49.</p>
                </div>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Document Agent - Medium Card -->
        <v-col cols="12" md="6" class="agent-col">
          <div class="agent-card">
            <div class="agent-icon-badge document">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="agent-title">The Document Agent</h3>
            <p class="agent-subtitle">Document Processing & OCR</p>
            <div class="agent-divider"></div>
            <p class="agent-description">
              Extracts, validates, and processes thousands of documents monthly with 99%+ accuracy. Financial statements, contracts, invoices—any format.
            </p>
            <div class="agent-metrics">
              <div class="metric-pill">
                <span class="metric-value">99%+</span>
                <span class="metric-label">Accuracy</span>
              </div>
              <div class="metric-pill">
                <span class="metric-value">1000s</span>
                <span class="metric-label">Docs/month</span>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Conversion Agent - Medium Card -->
        <v-col cols="12" md="6" class="agent-col">
          <div class="agent-card">
            <div class="agent-icon-badge conversion">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h3 class="agent-title">The Conversion Agent</h3>
            <p class="agent-subtitle">E-commerce & Online Portals</p>
            <div class="agent-divider"></div>
            <p class="agent-description">
              Engages hesitant shoppers in real time with smart recommendations and instant Q&A, lifting conversions and average order value significantly.
            </p>
            <div class="agent-visual chart-visual">
              <div class="chart-container">
                <svg viewBox="0 0 200 80" class="chart-svg">
                  <path d="M0,60 Q30,55 50,50 T100,35 T150,25 T200,10" stroke="url(#chartGradient)" stroke-width="2" fill="none"/>
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#3b82f6"/>
                      <stop offset="100%" style="stop-color:#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div class="chart-badges">
                  <span class="chart-badge green">Revenue +30%</span>
                  <span class="chart-badge blue">Avg Order +25%</span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="agents-cta">
        <v-btn
          href="https://calendly.com/jovisaib/introcall"
          class="agents-cta-btn"
          target="_blank"
          elevation="0"
        >
          <span>Book a Free Consultation</span>
        </v-btn>
      </div>
    </v-container>

    <!-- INDUSTRIES SECTION -->
    <v-container fluid class="industries-section" id="industries-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <div class="section-label mb-4">Industries</div>
          <h2 class="section-title">
            Built for<br>
            <span class="gradient-text-accent">Your Compliance Requirements</span>
          </h2>
          <p class="section-subtitle">
            Every industry has different regulatory and workflow complexities. We build for yours specifically.
          </p>
        </v-col>
      </v-row>

      <v-row class="industries-grid" justify="center">
        <v-col cols="12" sm="6" md="3" v-for="(industry, index) in industries" :key="index" class="industry-col">
          <div class="industry-card">
            <div class="industry-icon-wrapper">
              <svg v-if="industry.icon === 'legal'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
              </svg>
              <svg v-else-if="industry.icon === 'finance'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <svg v-else-if="industry.icon === 'government'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h3 class="industry-name">{{ industry.name }}</h3>
            <p class="industry-description">{{ industry.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- RESULTS / TESTIMONIALS SECTION -->
    <v-container fluid class="results-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <div class="section-label mb-4">Results</div>
          <h2 class="section-title">
            Results You<br>
            <span class="gradient-text-accent">Can Bank On</span>
          </h2>
          <p class="section-subtitle">
            While most companies debate AI strategy, smart operators are already cutting operational costs and scaling without the headcount bloat.
          </p>
        </v-col>
      </v-row>

      <v-row class="results-grid" justify="center">
        <v-col cols="12" md="4" v-for="(result, index) in results" :key="index" class="result-col">
          <div class="result-card">
            <div class="result-badge">{{ result.badge }}</div>
            <h3 class="result-title">{{ result.title }}</h3>
            <p class="result-description">{{ result.description }}</p>
            <div class="result-metric">
              <span class="metric-highlight">{{ result.metric }}</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Testimonials Widget -->
      <v-container class="pa-7 mt-8">
        <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
      </v-container>
    </v-container>

    <!-- PROCESS SECTION -->
    <v-container fluid class="process-section" id="process-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <div class="section-label mb-4">How it works</div>
          <h2 class="section-title">
            From Analysis to<br>
            <span class="gradient-text-accent">Automation in Weeks</span>
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

      <div class="process-guarantee">
        <span class="guarantee-text">✓ Done in 2-4 weeks — Production ready</span>
      </div>
    </v-container>

    <!-- CASE STUDIES SECTION -->
    <v-container fluid class="case-studies-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <div class="section-label mb-4">Selected work</div>
          <h2 class="section-title">
            Production Systems<br>
            <span class="gradient-text-accent">That Deliver</span>
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
                <div class="project-category-badge">
                  {{ project.category }}
                </div>
                <div class="project-text-content">
                  <h3 class="project-card-title">
                    {{ project.title }}
                  </h3>
                  <p class="project-card-description">
                    {{ project.description }}
                  </p>
                </div>
                <div class="project-image-container">
                  <div class="image-frame">
                    <img
                      :src="`/${project.img}`"
                      class="project-showcase-image"
                      :alt="project.title"
                    />
                  </div>
                </div>
              </div>
            </div>
          </v-hover>
        </div>
      </v-container>
    </v-container>

    <!-- TRAINING SECTION -->
    <v-container fluid class="training-section" id="training-section">
      <v-row justify="center" align="center" class="training-content">
        <v-col cols="12" md="6" class="training-left">
          <div class="section-label mb-4">AI Training</div>
          <h2 class="section-title text-left">
            500+ Professionals<br>
            <span class="gradient-text-accent">Trained in AI</span>
          </h2>
          <p class="training-description">
            We don't just build systems—we transfer knowledge. Our training programs have equipped teams across enterprises, academies, and institutions with production-ready AI skills.
          </p>
          
          <div class="training-partners">
            <div class="partner-label">Training partners include:</div>
            <div class="partner-list">
              <span class="partner-tag">Saudi Digital Academy</span>
              <span class="partner-tag">Nuclio Digital School</span>
              <span class="partner-tag">IronHack</span>
              <span class="partner-tag">Arol.dev</span>
              <span class="partner-tag">Aguas de Barcelona</span>
              <span class="partner-tag">+ many more</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="training-right d-none d-md-flex">
          <div class="training-stats-grid">
            <div class="training-stat-card">
              <div class="stat-big">500+</div>
              <div class="stat-desc">Professionals Trained</div>
            </div>
            <div class="training-stat-card">
              <div class="stat-big">10+</div>
              <div class="stat-desc">Partner Institutions</div>
            </div>
            <div class="training-stat-card">
              <div class="stat-big">3</div>
              <div class="stat-desc">Continents Reached</div>
            </div>
            <div class="training-stat-card">
              <div class="stat-big">Director</div>
              <div class="stat-desc">AI Master's Program</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- FAQ SECTION -->
    <v-container fluid class="faq-section" id="faq-section">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <h2 class="section-title">
            Frequently Asked<br>
            <span class="gradient-text-accent">Questions</span>
          </h2>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="faq-list">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="faq-item"
              :class="{ 'faq-open': faq.open }"
              @click="toggleFaq(index)"
            >
              <div class="faq-question">
                <span>{{ faq.question }}</span>
                <span class="faq-toggle">{{ faq.open ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="faq.open">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- FINAL CTA SECTION -->
    <v-container fluid class="final-cta-section">
      <div class="cta-glow"></div>
      <v-row justify="center" class="text-center">
        <v-col cols="12" md="8">
          <h2 class="cta-title">
            Ready to Replace Your<br>
            <span class="gradient-text-accent">Most Expensive Process?</span>
          </h2>
          <p class="cta-description">
            Book a 30-minute strategy call and walk away with a custom automation roadmap showing exactly which workflows to target first.
          </p>
          
          <v-btn
            href="https://calendly.com/jovisaib/introcall"
            class="final-cta-btn"
            target="_blank"
            elevation="0"
            x-large
          >
            <span>Book a Free Consultation</span>
            <span class="cta-arrow">→</span>
          </v-btn>

          <div class="cta-trust-badges">
            <span class="trust-badge">✓ Fortune 500 clients</span>
            <span class="trust-badge">✓ Top 10 EU Legal Firms</span>
            <span class="trust-badge">✓ Public institutions</span>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- CONTACT SECTION -->
    <v-container fluid class="contact-section" id="contact-section">
      <v-row justify="center" class="contact-wrapper">
        <v-col cols="12" lg="10">
          <v-row class="contact-content">
            <v-col cols="12" md="5" class="contact-info-col">
              <div class="section-label mb-4">Get in touch</div>
              <h2 class="contact-main-title">
                Let's Talk<br>
                <span class="gradient-text-accent">About Your Project</span>
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

<script setup>
// SEO Meta tags - handled by nuxt.config.ts

// Reactive data
const integrations = [
                { name: 'SAP', file: 'sap.svg' },
                { name: 'Salesforce', file: 'salesforce.svg' },
                { name: 'Oracle', file: 'oracle.svg' },
                { name: 'Microsoft', file: 'microsoft.svg' },
                { name: 'Google', file: 'google.svg' },
                { name: 'AWS', file: 'aws.svg' },
                { name: 'Azure', file: 'azure.svg' },
                { name: 'Slack', file: 'slack.svg' },
                { name: 'GitHub', file: 'github.svg' },
                { name: 'Notion', file: 'notion.svg' },
                { name: 'HubSpot', file: 'hubspot.svg' },
                { name: 'Zendesk', file: 'zendesk.svg' },
                { name: 'Zoom', file: 'zoom.svg' },
                { name: 'Jira', file: 'jira.svg' },
                { name: 'Confluence', file: 'confluence.svg' },
                { name: 'Stripe', file: 'stripe.svg' },
                { name: 'PostgreSQL', file: 'postgresql.svg' },
                { name: 'MongoDB', file: 'mongodb.svg' },
                { name: 'Snowflake', file: 'snowflake.svg' },
                { name: 'Dropbox', file: 'dropbox.svg' },
                { name: 'Airtable', file: 'airtable.svg' },
                { name: 'Trello', file: 'trello.svg' },
                { name: 'Asana', file: 'asana.svg' },
]

const painPoints = [
                {
                    icon: 'fire',
                    title: 'Manual Work Burns Cash',
                    description: 'Senior analysts copying data between systems, managers updating spreadsheets by hand, department heads playing email tag for reports that should take seconds.'
                },
                {
                    icon: 'money',
                    title: 'Hiring More is Expensive',
                    description: 'Every new client means more manual work. You need scale without the salary bloat that kills your margins.'
                },
                {
                    icon: 'tool',
                    title: 'SaaS Only Gets You 80%',
                    description: 'You\'re paying €10k-€100k annually for tools that handle fragments of your workflow. We build systems that accomplish 100%.'
                },
                {
                    icon: 'x',
                    title: 'Generic AI Fails',
                    description: 'Slick presentations crumble when they meet your actual data, compliance requirements, and workflow complexity.'
                }
]

const services = [
                {
                    icon: 'document',
                    title: 'Document Intelligence',
                    description: 'Advanced OCR and extraction for financial documents, 401k statements, contracts, and enterprise paperwork. Processing thousands of documents monthly with 99%+ accuracy.',
                    tag: 'Most Popular'
                },
                {
                    icon: 'compliance',
                    title: 'Compliance Automation',
                    description: 'Automated audit generation and regulatory documentation. Reduce manual compliance work by 85% while meeting industry standards.',
                    tag: 'Legal & Finance'
                },
                {
                    icon: 'agent',
                    title: 'Custom AI Agents',
                    description: 'Intelligent agents that integrate with your existing stack. Automate workflows, answer questions, and execute tasks autonomously.',
                    tag: 'Enterprise'
                },
                {
                    icon: 'training',
                    title: 'AI Training Programs',
                    description: 'Executive and team training on production AI. 500+ professionals trained through partnerships with leading academies worldwide.',
                    tag: 'Upskilling'
                }
]

const industries = [
                {
                    icon: 'legal',
                    name: 'Legal',
                    description: 'First-pass review, contract analysis, and compliance automation. Trusted by Top 10 EU legal firms.'
                },
                {
                    icon: 'finance',
                    name: 'Finance',
                    description: 'Document processing, 401k analysis, and automated reconciliations for banking and fintech.'
                },
                {
                    icon: 'government',
                    name: 'Government',
                    description: 'Procurement automation, citizen services, and policy brief generation for public institutions.'
                },
                {
                    icon: 'industry',
                    name: 'Industry',
                    description: 'Chemical compliance, manufacturing documentation, and supply chain intelligence.'
                }
]

const results = [
                {
                    badge: 'Fortune 500 Client',
                    title: 'Document Processing at Scale',
                    description: 'Implemented intelligent document extraction for a major financial institution. Processing thousands of complex documents monthly with automated validation.',
                    metric: '1000s of docs/month'
                },
                {
                    badge: 'Top EU Legal Firm',
                    title: 'Compliance Automation',
                    description: 'Automated audit documentation and compliance checks for one of Europe\'s largest legal practices. Reduced manual work dramatically.',
                    metric: '85% less manual work'
                },
                {
                    badge: 'Public Institution',
                    title: 'Procurement Intelligence',
                    description: 'Built procurement analysis and document processing systems for government agencies. Thousands of hours saved across multiple departments.',
                    metric: '1000s of hours saved'
                }
]

const processSteps = [
                {
                    title: 'Discover & Map',
                    description: 'We audit your most expensive manual processes and map integration points. You get a detailed ROI projection showing exactly which workflows to automate first.'
                },
                {
                    title: 'Build & Deploy',
                    description: 'We build custom systems that plug directly into your current tech stack. No platform migration. Your team keeps working while we build the automation layer.'
                },
                {
                    title: 'Launch & Scale',
                    description: 'Go live with full monitoring and support. Track cost savings, time recovered, and accuracy improvements. Scale successful automations across departments.'
                }
]

const projects = [
                {
                    title: 'Nuclio Digital School',
                    description: 'Director of the AI for Business and Innovation master\'s program. Leading curriculum design and delivering executive training on Generative AI, Machine Learning, and AI strategy.',
                    img: 'nuclio_digital_school.png',
                    category: 'Education Leadership',
                    size: 'large',
                    featured: true
                },
                {
                    title: 'ReportAlly Platform',
                    description: 'Intelligent document generation platform with conversational AI interface. Chat-powered system for creating complex PDFs: financial reports, invoices, and custom business documents.',
                    img: 'reportally.png',
                    category: 'Enterprise SaaS',
                    size: 'medium'
                },
                {
                    title: 'Comply Platform',
                    description: 'Automated audit compliance system. Multi-industry regulatory documentation that reduces manual work by 85%. AI-powered validation for chemical, manufacturing, and enterprise sectors.',
                    img: 'comply.png',
                    category: 'Compliance Automation',
                    size: 'medium'
                },
                {
                    title: 'Financial Document Processing',
                    description: 'Production OCR system processing thousands of promissory notes and financial documents for Spanish fintech. Advanced extraction with validation and compliance checks.',
                    img: 'ocr_case.jpeg',
                    category: 'Financial Services',
                    size: 'small'
                },
                {
                    title: 'Saudi Digital Academy',
                    description: 'AI training bootcamp at SDA. Intensive programs on Generative AI, AIoT for industrial applications, and enterprise AI implementation. Training next-generation leaders.',
                    img: 'saudi_digital_academy.png',
                    category: 'Executive Training',
                    size: 'medium'
                },
                {
                    title: '401k Document Intelligence',
                    description: 'Complex document extraction and analysis for retirement fund processing. Multi-format parsing with agent-based verification. Processing millions of documents with high accuracy.',
                    img: 'csv_ocr_case.jpeg',
                    category: 'Document Processing',
                    size: 'small'
                }
]

const faqs = ref([
                {
                    question: 'What do we need to get started?',
                    answer: 'Just a 30-minute discovery call. We\'ll map your current workflows, identify automation opportunities, and provide a detailed ROI projection. No technical preparation needed on your end.',
                    open: false
                },
                {
                    question: 'How long does implementation take?',
                    answer: 'Most systems are deployed in 2-4 weeks. We work in parallel with your existing operations—no disruption to your team while we build.',
                    open: false
                },
                {
                    question: 'Do we need in-house AI talent?',
                    answer: 'No. We handle everything from design to deployment to maintenance. If you want to build internal capabilities, we also offer training programs—we\'ve trained 500+ professionals.',
                    open: false
                },
                {
                    question: 'What about data security and compliance?',
                    answer: 'Enterprise-grade security is non-negotiable. We sign NDAs and MSAs, never use your data for training, and build systems that meet your specific regulatory requirements (GDPR, industry-specific compliance, etc.).',
                    open: false
                },
                {
                    question: 'What industries do you work with?',
                    answer: 'We have production systems in legal, finance, government, manufacturing, hospitality, and more. Our clients include Fortune 500 companies, Top 10 EU legal firms, and public institutions across 10+ countries.',
                    open: false
                }
])

// Form state
const form = ref(null)
const formValid = ref(true)
const formLoading = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const nameRules = [
  v => !!v || 'Name is required',
  v => v.length <= 50 || 'Name must be less than 50 characters'
]

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const messageRules = [
  v => !!v || 'Message is required',
  v => v.length >= 10 || 'Message must be at least 10 characters'
]

const snackbar = ref({
  show: false,
  text: '',
  color: 'success'
})

// Methods
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const runtimeConfig = useRuntimeConfig()

const submitForm = async () => {
  if (!form.value?.validate()) return
  
  formLoading.value = true
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: runtimeConfig.public.web3formsKey,
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
        subject: 'New Contact Form Submission - Allometrik'
      })
    })
    
    const result = await response.json()
    
    if (result.success) {
      snackbar.value = {
        show: true,
        text: 'Message sent successfully! We\'ll get back to you soon.',
        color: 'success'
      }
      form.value?.reset()
      formData.value = { name: '', email: '', message: '' }
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    snackbar.value = {
      show: true,
      text: 'Failed to send message. Please try again or contact us at hello@allometrik.com',
      color: 'error'
    }
  } finally {
    formLoading.value = false
  }
}

// Load external script on mount
onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.type = 'text/javascript'
  script.src = 'https://widget.senja.io/widget/eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede/platform.js'
  document.head.appendChild(script)
})
</script>

<style scoped>
/* ============================================
   LIGHT THEME VARIABLES
   ============================================ */
.home {
    --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
    --accent-gradient: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-tertiary: #f1f5f9;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --text-muted: #94a3b8;
    --border-color: #e2e8f0;
    --border-hover: #cbd5e1;
    --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    --card-shadow-hover: 0 10px 40px rgba(0, 0, 0, 0.08);
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero-section {
    position: relative;
    min-height: 100vh;
    background: var(--bg-primary);
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
    z-index: 0;
}

.hero-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%);
}

.hero-glow {
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    height: 70%;
    background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 60%);
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
}

.hero-row {
    min-height: 80vh;
    padding-top: 2rem;
}

.hero-left {
    padding-right: 4rem;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(139, 92, 246, 0.08);
    border: 1px solid rgba(139, 92, 246, 0.2);
    padding: 10px 18px;
    border-radius: 100px;
    margin-bottom: 32px;
}

.badge-dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
}

.badge-text {
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: -0.01em;
}

.hero-title {
    font-size: clamp(2.75rem, 7vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    margin-bottom: 24px;
}

.gradient-text,
.gradient-text-accent {
    display: inline;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 32px;
    font-weight: 400;
    max-width: 540px;
    letter-spacing: -0.01em;
}

.hero-stats {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.hero-stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
}

.stat-label {
    font-size: 0.8125rem;
    color: var(--text-muted);
    letter-spacing: -0.01em;
}

.cta-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.primary-cta {
    padding: 0 32px !important;
    height: 56px !important;
    font-weight: 600;
    font-size: 1rem !important;
    letter-spacing: -0.01em;
    text-transform: none !important;
    border-radius: 14px !important;
    background: var(--text-primary) !important;
    color: #ffffff !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.25);
}

.primary-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.3);
}

.cta-arrow {
    font-size: 1.25rem;
    margin-left: 10px;
    transition: transform 0.2s ease;
    display: inline-block;
}

.primary-cta:hover .cta-arrow {
    transform: translateX(4px);
}

.cta-note {
    font-size: 0.875rem;
    color: var(--text-muted);
    letter-spacing: -0.01em;
}

/* Hero Visual Card */
.hero-right {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-visual-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    width: 100%;
    max-width: 420px;
    overflow: hidden;
    box-shadow: var(--card-shadow-hover);
}

.visual-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
}

.visual-dots {
    display: flex;
    gap: 6px;
}

.visual-dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--border-color);
}

.visual-dots span:first-child { background: #ff5f57; }
.visual-dots span:nth-child(2) { background: #ffbd2e; }
.visual-dots span:last-child { background: #28c840; }

.visual-title {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-family: 'Monaco', 'Menlo', monospace;
}

.visual-content {
    padding: 24px 20px;
}

.agent-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 0;
    border-bottom: 1px solid var(--border-color);
}

.agent-row:last-of-type {
    border-bottom: none;
}

.agent-icon-small {
    width: 18px;
    height: 18px;
    display: inline-flex;
    flex-shrink: 0;
}

.agent-icon-small svg {
    width: 100%;
    height: 100%;
    color: #64748b;
}

.agent-name {
    flex: 1;
    font-size: 0.875rem;
    color: var(--text-primary);
    font-weight: 500;
}

.agent-status {
    font-size: 0.75rem;
    padding: 5px 12px;
    border-radius: 100px;
    background: rgba(16, 185, 129, 0.1);
    color: #059669;
    font-weight: 600;
}

.visual-divider {
    height: 1px;
    background: var(--border-color);
    margin: 20px 0;
}

.visual-metrics {
    display: flex;
    gap: 32px;
}

.metric {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.metric-value {
    font-size: 1.375rem;
    font-weight: 700;
    color: #059669;
}

.metric-label {
    font-size: 0.75rem;
    color: var(--text-muted);
}

/* ============================================
   LOGOS SECTION
   ============================================ */
.logos-section {
    background: var(--bg-primary);
    padding: 60px 0;
    border-top: 1px solid var(--border-color);
}

.logos-label {
    text-align: center;
    font-size: 0.8125rem;
    color: var(--text-muted);
    margin-bottom: 32px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 500;
}

.logos-scroll-container {
    position: relative;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
}

.logos-scroll-wrapper {
    overflow: hidden;
    padding: 20px 0;
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
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.logo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    height: 60px;
}

.company-logo {
    max-width: 120px;
    max-height: 50px;
    width: auto;
    height: auto;
    object-fit: contain;
    opacity: 0.5;
    filter: grayscale(100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-item:hover .company-logo {
    opacity: 1;
    filter: grayscale(0%);
}

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
    background: linear-gradient(to right, var(--bg-primary), transparent);
}

.scroll-fade-right {
    right: 0;
    background: linear-gradient(to left, var(--bg-primary), transparent);
}

/* ============================================
   INTEGRATIONS SECTION
   ============================================ */
.integrations-section {
    background: var(--bg-secondary);
    padding: 100px 24px;
    overflow: hidden;
}

.integrations-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    box-shadow: var(--card-shadow);
}

.badge-icon-svg {
    width: 16px;
    height: 16px;
    color: #6366f1;
}

.integrations-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
    letter-spacing: -0.03em;
}

.integrations-scroll-container {
    position: relative;
    max-width: 100%;
    margin: 40px auto 0;
    overflow: hidden;
}

.integrations-scroll-track {
    display: flex;
    align-items: center;
    gap: 20px;
    animation: scroll-integrations 60s linear infinite;
    width: max-content;
}

.integrations-scroll-track:hover {
    animation-play-state: paused;
}

@keyframes scroll-integrations {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.integration-logo {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: var(--card-shadow);
}

.integration-logo:hover {
    transform: translateY(-4px) scale(1.05);
    border-color: var(--border-hover);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.integration-logo svg,
.integration-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media (max-width: 768px) {
    .integrations-section {
        padding: 80px 16px;
    }

    .integration-logo {
        width: 52px;
        height: 52px;
        padding: 12px;
        border-radius: 14px;
    }

    .integrations-scroll-track {
        gap: 14px;
        animation-duration: 40s;
    }
}

/* ============================================
   PAIN POINTS SECTION
   ============================================ */
.pain-section {
    background: var(--bg-secondary);
    padding: 120px 24px;
}

.section-title {
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -0.03em;
}

.section-subtitle {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 24px auto 0;
}

.section-label {
    font-size: 0.8125rem;
    color: #8b5cf6;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.pain-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row !important;
}

.pain-col {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 12px;
}

@media (max-width: 1264px) {
    .pain-col {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (max-width: 600px) {
    .pain-col {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.pain-col {
    padding: 12px;
}

.pain-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 36px 28px;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--card-shadow);
}

.pain-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: var(--card-shadow-hover);
}

.pain-icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.pain-icon-wrapper svg {
    width: 24px;
    height: 24px;
    color: #6366f1;
}

.pain-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.pain-description {
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--text-secondary);
}

/* ============================================
   SERVICES SECTION
   ============================================ */
.services-section {
    background: var(--bg-primary);
    padding: 120px 24px;
}

.service-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row !important;
}

.service-col {
    display: flex;
    justify-content: center;
    padding: 12px;
    flex: 0 0 25%;
    max-width: 25%;
}

@media (max-width: 1264px) {
    .service-col {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (max-width: 600px) {
    .service-col {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.service-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 36px 28px;
    height: 100%;
    width: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: var(--card-shadow);
}

.service-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: var(--card-shadow-hover);
}

.service-icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.service-icon-wrapper svg {
    width: 24px;
    height: 24px;
    color: #6366f1;
}

.service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.service-description {
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--text-secondary);
    flex: 1;
}

.service-tag {
    display: inline-block;
    margin-top: 20px;
    padding: 6px 14px;
    background: rgba(139, 92, 246, 0.08);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #7c3aed;
    letter-spacing: 0.02em;
    width: fit-content;
}

/* ============================================
   INDUSTRIES SECTION
   ============================================ */
.industries-section {
    background: var(--bg-secondary);
    padding: 120px 24px;
}

.industries-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row !important;
}

.industry-col {
    padding: 12px;
    flex: 0 0 25%;
    max-width: 25%;
}

@media (max-width: 960px) {
    .industry-col {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (max-width: 600px) {
    .industry-col {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.industry-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--card-shadow);
}

.industry-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: var(--card-shadow-hover);
}

.industry-icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
}

.industry-icon-wrapper svg {
    width: 24px;
    height: 24px;
    color: #6366f1;
}

.industry-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
}

.industry-description {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--text-secondary);
}

/* ============================================
   AGENTS BENTO SECTION
   ============================================ */
.agents-section {
    background: var(--bg-primary);
    padding: 120px 24px;
}

.agents-bento {
    max-width: 1200px;
    margin: 0 auto;
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row !important;
}

.agent-col {
    padding: 12px;
    flex: 0 0 50%;
    max-width: 50%;
}

@media (max-width: 960px) {
    .agent-col {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.agent-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 32px;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--card-shadow);
}

.agent-card:hover {
    border-color: var(--border-hover);
    box-shadow: var(--card-shadow-hover);
}

.agent-card-large {
    min-height: 480px;
}

.agent-icon-badge {
    width: 44px;
    height: 44px;
    background: #3b82f6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.agent-icon-badge svg {
    width: 22px;
    height: 22px;
    color: white;
}

.agent-icon-badge.automation {
    background: #6366f1;
}

.agent-icon-badge.document {
    background: #8b5cf6;
}

.agent-icon-badge.conversion {
    background: #10b981;
}

.agent-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.agent-subtitle {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 16px;
}

.agent-divider {
    height: 1px;
    background: var(--border-color);
    margin-bottom: 16px;
}

.agent-description {
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--text-secondary);
    margin-bottom: 24px;
}

/* Voice Agent Visual */
.agent-visual {
    margin-top: auto;
}

.voice-visual {
    background: #0f172a;
    border-radius: 16px;
    padding: 24px;
}

.voice-badge {
    display: inline-block;
    background: #3b82f6;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 16px;
}

.voice-wave {
    display: flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(90deg, #1e293b, #334155);
    border-radius: 100px;
    padding: 12px 20px;
}

.wave-icon {
    width: 32px;
    height: 32px;
    background: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wave-icon svg {
    width: 12px;
    height: 12px;
    color: white;
}

.wave-bars {
    display: flex;
    align-items: center;
    gap: 3px;
    flex: 1;
}

.wave-bars span {
    width: 3px;
    background: #64748b;
    border-radius: 2px;
    animation: wave-animation 1s ease-in-out infinite;
}

.wave-bars span:nth-child(1) { height: 8px; animation-delay: 0s; }
.wave-bars span:nth-child(2) { height: 16px; animation-delay: 0.1s; }
.wave-bars span:nth-child(3) { height: 12px; animation-delay: 0.2s; }
.wave-bars span:nth-child(4) { height: 20px; animation-delay: 0.3s; }
.wave-bars span:nth-child(5) { height: 14px; animation-delay: 0.4s; }
.wave-bars span:nth-child(6) { height: 18px; animation-delay: 0.5s; }
.wave-bars span:nth-child(7) { height: 10px; animation-delay: 0.6s; }
.wave-bars span:nth-child(8) { height: 6px; animation-delay: 0.7s; }

@keyframes wave-animation {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.5); }
}

/* Chat Visual */
.chat-visual {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 16px;
}

.chat-message {
    display: flex;
    gap: 12px;
    padding: 12px 0;
}

.chat-message:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
}

.chat-avatar {
    width: 32px;
    height: 32px;
    background: var(--bg-tertiary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
    flex-shrink: 0;
}

.chat-message.agent .chat-avatar {
    background: #3b82f6;
    color: white;
}

.chat-content {
    flex: 1;
}

.chat-name {
    font-weight: 600;
    font-size: 0.8125rem;
    color: var(--text-primary);
    margin-right: 8px;
}

.chat-time {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.chat-content p {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-top: 4px;
    line-height: 1.5;
}

/* Metrics */
.agent-metrics {
    display: flex;
    gap: 12px;
}

.metric-pill {
    flex: 1;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px;
    text-align: center;
}

.metric-pill .metric-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    display: block;
}

.metric-pill .metric-label {
    font-size: 0.75rem;
    color: var(--text-muted);
}

/* Chart Visual */
.chart-visual {
    margin-top: 16px;
}

.chart-container {
    position: relative;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 24px;
}

.chart-svg {
    width: 100%;
    height: 80px;
}

.chart-badges {
    display: flex;
    gap: 12px;
    margin-top: 16px;
}

.chart-badge {
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
}

.chart-badge.green {
    background: rgba(16, 185, 129, 0.1);
    color: #059669;
}

.chart-badge.blue {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

/* Agents CTA */
.agents-cta {
    text-align: center;
    margin-top: 48px;
}

.agents-cta-btn {
    padding: 0 28px !important;
    height: 48px !important;
    font-weight: 600;
    font-size: 0.9375rem !important;
    letter-spacing: -0.01em;
    text-transform: none !important;
    border-radius: 12px !important;
    background: var(--text-primary) !important;
    color: #ffffff !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.agents-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);
}

@media (max-width: 960px) {
    .agents-section {
        padding: 80px 16px;
    }

    .agent-card-large {
        min-height: auto;
    }

    .agent-card {
        padding: 24px;
    }
}

/* ============================================
   RESULTS SECTION
   ============================================ */
.results-section {
    background: var(--bg-primary);
    padding: 120px 24px;
}

.results-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row !important;
}

.result-col {
    padding: 12px;
    flex: 0 0 33.333%;
    max-width: 33.333%;
}

@media (max-width: 960px) {
    .result-col {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.result-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 36px 28px;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--card-shadow);
}

.result-card:hover {
    border-color: var(--border-hover);
    box-shadow: var(--card-shadow-hover);
}

.result-badge {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #059669;
    margin-bottom: 20px;
}

.result-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.result-description {
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.result-metric {
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
}

.metric-highlight {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* ============================================
   PROCESS SECTION
   ============================================ */
.process-section {
    background: var(--bg-secondary);
    padding: 120px 24px;
}

.process-timeline {
    max-width: 1200px;
    margin: 0 auto;
    gap: 24px;
}

.process-col {
    padding: 12px;
}

.process-step-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 40px 32px;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--card-shadow);
}

.process-step-card:hover {
    border-color: var(--border-hover);
    box-shadow: var(--card-shadow-hover);
}

.process-step-number {
    font-size: 3rem;
    font-weight: 700;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 24px;
}

.process-step-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.process-step-description {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--text-secondary);
}

.process-guarantee {
    text-align: center;
    margin-top: 48px;
}

.guarantee-text {
    display: inline-block;
    padding: 14px 28px;
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 100px;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #059669;
}

/* ============================================
   CASE STUDIES SECTION
   ============================================ */
.case-studies-section {
    background: var(--bg-primary);
    padding: 120px 24px;
}

.projects-showcase-container {
    max-width: 1400px;
    margin: 0 auto;
}

.projects-masonry-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.project-card {
    position: relative;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: var(--card-shadow);
}

.project-large { grid-column: span 2; }
.project-medium { grid-column: span 2; }
.project-small { grid-column: span 1; }

.project-featured {
    border: 2px solid #8b5cf6;
}

.project-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: var(--card-shadow-hover);
}

.project-featured:hover {
    border-color: #8b5cf6;
}

.project-card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-category-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
    background: var(--bg-primary);
    color: #7c3aed;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.project-text-content {
    padding: 56px 24px 20px;
}

.project-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.project-card-description {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-secondary);
}

.project-image-container {
    flex: 1;
    padding: 0 24px 24px;
}

.image-frame {
    width: 100%;
    background: var(--bg-secondary);
    border-radius: 12px;
    padding: 20px;
    border: 1px solid var(--border-color);
    min-height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-showcase-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.3s ease;
    max-height: 200px;
}

.project-card:hover .project-showcase-image {
    transform: scale(1.03);
}

/* ============================================
   TRAINING SECTION
   ============================================ */
.training-section {
    background: var(--bg-secondary);
    padding: 120px 24px;
}

.training-content {
    max-width: 1200px;
    margin: 0 auto;
}

.training-left {
    padding-right: 48px;
}

.section-title.text-left {
    text-align: left;
}

.training-description {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 24px 0 32px;
}

.training-partners {
    margin-top: 32px;
}

.partner-label {
    font-size: 0.8125rem;
    color: var(--text-muted);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
}

.partner-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.partner-tag {
    display: inline-block;
    padding: 8px 16px;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 100px;
    font-size: 0.8125rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.training-right {
    display: flex;
    align-items: center;
    justify-content: center;
}

.training-stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 400px;
}

.training-stat-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 28px 20px;
    text-align: center;
    box-shadow: var(--card-shadow);
}

.stat-big {
    font-size: 2rem;
    font-weight: 700;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
}

.stat-desc {
    font-size: 0.8125rem;
    color: var(--text-muted);
    font-weight: 500;
}

/* ============================================
   FAQ SECTION
   ============================================ */
.faq-section {
    background: var(--bg-primary);
    padding: 120px 24px;
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.faq-item {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.faq-item:hover {
    border-color: var(--border-hover);
}

.faq-item.faq-open {
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.08);
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 28px;
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--text-primary);
}

.faq-toggle {
    font-size: 1.5rem;
    color: #8b5cf6;
    font-weight: 300;
}

.faq-answer {
    padding: 0 28px 24px;
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--text-secondary);
}

/* ============================================
   FINAL CTA SECTION
   ============================================ */
.final-cta-section {
    background: var(--bg-secondary);
    padding: 120px 24px;
    position: relative;
    overflow: hidden;
}

.cta-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 60%);
    pointer-events: none;
}

.cta-title {
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
}

.cta-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 40px;
    position: relative;
    z-index: 1;
}

.final-cta-btn {
    padding: 0 40px !important;
    height: 64px !important;
    font-weight: 600;
    font-size: 1.125rem !important;
    letter-spacing: -0.01em;
    text-transform: none !important;
    border-radius: 16px !important;
    background: var(--text-primary) !important;
    color: #ffffff !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.25);
    position: relative;
    z-index: 1;
}

.final-cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.3);
}

.cta-trust-badges {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 40px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.trust-badge {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
}

/* ============================================
   CONTACT SECTION
   ============================================ */
.contact-section {
    background: var(--bg-primary);
    padding: 120px 24px;
}

.contact-wrapper {
    max-width: 1200px;
    margin: 0 auto;
}

.contact-content {
    gap: 48px;
}

.contact-info-col {
    padding-right: 32px;
}

.contact-main-title {
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    margin-bottom: 16px;
}

.contact-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 32px;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-method-item {
    display: flex;
    align-items: center;
    gap: 16px;
}

.method-icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(139, 92, 246, 0.08);
    border: 1px solid rgba(139, 92, 246, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.method-icon {
    width: 20px;
    height: 20px;
    color: #7c3aed;
}

.method-label {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
}

.method-value {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.method-value:hover {
    color: #7c3aed;
}

.contact-form-col {
    padding: 40px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
}

.compact-form {
    width: 100%;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.modern-input {
    margin-bottom: 0;
}

.modern-input .v-input__control {
    background: var(--bg-primary);
}

.modern-input fieldset {
    border-color: var(--border-color) !important;
    border-radius: 12px;
}

.modern-input:hover fieldset {
    border-color: var(--border-hover) !important;
}

.modern-input.v-input--is-focused fieldset {
    border-color: #8b5cf6 !important;
    border-width: 2px !important;
}

.compact-submit-btn {
    width: 100%;
    background: var(--text-primary) !important;
    color: white !important;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-transform: none !important;
    border-radius: 12px !important;
    height: 52px !important;
    margin-top: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);
}

.compact-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.25);
}

.btn-arrow-submit {
    font-size: 1.25rem;
    margin-left: 8px;
    transition: transform 0.2s ease;
}

.compact-submit-btn:hover .btn-arrow-submit {
    transform: translateX(4px);
}

/* ============================================
   RESPONSIVE STYLES
   ============================================ */
@media (max-width: 1400px) {
    .projects-masonry-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .project-large,
    .project-medium {
        grid-column: span 2;
    }
    
    .project-small {
        grid-column: span 1;
    }
}

@media (max-width: 960px) {
    .hero-section {
        padding-top: 100px;
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
    
    .hero-stats {
        justify-content: center;
    }
    
    .cta-container {
        justify-content: center;
    }

    .training-left {
        padding-right: 0;
        text-align: center;
    }

    .section-title.text-left {
        text-align: center;
    }

    .partner-list {
        justify-content: center;
    }

    .contact-info-col {
        padding-right: 0;
        text-align: center;
    }

    .contact-methods {
        align-items: center;
    }
}

@media (max-width: 768px) {
    .hero-stats {
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }

    .projects-masonry-grid {
        grid-template-columns: 1fr;
    }
    
    .project-large,
    .project-medium,
    .project-small {
        grid-column: span 1;
    }

    .cta-trust-badges {
        flex-direction: column;
        gap: 12px;
    }

    .training-stats-grid {
        grid-template-columns: 1fr;
        margin-top: 40px;
    }

    .pain-section,
    .services-section,
    .industries-section,
    .results-section,
    .process-section,
    .case-studies-section,
    .training-section,
    .faq-section,
    .final-cta-section,
    .contact-section {
        padding: 80px 16px;
    }
}

/* Utility classes */
.d-none { display: none !important; }
.d-flex { display: flex !important; }
.d-md-flex { display: flex !important; }
.d-md-none { display: none !important; }

@media (max-width: 959.98px) {
    .d-md-flex { display: none !important; }
    .d-md-none { display: flex !important; }
}

@media (min-width: 960px) {
    .d-md-flex { display: flex !important; }
    .d-md-none { display: none !important; }
}
</style>
