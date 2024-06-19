<template>
    <div>
        <v-app-bar app color="transparent" class="blurred-nav" flat>
            <v-container>
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-btn text class="nav-link" @click="scrollToSection('process-section')">Process</v-btn>
                        <v-btn text class="nav-link" @click="scrollToSection('services-section')">Services</v-btn>
                        <v-btn text class="nav-link" @click="scrollToSection('about-me-section')">About me</v-btn>
                        <v-btn text href="https://allinsync.beehiiv.com/" target="_blank" class="nav-link">Blog</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-container class="pa-7 presentation-container with-top-margin">
            <v-row class="text-center" dense>
                <v-col cols="12">
                    <h1 class="display-1 mb-4">Hey.</h1>
                    <p class="headline font-weight-light mb-4">I'm Jose.</p>

                    <p class="subheading font-weight-regular mb-5">
                        I help businesses like yours harness the power of AI and conduct R&D to boost productivity, drive revenue growth, and dominate your market. Ready to transform your business? Book a call with me today or drop me an email to get started.
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-5">
                <v-btn class="consultation-btn" href="https://calendly.com/jovisaib/main" target="_blank">Book a Consultation</v-btn>
            </v-row>
        </v-container>
        
        <v-container class="pa-7">
            <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
        </v-container>


        <h1 class="text-center" id="services-section">Services</h1>

        <v-container class="pa-7">
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-card class="pa-4 text-center service-card">
                        <v-icon class="service-icon" color="primary">fas fa-solid fa-robot</v-icon>
                        <h3>Agents and Multiagent systems</h3>
                        <p>Leverage my expertise in AI to design and implement Agent and Multiagent systems tailored to your needs. I'll help automate complex tasks, enhance decision-making, and optimize workflows to drive efficiency and innovation in your business.</p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card class="pa-4 text-center service-card">
                        <v-icon class="service-icon" color="primary">fas fa-solid fa-chalkboard-user</v-icon>
                        <h3>Teaching Emerging Technologies</h3>
                        <p>I teach teams about RAG, Agents, and other emerging technologies. With my industry experience and teaching background, I can help your team stay ahead by mastering the latest advancements in AI and technology.</p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card class="pa-4 text-center service-card">
                        <v-icon class="service-icon" color="primary">fas fa-solid fa-chess-board</v-icon>
                        <h3>AI reporting</h3>
                        <p>I offer specialized knowledge in Retrieval-Augmented Generation (RAG) to boost your AI applications. I can implement systems that combine retrieval and generation techniques, enhancing the accuracy and relevance of your AI outputs.</p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card class="pa-4 text-center service-card">
                        <v-icon class="service-icon" color="primary">fas fa-solid fa-brain</v-icon>
                        <h3>Fractional CTO</h3>
                        <p>Get top-tier CTO services on a suscription basis. Leverage expert leadership to guide your tech strategy, optimize development processes, and drive innovation without the full-time cost.</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <h1 class="text-center" id="process-section">Processs</h1>

        <v-container class="pa-7">
            <v-row class="text-center" dense>
                <v-col cols="12" sm="6" md="4">
                <v-card class="pa-4 process-card">
                    <v-icon class="process-icon" color="primary">mdi:mdi-phone</v-icon>
                    <v-card-title class="text-h5">Step 1: Free Consultation</v-card-title>
                    <p>
                    Start with a 30-minute free call to discuss your needs and goals. We'll explore how my expertise can help your business.
                    </p>
                </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <v-card class="pa-4 process-card">
                    <v-icon class="process-icon" color="primary">mdi:mdi-file-document-outline</v-icon>
                    <v-card-title class="text-h5">Step 2: Proposal</v-card-title>
                    <p>
                    Receive a tailored proposal outlining the strategy, timeline, and costs. We'll refine it together to ensure it meets your expectations.
                    </p>
                </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <v-card class="pa-4 process-card">
                    <v-icon class="process-icon" color="primary">mdi:mdi-chart-line</v-icon>
                    <v-card-title class="text-h5">Step 3: Review and Optimize</v-card-title>
                    <p>
                    After implementation, we'll review the results, gather feedback, and optimize the solutions to ensure maximum efficiency and impact.
                    </p>
                </v-card>
                </v-col>
            </v-row>
        </v-container>




        <h1 class="text-center" id="about-me-section">About Me</h1>

        <v-container class="pa-7">
            <v-row class="text-center" dense>
                <v-col cols="12">
                    <p class="subheading font-weixght-regular mb-5">
                            I'm a dynamic Independent R&D Software Engineer in Spain, known for driving innovation across
                        diverse industries. With expertise in AI, IoT, and a passion for urban planning,, I excel in taking
                        complex prototypes to production. Committed to impactful contributions, I've presented at
                        Machine Learning Spain, demonstrating my ability to transform ideas into practical solutions. I
                        thrive on embracing new challenges and seeking solutions that have a profound and positive
                        impact on society.
                    </p>
                </v-col>
            </v-row>
        </v-container>


        <v-container class="pa-7">
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <v-hover v-slot="{ hover }">
                <v-card @click="setupDialog('dmx')" :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }" class="pa-4 cursor-pointer service-card">
                    <v-card-title class="text-h5">GO DMX GO</v-card-title>
                    <v-card-subtitle class="font-weight-bold body-1">
                        <v-row align="center">
                            <v-col cols="3">
                                <div class="emoji-style text-center">🏢</div>
                            </v-col>
                            <v-col cols="9">
                                <p class="text-left">A lightweight library written in Go for DMX512, a standard for digital communication networks commonly used to control lighting and effects.</p>
                            </v-col>
                        </v-row>
                    </v-card-subtitle>
                </v-card>
            </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-hover v-slot="{ hover }">
                <v-card @click="setupDialog('workshop')" :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }" class="pa-4 cursor-pointer service-card">
                    <v-card-title class="text-h5">CLAP O' METER</v-card-title>
                    <v-card-subtitle class="font-weight-bold body-1">
                        <v-row align="center">
                            <v-col cols="3">
                                <div class="emoji-style text-center">👏</div>
                            </v-col>
                            <v-col cols="9">
                                <p class="text-left">Clap classifier for embedded systems.</p>
                            </v-col>
                        </v-row>
                    </v-card-subtitle>
                </v-card>
            </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-hover v-slot="{ hover }">
                <v-card @click="setupDialog('talks')" :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }" class="pa-4 cursor-pointer service-card">
                    <v-card-title class="text-h5">TINYML TALKS</v-card-title>
                    <v-card-subtitle class="font-weight-bold body-1">
                        <v-row align="center">
                            <v-col cols="3">
                                <div class="emoji-style text-center">🤖</div>
                            </v-col>
                            <v-col cols="9">
                                <p class="text-left">Talk at Machine Learning Spain showing the state of the art for TinyML (Spanish).</p>
                            </v-col>
                        </v-row>
                    </v-card-subtitle>
                </v-card>
            </v-hover>
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

#services-section,
#process-section,
#about-me-section {
    margin-top: 90px; /* Adjust this value as needed */
}

</style>
