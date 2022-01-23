<template>
  <div id="app">
    <home />

    <div id="footer">
      © 2022 jovisaib
      <span style="vertical-align:top;">🗿</span>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0vh 10vw;
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  line-height: 1.4;
  max-width: 42em;
}

#footer {
  text-align: right;
  margin-top: 3em;
  padding: 0.5em 0;
  font-size: 0.75em;
}
</style>
