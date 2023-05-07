<template>
  <div class='flex flex-col hover:bg-slate-700 p-5 rounded-full'>
    <div class="w-24 h-24 flex items-center justify-center">
      <SvgIcon :name='imageName' />
    </div>
    <!-- <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p>{{ level }}</p> -->
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';

export default {
  name: 'KnownTechItem',
  components: { SvgIcon },
  props: {
    title: {
      type: String,
      default: 'Tech',
    },
    imageName: {
      type: String,
      default: 'ILLogoSvg',
    },
    description: {
      type: String,
      default: 'Lorem ipsum igitus sqgwefvf sdcv r fverc vetgrwce',
    },
    level: {
      type: String,
      default: '',
    },
  },
};
</script>
