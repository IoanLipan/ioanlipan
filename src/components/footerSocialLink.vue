<template>
  <a
    class="flex justify-center w-fit gap-2 items-center justify-self-center p-1 px-3
    bg-indigo-100 cursor-pointer border-collapse border-4 rounded-xl border-indigo-300
    hover:bg-indigo-500 hover:text-white hover:border-indigo-100"
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
