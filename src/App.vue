<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <router-view class="-z-10"/>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/appHeader.vue';
import AppFooter from './components/appFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
