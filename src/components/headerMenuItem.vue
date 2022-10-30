<template>
  <router-link
    :to="{ path: link }"
    class="p-2 font-cinzel"
    >{{ title }}</router-link
  >
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
