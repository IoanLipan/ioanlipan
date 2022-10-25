<template>
  <router-link :to="{ path: link }">{{ title }}</router-link>
</template>

<script>
export default {
  name: 'HeaderMenuItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>
