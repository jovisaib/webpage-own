<template>
<div style="text-align:center; width:100%;">
    <div class="githubcard">
        <a href="https://github.com/jovisaib/godmxgo">
            <img src="https://gh-card.dev/repos/jovisaib/godmxgo.svg" />
        </a>
    </div>

    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TIRiJ0a3pFU?controls=0&showinfo=0&modestbranding=1&autohide=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ATZq6sw_N-U?controls=0&showinfo=0&modestbranding=1&autohide=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
</template>

<script>
export default {
    mounted() {}
};
</script>

<style scoped>
.githubcard {
    width: 100%;
    height: 100%;
    max-width: 380px;
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
