<template>
  <div class="min-h-screen flex flex-col bg-slate-800">
    <AppHeader />
    <router-view class=""/>
    <ContactMe v-motion-pop />
  </div>
</template>

<script>
import AppHeader from './components/appHeader.vue';
import ContactMe from './components/footerMail.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    ContactMe,
  },
};
</script>
