<template>
  <a class="text-white font-mono text-center flex flex-col gap-6
    py-6 border-slate-500 border-4 w-[320px] sm:w-[40%] bg-slate-900 rounded-3xl mb-12
    transition transform duration-700 ease-in-out cursor-pointer"
    @click="rotation" :style="{ transform: `rotate(${deg}deg)` }"
    :href="url" target="_blank">
    <div v-if="workRelated"
      class="absolute -top-3 -right-6 bg-blue-600
      z-10 w-fit self-end p-1 mr-3 rounded-xl max-w-[100px]">
      Work Related
    </div>
    <div v-else class="absolute -top-3 -right-6 bg-green-600
      z-10 w-fit self-end p-1 mr-3 rounded-xl max-w-[100px]">
      Personal Project
    </div>
    <div class="flex flex-col justify-between h-[70%]">
      <SvgIcon :name="imageName" class="self-center fill-white h-[100px] md:h-auto" />
      <h3 class="text-2xl text-lime-300 underline pt-2">{{ title }}</h3>
    </div>
    <div class="flex flex-col justify-between h-[30%]">
      <div class="text-orange-400 font-semibold shadow-xl
       w-full mx-auto px-5 py-2 border-slate-600 bg-slate-500">
        {{ usedTech }}
    </div>
      <p class="p-2 xl:px-8 min-h-28">{{ description }}</p>
    </div>
  </a>
  <!-- <div class="text-white font-mono flex flex-col text-center gap-4 p-4
    md:py-10 w-[320px] sm:w-[40%] bg-black rounded-3xl mb-12
    transition transform duration-700 ease-in-out cursor-pointer"
    @click="rotation" :style="{ transform: `rotate(${deg}deg)` }">
    <SvgIcon :name="imageName" class="self-center fill-white h-[100px] md:h-auto" />
    <h3 class="text-2xl text-lime-300 underline">{{ title }}</h3>
    <h4 class="text-orange-400 font-semibold shadow-xl
     w-full mx-auto px-5 py-2 border-slate-600 rounded-xl bg-slate-500">
      {{ usedTech }}
    </h4>
    <p class="xl:px-8">{{ description }}</p>
  </div> -->
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
    url: {
      type: String,
      default: '',
    },
    workRelated: {
      type: Boolean,
      default: false,
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
