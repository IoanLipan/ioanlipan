<template>
  <div>
    <AppHeader />
    <router-view/>
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
