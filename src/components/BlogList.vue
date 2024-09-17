<template>
  <v-container>
    <v-card v-for="post in posts" :key="post.slug" class="mb-3">
      <v-card-title>
        <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
      </v-card-title>
      <v-card-subtitle>{{ post.date }}</v-card-subtitle>
      <v-card-text>{{ post.summary }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { slug: 'first-post', title: 'First Post', date: '2024-01-01', summary: 'Summary of the first post.' },
        { slug: 'second-post', title: 'Second Post', date: '2024-02-01', summary: 'Summary of the second post.' }
        // Add more posts as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Add any specific styling here */
</style>
