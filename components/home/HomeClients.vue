<template>
  <section id="clients" class="section section--tight clients" aria-labelledby="clients-title">
    <div class="container">
      <div class="clients__head">
        <h2 id="clients-title" class="clients__title">
          Trusted by enterprises, institutions and academies across <span class="accent">10+ countries</span>
        </h2>
      </div>
      <UiLogoGrid />
    </div>
  </section>
</template>

<style scoped>
.clients {
  padding-top: clamp(56px, 7vw, 96px);
}

.clients__head {
  display: grid;
  justify-items: center;
  text-align: center;
  margin-bottom: 36px;
}

.clients__title {
  max-width: 640px;
  font-size: clamp(19px, 1.9vw, 24px);
  line-height: 1.35;
  font-weight: 450;
  letter-spacing: -0.022em;
  color: var(--text-2);
  text-wrap: balance;
}
</style>
