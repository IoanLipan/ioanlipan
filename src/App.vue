<template>
  <div class="min-h-screen flex flex-col bg-slate-800">
    <AppHeader />
    <router-view />
    <ContactMe v-motion-pop />
    <ScrollTopArrow />
  </div>
</template>

<script>
import AppHeader from './components/appHeader.vue';
import ContactMe from './components/footerMail.vue';
import ScrollTopArrow from './components/scrollTopArrow.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    ContactMe,
    ScrollTopArrow,
  },
};
</script>
