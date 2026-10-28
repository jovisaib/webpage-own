<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Terms of Service — Allometrik',
  description: 'Terms of use for allometrik.com and the professional services offered by Allometrik Consulting FZCO.',
})

const updated = '28 October 2026'
</script>

<template>
  <article>
    <PageHero
      eyebrow="Legal"
      lede="The terms that govern use of allometrik.com and, unless a signed statement of work says otherwise, how we talk about our professional services."
    >
      Terms of Service
    </PageHero>

    <section class="section section--flush-top">
      <div class="container container--narrow prose">
        <p class="legal-meta">Last updated {{ updated }}</p>

        <h2>1. Agreement</h2>
        <p>
          These terms are issued by <strong>{{ site.legalName }}</strong> (“Allometrik”, “we”, “us”). By using this website you agree to them. Paid engineering, training or advisory work is governed by a separate NDA, master services agreement and statement of work. If those documents conflict with this page, the signed documents win.
        </p>

        <h2>2. The website</h2>
        <p>
          This site describes Allometrik’s production AI engineering practice. Content is provided for general information. It is not legal, compliance or investment advice, and it is not an offer to perform work until we both sign a statement of work.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Copy, scrape or republish substantial parts of the site for a competing commercial purpose</li>
          <li>Attempt to probe, interrupt or reverse engineer the site or any linked booking or form service</li>
          <li>Misrepresent an affiliation with Allometrik</li>
          <li>Remove proprietary notices from materials we publish</li>
        </ul>

        <h2>3. Professional services</h2>
        <p>
          Case studies, metrics and client names on this site describe work delivered under contract. Some engagements are anonymised at the client’s request. Results depend on the client’s data, systems and operators; past metrics are not a guarantee of future performance.
        </p>
        <p>
          Unless a statement of work says otherwise, you own the code, prompts, evaluation suites and infrastructure-as-code we produce for you. We do not use your data to train models. Architectures are designed to stay model-agnostic.
        </p>

        <h2>4. Consultations and forms</h2>
        <p>
          Discovery calls and the website form are invitations to talk, not a retained engagement. Do not send secrets, production credentials or special-category personal data through the public form. Use an NDA and a secure channel once we are engaged.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The site is provided “as is”. To the fullest extent permitted by law we disclaim implied warranties of merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the site is uninterrupted, error-free or free of harmful components.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          We are not liable for indirect, incidental, special, consequential or lost-profit damages arising from use of this website. For paid work, liability is as set in the governing MSA. Nothing in these terms limits liability that cannot be limited under applicable law.
        </p>

        <h2>7. Third-party links</h2>
        <p>
          Links to Calendly, publications, research hosts and social networks are provided for convenience. We are not responsible for their content or practices. Use of those sites is at your own risk and under their terms.
        </p>

        <h2>8. Changes</h2>
        <p>
          We may update these terms from time to time. The “Last updated” date will change. Continued use of the site after an update constitutes acceptance of the revised terms.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These website terms are governed by the laws of the United Arab Emirates. Courts of Dubai have exclusive jurisdiction over disputes arising from use of this site, without prejudice to mandatory consumer protections that may apply in your country of residence.
        </p>

        <h2>10. Contact</h2>
        <p>
          {{ site.legalName }}<br />
          Dubai, United Arab Emirates · European engineering &amp; delivery from Spain<br />
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </p>
      </div>
    </section>
  </article>
</template>

<style scoped>
.legal-meta {
  margin-bottom: 2.2em;
  font-size: 14px;
  color: var(--text-3);
}
</style>
