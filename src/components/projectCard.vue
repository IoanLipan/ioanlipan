<template>
  <div class="text-white font-mono flex flex-col text-center gap-4
    p-10 w-[90%] lg:w-[40%] bg-slate-600 border-slate-600 rounded-xl mb-12" >
    <SvgIcon :name="imageName" class="self-center fill-white" />
    <h3 class="text-2xl text-lime-300 underline">{{ title }}</h3>
    <h4 class="text-orange-400 w-fit mx-auto px-5 py-2 border-slate-600 rounded-xl bg-slate-500">
      {{ usedTech }}
    </h4>
    <p class="text-sm">{{ description }}</p>
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';

export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      default: 'Project X',
    },
    usedTech: {
      type: String,
      default: 'HTML CSS & JavaScript',
    },
    description: {
      type: String,
      default: 'small description of the project',
    },
    imageName: {
      type: String,
      default: '',
    },
  },
  components: { SvgIcon },
};
</script>