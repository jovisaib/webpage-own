<template>
    <div>
        <v-app-bar app color="transparent" class="blurred-nav" flat>
            <v-container>
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-btn text class="nav-link">Process</v-btn>
                        <v-btn text class="nav-link">Benefits</v-btn>
                        <v-btn text class="nav-link">Services</v-btn>
                        <v-btn text class="nav-link">Pricing</v-btn>
                        <v-btn text class="nav-link">About me</v-btn>
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
                        I help businesses like yours harness the power of AI to boost productivity, drive revenue growth, and dominate your market. 
                        Ready to transform your business? Book a call with me today or drop me an email to get started.
                    </p>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-5">
                <v-btn class="consultation-btn" @click="bookConsultation">Book a Consultation</v-btn>
            </v-row>
        </v-container>
        
        <v-container class="pa-7">
            <div class="senja-embed" data-id="eb95ccf6-f2ad-4f0d-a0b4-d5e7932beede" data-mode="shadow" data-lazyload="false"></div>
        </v-container>


        <h1 class="text-center">About Me</h1>


        <v-container class="pa-7">
            <v-row>
                <v-col cols="12" lg="4" sm="6" xs="12">
                    <v-hover v-slot="{ hover }">
                        <v-card @click="setupDialog('dmx')" :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }"
                            class="pa-2 cursor-pointer light-green accent-1 rounded-xl">
                            <v-card-title class="text-h5">
                                GO DMX GO
                            </v-card-title>

                            <v-card-subtitle class="font-weight-bold body-1">
                                <v-row align="center">
                                    <v-col cols="3">
                                        <div class="emoji-style text-center">🏢</div>
                                    </v-col>
                                    <v-col cols="9">
                                        <p class="pl-3 ml-7">A lightweight library writen in Go for DMX512, standard for
                                            digital communication
                                            networks commonly used to control lighting and effects.</p>
                                    </v-col>
                                </v-row>
                            </v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="4" sm="6" xs="12">
                    <v-hover v-slot="{ hover }">
                        <v-card @click="setupDialog('workshop')" :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }"
                            class="pa-2 cursor-pointer font-weight-bold light-green accent-1 rounded-xl">
                            <v-card-title class="text-h5">
                                CLAP O' METER
                            </v-card-title>

                            <v-card-subtitle class="font-weight-bold body-1">
                                <v-row align="center">
                                    <v-col cols="3">
                                        <div class="emoji-style text-center">👏</div>
                                    </v-col>
                                    <v-col cols="9">
                                        <p class="pl-3 ml-7">Clap classifier for embedded systems.</p>
                                    </v-col>
                                </v-row>
                            </v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="4" sm="6" xs="12">
                    <v-hover v-slot="{ hover }">
                        <v-card @click="setupDialog('talks')" :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }"
                            class="font-weight-bold cursor-pointer pa-4 light-green accent-1 rounded-xl">
                            <v-card-title class="text-h5">
                                TINYML TALKS
                            </v-card-title>

                            <v-card-subtitle class="font-weight-bold body-1">
                                <v-row align="center">
                                    <v-col cols="3">
                                        <div class="emoji-style text-center">🤖</div>
                                    </v-col>
                                    <v-col cols="9">
                                        <p class="pl-3 ml-7">Talk at machine learning Spain showing the state of the art
                                            for
                                            TinyML
                                            (Spanish).</p>
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
                            <v-icon>mdi-close</v-icon>
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
        bookConsultation() {
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
</style>