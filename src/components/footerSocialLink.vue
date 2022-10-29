<template>
  <a
    class="flex justify-center w-fit gap-2 items-center justify-self-center p-0.5 px-2
    cursor-pointer border-2 rounded-xl bg-gray-300 border-gray-600
    hover:bg-gray-400 hover:border-gray-800"
    :href="url"
  >
    <div><svgIcon :name=image /></div>
    <div>{{ name }}</div>
</a>
</template>

<script>
import svgIcon from './svgIcon.vue';

export default {
  name: 'FooterSocialLink',
  props: {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  components: { svgIcon },
};
</script>
