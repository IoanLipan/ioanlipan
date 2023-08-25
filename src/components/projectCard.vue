<template>
  <div class="card text-white font-mono rounded-3xl
    items-center text-center w-[320px] sm:w-[45%] h-64 md:h-80 mb-10"
    :class="{ 'flipped': isFlipped }" @click="flipCard">
    <div class="front-of-card bg-slate-900 rounded-3xl border-4 border-slate-400 cursor-pointer
    flex flex-col justify-between">
      <div v-if="workRelated" class="absolute -top-3 -right-6 bg-blue-600
        z-10 w-fit self-end p-1 mr-3 rounded-xl max-w-[100px]">
        Work Related
      </div>
      <div v-else class="absolute -top-3 -right-6 bg-green-600
        z-10 w-fit self-end p-1 mr-3 rounded-xl max-w-[100px]">
        Personal Project
      </div>
      <SvgIcon :name="imageName"
      class="self-center fill-white h-[120px] md:h-[200px] flex justify-center pt-5" />
      <h3 class="text-2xl text-lime-300 underline pt-2">{{ title }}</h3>
      <p class="bg-slate-400 rounded-b-2xl text-black">Click to flip the card!</p>
    </div>
    <div class="back-of-card bg-slate-300 rounded-3xl border-4 border-slate-600 cursor-pointer
    flex flex-col justify-between">
      <a v-if="url" :href="url" class="bg-slate-600 rounded-t-2xl">Click for repo/project!</a>
      <p v-else class="bg-slate-600 rounded-t-2xl">The repo/project is confidential</p>
      <p class="p-2 xl:px-8 min-h-28 text-black">{{ description }}</p>
      <div class="text-orange-400 font-semibold bg-slate-600 rounded-b-2xl
       w-full mx-auto px-5 py-2 h-20 flex items-center justify-center">
        {{ usedTech }}
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';
import '../assets/styles/projectCard.css';

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
      isFlipped: false,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>
