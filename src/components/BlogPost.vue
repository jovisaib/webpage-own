<template>
    <v-container>
      <h1>{{ blogPost.title }}</h1>
      <p>{{ blogPost.content }}</p>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogPost: {
          title: '',
          content: ''
        }
      };
    },
    mounted() {
      const posts = {
        'first-post': { title: 'First Post', content: 'This is the content of the first post.' },
        'second-post': { title: 'Second Post', content: 'This is the content of the second post.' }
      };
  
      const slug = this.$route.params.slug;
      this.blogPost = posts[slug] || { title: 'Post not found', content: '' };
    }
  };
  </script>
  