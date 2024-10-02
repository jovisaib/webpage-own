<template>
  <v-container class="with-top-margin blog-post-container">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <meta itemprop="datePublished" :content="blogPost.date">
      <meta itemprop="dateModified" :content="blogPost.lastModified">
      <meta itemprop="author" content="Jose Vicente Sáez Ibáñez">
      <h1 class="blog-post-title" itemprop="headline">{{ blogPost.title }}</h1>
      <div class="blog-post-meta">
        <span>Published on: {{ formatDate(blogPost.date) }}</span>
        <span v-if="blogPost.category">Category: {{ blogPost.category }}</span>
      </div>
      <div v-html="renderedContent" class="blog-post-content" itemprop="articleBody"></div>
      <div class="blog-post-tags" v-if="blogPost.tags && blogPost.tags.length">
        <strong>Tags:</strong>
        <span v-for="tag in blogPost.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </article>
  </v-container>

  <v-container >
    <v-row>
      <v-col cols="12">
        <v-card class="consultation-card" color="primary" dark>
          <v-card-text class="text-center py-16">
            <h2 class="text-h3 font-weight-bold mb-8">Unlock Your Business Potential</h2>
            <p class="text-h6 mb-12">Our expert consultants are ready to guide you through the AI revolution. Don't miss this opportunity to transform your business.</p>
            <v-btn
              color="white"
              x-large
              elevation="2"
              class="primary--text font-weight-bold px-8 py-3 mt-4 cta-button text-uppercase"
              href="https://calendly.com/jovisaib/30-min-intro"
              target="_blank"
              rel="noopener noreferrer"
              style="border-radius: 4px;"
              @click.stop
            >
              Schedule Your Free Consultation
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import MarkdownIt from 'markdown-it';
import logoImage from '@/assets/logo_main.png';

export default {
  setup() {
    const route = useRoute();
    const blogPost = ref({
      title: '',
      content: '',
      date: '',
      lastModified: '',
      category: '',
      tags: [],
      description: '',
      image: ''
    });

    const renderedContent = ref('');

    useHead({
      title: computed(() => `${blogPost.value.title} | Allometrik`),
      meta: computed(() => [
        { name: 'description', content: blogPost.value.description },
        { property: 'og:title', content: blogPost.value.title },
        { property: 'og:description', content: blogPost.value.description },
        { property: 'og:image', content: blogPost.value.image },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://allometrik.com/blog/${route.params.slug}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: blogPost.value.title },
        { name: 'twitter:description', content: blogPost.value.description },
        { name: 'twitter:image', content: blogPost.value.image }
      ]),
      link: computed(() => [
        { rel: 'canonical', href: `https://allometrik.com/blog/${route.params.slug}` }
      ])
    });

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blogPost.value.title,
        "image": blogPost.value.image,
        "articleBody": blogPost.value.content,
        "author": {
          "@type": "Person",
          "name": "Jose Vicente Sáez Ibáñez"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Allometrik",
          "logo": {
            "@type": "ImageObject",
            "url": "https://allometrik.com/logo.png"
          }
        },
        "datePublished": blogPost.value.date,
        "dateModified": blogPost.value.lastModified,
        "description": blogPost.value.description,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://allometrik.com/blog/${route.params.slug}`
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    const addSocialMediaMeta = () => {
      const metaTags = [
        { property: 'og:title', content: blogPost.value.title },
        { property: 'og:description', content: blogPost.value.description },
        { property: 'og:image', content: `${window.location.origin}${logoImage}` },
        { property: 'og:url', content: `https://allometrik.com/blog/${route.params.slug}` },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: blogPost.value.title },
        { name: 'twitter:description', content: blogPost.value.description },
        { name: 'twitter:image', content: `${window.location.origin}${logoImage}` },
      ];

      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        Object.keys(tag).forEach(key => {
          meta.setAttribute(key, tag[key]);
        });
        document.head.appendChild(meta);
        console.log(`Added meta tag: ${key}="${tag[key]}"`);
      });
    };

    onMounted(() => {
      addSocialMediaMeta();
      console.log('Twitter Card URL for validation:', `https://cards-dev.twitter.com/validator?url=${encodeURIComponent(`https://allometrik.com/blog/${route.params.slug}`)}`);
    });

    const articles = require.context('@/assets/articles', false, /\.md$/);
    const article = articles(`./${route.params.slug}.md`);

    blogPost.value = {
      title: article.title || route.params.slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
      content: article.default,
      date: article.date || new Date().toISOString(),
      lastModified: article.lastModified || new Date().toISOString(),
      category: article.category || '',
      tags: article.tags || [],
      description: article.description || '',
      image: article.image
    };

    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });
    renderedContent.value = md.render(blogPost.value.content);

    addStructuredData();
    addSocialMediaMeta();

    return {
      blogPost,
      renderedContent,
      formatDate
    };
  }
};
</script>

<style>
.blog-post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-post-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.blog-post-meta {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.blog-post-meta span {
  margin: 0 10px;
}

.blog-post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.blog-post-content h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-top: 40px;
  margin-bottom: 20px;
}

.blog-post-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
  margin-top: 30px;
  margin-bottom: 15px;
}

.blog-post-content p {
  margin-bottom: 20px;
}

.blog-post-content ul, .blog-post-content ol {
  margin-bottom: 20px;
  padding-left: 30px;
}

.blog-post-content li {
  margin-bottom: 10px;
}

.blog-post-content ul ul, .blog-post-content ol ol, .blog-post-content ul ol, .blog-post-content ol ul {
  margin-top: 10px;
  margin-bottom: 10px;
}

.blog-post-content blockquote {
  border-left: 4px solid #ddd;
  padding-left: 20px;
  margin-left: 0;
  font-style: italic;
  color: #666;
}

.blog-post-content pre {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}

.blog-post-content code {
  font-family: 'Courier New', Courier, monospace;
  background-color: #f4f4f4;
  padding: 2px 4px;
  border-radius: 3px;
}

.blog-post-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 30px auto;
}

.blog-post-content a {
  color: #0066cc;
  text-decoration: none;
}

.blog-post-content a:hover {
  text-decoration: underline;
}

.blog-post-tags {
  margin-top: 30px;
}

.blog-post-tags .tag {
  display: inline-block;
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 3px;
  font-size: 0.9rem;
}

.with-top-margin {
  margin-top: 100px; /* Adjust this value as needed to create space for the navbar */
}

.consultation-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1976D2, #64B5F6);
}
.consultation-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1) 10px,
    transparent 10px,
    transparent 20px
  );
  z-index: 1;
}
.consultation-card .v-card__text {
  position: relative;
  z-index: 2;
}
.cta-button {
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 3;
  position: relative;
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background-color: #f5f5f5 !important;
}
</style>
