<template>
  <div class="terms-of-service page-content">
    <div class="content">
      <h1>Terms of Service</h1>
      <div class="content-sections">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>Last updated: {{ currentDate }}</p>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>
          <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer</h2>
          <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section>
          <h2>4. Limitations</h2>
          <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
        </section>

        <section>
          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.</p>
        </section>

        <section>
          <h2>6. Links</h2>
          <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>
        </section>

        <section>
          <h2>7. Modifications</h2>
          <p>We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Spain and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </section>

        <section>
          <h2>9. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>Email: <a href="mailto:hello@allometrik.com">hello@allometrik.com</a></p>
          <p>Allometrik<br/>Spain</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Terms of Service - Allometrik',
  meta: [
    { name: 'description', content: 'Terms of Service for Allometrik. Read our terms and conditions for using our website and services.' }
  ]
})

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<style scoped>
.page-content {
  padding-top: 120px;
  min-height: calc(100vh - 200px);
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 4rem;
}

.content {
  line-height: 1.6;
}

section {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.8rem;
  margin: 1.5rem 0;
  color: #34495e;
}

ul {
  padding-left: 2rem;
  margin: 1rem 0;
}

li {
  margin: 0.5rem 0;
}

a {
  color: #1976D2;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #1565C0;
  text-decoration: underline;
}

.content-sections {
  margin-top: 2rem;
}
</style>

