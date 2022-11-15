<template>
  <div class="text-white font-mono flex flex-col text-center gap-4 p-4
    md:py-10 w-full md:w-[40%] bg-slate-600 border-slate-600 rounded-xl mb-12
    transition transform duration-700 ease-in-out cursor-pointer"
    @click="rotation" :style="{ transform: `rotate(${deg}deg)` }">
    <SvgIcon :name="imageName" class="self-center fill-white md:scale-100" />
    <h3 class="text-2xl text-lime-300 underline">{{ title }}</h3>
    <h4 class="text-orange-400 font-semibold shadow-xl
     w-fit mx-auto px-5 py-2 border-slate-600 rounded-xl bg-slate-500">
      {{ usedTech }}
    </h4>
    <p class="md:px-10">{{ description }}</p>
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
  data() {
    return {
      deg: 0,
    };
  },
  methods: {
    rotation() {
      this.deg += 360;
    },
  },
};
</script>
