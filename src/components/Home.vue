<template>
  <div>
    <h1>Hola.</h1>
    <p style="font-weight:500; font-size:2.0em">I'm Jose Vicente Sáez, jovisaib for shorten.</p>

    <a href="https://github.com/jovisaib" class="social_link" target="_blank">
      <img class="social_icons" alt="Github logo" src="../assets/github_logo.png" />
    </a>
    <a href="https://twitter.com/dr_isotopo" class="social_link" target="_blank">
      <img class="social_icons" alt="Twitter logo" src="../assets/twitter_logo.png" />
    </a>
    <a href="https://www.linkedin.com/in/jose-vicente-s%C3%A1ez-ib%C3%A1%C3%B1ez-43ab29a7" class="social_link" target="_blank">
      <img class="social_icons" alt="Linkedin logo" src="../assets/linkedin_logo.png" />
    </a>

    <p>
      I'm a engineer and designer involved within the lift industry, my attention lies on the
      intersection between data visualization, human/computer interaction and Machine Learning.
    </p>
    <p>Please, check this out.</p>

    <div id="projects_content">
      <div class="divider_line"></div>
      <material-icons-viz />
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
a {
  color: #42b983;
}

#projects_content {
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
