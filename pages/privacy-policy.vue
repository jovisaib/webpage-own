<template>
  <div class="privacy-policy page-content">
    <div class="content">
      <h1>Privacy Policy</h1>
      <div class="content-sections">
        <section>
          <h2>1. Introduction</h2>
          <p>Last updated: {{ currentDate }}</p>
          <p>This Privacy Policy describes how we collect, use, process, and disclose your information across our website.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information you provide directly to us when you:</p>
          <ul>
            <li>Browse our website</li>
            <li>Contact us through our contact forms</li>
            <li>Subscribe to our newsletter (if applicable)</li>
          </ul>
        </section>

        <section>
          <h2>3. Use of Personal Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments and questions</li>
            <li>Send you technical notices and updates</li>
            <li>Analyze usage patterns to improve user experience</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Storage and Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
        </section>

        <section>
          <h2>5. Your Rights Under GDPR</h2>
          <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:hello@allometrik.com">hello@allometrik.com</a></p>
          <p>Allometrik<br/>Spain</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy - Allometrik',
  meta: [
    { name: 'description', content: 'Privacy Policy for Allometrik. Learn how we collect, use, and protect your personal information.' }
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

