import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import BlogList from '@/components/BlogList.vue'; // Import the BlogList component
import BlogPost from '@/components/BlogPost.vue'; 
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';
import TermsOfService from '@/components/TermsOfService.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
