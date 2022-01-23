<template>
<div>
    <h1 style="font-size: 200%;">Hola.</h1>
    <p style="font-weight:500; font-size:2.0em">I'm Jose Vicente Sáez, <b>jovisaib</b> for shorten.</p>

    <p>I am an IoT engineer currently based in Spain involved in multiple industries such as Oil and Gas, Industry 4.0 and Smart Cities, among others. I have had the opportunity to work on international projects related to those industries that have allowed me to lead projects in countries like China.</p>

    <p>In addition, my passion lies in the intersection between AI in things for present and future urbanism. I am always looking for projects that are disruptive and bring something positive for society (including myself) 🌱🌱🌱</p>

    <p>
        I strongly believe that
        <a class="normal_link" href="https://petewarden.com/2018/06/11/why-the-future-of-machine-learning-is-tiny/" target="_blank">The future of Machine Learning is Tiny</a>
        , that's why I'm very excited and involved in how TinyML is going to influence the ubiquity of AI in the next few years.
    </p>
    <p>For more info about me, you can find me on my networks and contact me directly wherever you consider 😊</p>

    <a href="https://github.com/jovisaib" class="social_link" target="_blank">
        <img class="social_icons" alt="Github logo" src="../assets/github_logo.png" />
    </a>
    <a href="https://twitter.com/jovisaib" class="social_link" target="_blank">
        <img class="social_icons" alt="Twitter logo" src="../assets/twitter_logo.png" />
    </a>
    <a href="https://www.linkedin.com/in/jose-vicente-saez/" class="social_link" target="_blank">
        <img class="social_icons" alt="Linkedin logo" src="../assets/linkedin_logo.png" />
    </a>

    <div class="projects_content">
        <div class="divider_line"></div>
        <MaterialIconsViz />
        <div class="divider_line"></div>
        <DMXShow />
        <div class="divider_line"></div>
    </div>

</div>
</template>

<script>
export default {
    components: {
        MaterialIconsViz: () => import("./projects/MaterialIconsViz.vue"),
        DMXShow: () => import("./projects/DMXShow.vue")
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

.social_link {
    margin-right: 9px;
}

.social_icons {
    display: inline-block;
    width: 22px;
}
</style>
