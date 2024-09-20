<template>
  <v-container class="py-12 with-top-margin">
    <v-row>
      <v-col v-for="post in posts" :key="post.slug" cols="12" sm="6" md="4">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 8 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto transition-swing d-flex flex-column blog-card"
            max-width="400"
            height="100%"
          >
            <div class="card-content">
              <v-img
                height="250"
                :src="post.image || 'https://picsum.photos/400/250'"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
              >
                <v-card-title class="text-h5 pb-2">{{ post.title }}</v-card-title>
              </v-img>
              <v-card-subtitle class="pt-4 pb-2 text-uppercase font-weight-medium">
                {{ post.category }} • {{ formatDate(post.date) }}
              </v-card-subtitle>
              <v-card-text class="text--primary flex-grow-1">
                <div class="text-body-2">{{ post.summary }}</div>
              </v-card-text>
            </div>
            <v-card-actions class="pt-0 read-more-wrapper">
              <v-btn
                color="primary"
                text
                :to="`/blog/${post.slug}`"
                @click.stop
                class="read-more-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

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

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    const articles = require.context('@/assets/articles', false, /\.md$/);
    
    const articleFiles = articles.keys();

    this.posts = articleFiles.map(key => {
    
      const article = articles(key);
      const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');
      const title = article.title;
      const date = article.date;
      const summary = article.summary;
      const category = article.category;

      return {
        slug,
        date,
        title,
        summary,
        category,
        image: `https://picsum.photos/400/250?random=${Math.random()}`
      };
    });
      
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    },
    bookCall() {
      // Implement the logic to book a call or navigate to a booking page
      console.log('Booking a call');
    }
  }
};
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease-in-out;
}
.v-card.on-hover {
  transform: translateY(-5px);
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
.blog-card {
  border-radius: 20px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
}
.blog-card .v-image {
  border-radius: 20px 20px 0 0;
}
.card-content {
  padding: 0;
}
.read-more-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
}
.read-more-btn {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: rgba(25, 118, 210, 0.1);
}
.read-more-btn:hover {
  background-color: rgba(25, 118, 210, 0.2);
  transform: translateX(5px);
}
.read-more-btn .v-icon {
  transition: transform 0.3s ease;
}
.read-more-btn:hover .v-icon {
  transform: translateX(3px);
}
.v-card__subtitle {
  color: #757575;
  font-size: 0.875rem;
}
.v-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}
.v-card__text {
  color: #424242;
}
</style>
