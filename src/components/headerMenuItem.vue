<template>
  <router-link
    :to="{ path: link }"
    class="p-2 hover:bg-gray-500 hover:text-white hover:border-gray-700 rounded-xl"
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
