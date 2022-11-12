<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col align="center">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/BWPah-kYNWM?t=2910s&controls=0&showinfo=0&modestbranding=1&autohide=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    mounted() { }
};
</script>

<style scoped>
.githubcard {
    width: 100%;
    height: auto;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
