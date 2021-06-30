<template>
<div>
    <h1 style="font-size: 200%;">Hola.</h1>
    <p style="font-weight:500; font-size:2.0em">I'm Jose Vicente Sáez, <b>jovisaib</b> for shorten.</p>

    <p>
        I'm an IoT Engineer based in Spain involved within multiple industries such as oil and gas, industry 4.0, Smart Cities, among others.
    </p>
    <p>
        Besides, my passion lies on the intersection between AI on things, urbanism and people. I always look for projects that are disruptive and positive for society (myself included).
        Let's do technology for green! 🌱🌱🌱
    </p>
    <p>Please, check my networking and stuff:</p>

    <a href="https://github.com/jovisaib" class="social_link" target="_blank">
        <img class="social_icons" alt="Github logo" src="../assets/github_logo.png" />
    </a>
    <a href="https://twitter.com/dr_isotopo" class="social_link" target="_blank">
        <img class="social_icons" alt="Twitter logo" src="../assets/twitter_logo.png" />
    </a>
    <a href="https://www.linkedin.com/in/jose-vicente-saez/" class="social_link" target="_blank">
        <img class="social_icons" alt="Linkedin logo" src="../assets/linkedin_logo.png" />
    </a>

    <div class="projects_content">
        <div class="divider_line"></div>
        <material-icons-viz />
        <div class="divider_line"></div>
    </div>

    <div class="projects_content">
        <div class="divider_line"></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TIRiJ0a3pFU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/ATZq6sw_N-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="divider_line"></div>
    </div>
</div>
</template>

<script>
export default {
    components: {
        MaterialIconsViz: () => import("./projects/MaterialIconsViz.vue")
    }
};
</script>

<style scoped>
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

.social_link {
    margin-right: 9px;
}

.social_icons {
    display: inline-block;
    width: 22px;
}
</style>
