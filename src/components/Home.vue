<template>
    <div>


        <v-container class="pa-7">
            <v-row class="text-justify" dense>
                <v-col cols="12">
                    <h1 class="text-h1">Hola.</h1>
                    <p style="font-weight:300; font-size:2.0em">I'm Jose Vicente Sáez, <b>jovisaib</b> for shorten.</p>

                    <p>I'm an R&D Software Engineer currently based in Madrid, Spain, I've been involved in multiple
                        industries such
                        as Oil and Gas, Industry 4.0 and Smart Cities, among others. I have had the opportunity to work
                        on
                        international projects related to those industries that have allowed me to lead projects in
                        countries like
                        China.</p>

                    <p>In addition, my passion lies in the intersection between AI and IoT (AIoT) for the present and
                        future of
                        urbanism. I'm always looking for projects that are disruptive and bring something positive for
                        society
                        (including myself) 🌱</p>

                    <p>
                        I strongly believe that
                        <a class="normal_link"
                            href="https://petewarden.com/2018/06/11/why-the-future-of-machine-learning-is-tiny/"
                            target="_blank">The future of Machine Learning is Tiny</a>
                        , that's why I'm very excited and involved in how TinyML is going to influence the ubiquity of
                        AI in the
                        next few years.
                    </p>

                </v-col>
            </v-row>
        </v-container>

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


        <div class="projects_content">
            <MaterialIconsViz />
        </div>

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
        }
    }
};
</script>

<style scoped>
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
