<template>
    <div>


        <v-container>
            <v-row class="text-justify" dense>
                <v-col cols="12">
                    <h1 style="font-size: 200%;">Hola.</h1>
                    <p style="font-weight:500; font-size:2.0em">I'm Jose Vicente Sáez, <b>jovisaib</b> for shorten.</p>

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
                        (including myself) 🌱🌱🌱</p>

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
            <v-row dense>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-hover v-slot="{ hover }">
                        <v-card :elevation="hover ? 10 : 2" :class="{ 'on-hover': hover }" class="rounded-xl">
                            <v-card-title class="text-h5">
                                GO DMX GO
                            </v-card-title>

                            <v-card-subtitle class="body-1 text-justify">
                                <p>A lightweight library writen in Go for DMX512, a standard for digital communication
                                    networks that are commonly used to control lighting and effects.</p>
                            </v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-hover v-slot="{ hover }">
                        <v-card :elevation="hover ? 10 : 2" :class="{ 'on-hover': hover }" class="rounded-xl">
                            <v-card-title class="text-h5">
                                CLAP O' METER
                            </v-card-title>

                            <v-card-subtitle class="body-1 text-justify">
                                <p>Clap classifier for embedded systems.</p>
                            </v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-hover v-slot="{ hover }">
                        <v-card :elevation="hover ? 10 : 2" :class="{ 'on-hover': hover }" class="rounded-xl">
                            <v-card-title class="text-h5">
                                TINYML TALKS
                            </v-card-title>

                            <v-card-subtitle class="body-1 text-justify">
                                <p>Talk at machine learning Spain showing the state of the art for TinyML (Spanish).</p>
                            </v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>

        <div class="projects_content">
            <MaterialIconsViz />
        </div>

    </div>
</template>

<script>
export default {
    components: {
        MaterialIconsViz: () => import("./projects/MaterialIconsViz.vue"),
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

.normal_link:after {
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

.divider_line {
    background-color: gray;
    display: block;
    height: 1px;
    width: 100%;
    border: 0;
    margin-bottom: 8px;
    margin-top: 8px;
    opacity: 0.3;
}
</style>
