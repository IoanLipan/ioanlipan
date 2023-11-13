<template>
  <div class="min-h-screen flex flex-col bg-neutral text-textcolor font-rubik">
    <AppHeader />
    <router-view class="max-w-fit" />
    <ContactMe class="max-w-fit mx-auto" />
    <AppFooter />
    <ScrollTopArrow />
  </div>
</template>

<script>
import AppFooter from './components/appFooter.vue';
import AppHeader from './components/appHeader.vue';
import ContactMe from './components/footerMail.vue';
import ScrollTopArrow from './components/scrollTopArrow.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    ContactMe,
    ScrollTopArrow,
    AppFooter,
  },
};
</script>
