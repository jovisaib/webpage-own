<template>
  <v-container class="py-12 with-top-margin" >
    <v-row>
      <v-col v-for="post in posts" :key="post.slug" cols="12" sm="6" md="4">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 8 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto transition-swing d-flex flex-column"
            max-width="400"
            height="100%"
          >
            <v-img
              height="200"
              src="https://picsum.photos/400/200"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="text-h5">{{ post.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4 pb-2">{{ formatDate(post.date) }}</v-card-subtitle>
            <v-card-text class="text--primary flex-grow-1">
              <div>{{ post.summary }}</div>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                :to="`/blog/${post.slug}`"
              >
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
          <v-card-text class="text-center py-12">
            <h2 class="text-h3 font-weight-bold mb-6">Unlock Your Business Potential</h2>
            <p class="text-h6 mb-8">Our expert consultants are ready to guide you through the AI revolution. Don't miss this opportunity to transform your business.</p>
            <v-btn
              color="white"
              x-large
              rounded
              elevation="3"
              class="primary--text font-weight-bold px-8 py-3"
              @click="bookCall"
            >
              <v-icon left>mdi-calendar-clock</v-icon>
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
      posts: [
        { slug: 'first-post', title: 'First Post', date: '2024-01-01', summary: 'Summary of the first post.' },
        { slug: 'second-post', title: 'Second Post', date: '2024-02-01', summary: 'Summary of the second post.' },
        { slug: 'third-post', title: 'Third Post', date: '2024-03-01', summary: 'Summary of the third post.' }
        // Add more posts as needed
      ]
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
</style>
