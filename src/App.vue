<template>
  <div id="app">
    <home />
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
  padding: 5vh 10vw;
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  line-height: 1.4;
  max-width: 40em;
}
</style>
