<template>
  <v-container class="with-top-margin blog-post-container">
    <h1 class="blog-post-title">{{ blogPost.title }}</h1>
    <div v-html="renderedContent" class="blog-post-content"></div>
  </v-container>

  <v-container class="py-12">
    <v-row class="mt-12">
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
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      blogPost: {
        title: '',
        content: ''
      },
      renderedContent: ''
    };
  },
  mounted() {
    const slug = this.$route.params.slug;
    const articles = require.context('@/assets/articles', false, /\.md$/);
    
    // Dynamically import the Markdown file based on the slug
    const article = articles(`./${slug}.md`);

    // Set title and content
    this.blogPost = {
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
      content: article.default
    };

    // Render Markdown
    const md = new MarkdownIt();
    this.renderedContent = md.render(this.blogPost.content);

    // Set page title
    document.title = this.blogPost.title;

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": this.blogPost.title,
      "articleBody": this.blogPost.content,
      "author": {
        "@type": "Person",
        "name": "Jose Vicente Sáez Ibáñez"
      },
      "datePublished": new Date().toISOString(),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
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
  margin-bottom: 30px;
  text-align: center;
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
