<template>
  <a
    class="flex justify-center w-fit gap-3 items-center justify-self-center p-0.5 px-3
    cursor-pointer border-2 rounded-xl bg-gray-800 border-gray-800 text-white h-10
    hover:bg-gray-700"
    :href="url"
  >
    <div class="w-[24px]"><svgIcon :name=image /></div>
    <div class="min-w-fit">{{ name }}</div>
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
