<template>
  <div class="min-h-screen flex flex-col bg-slate-800">
    <AppHeader />
    <router-view class=""/>
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
