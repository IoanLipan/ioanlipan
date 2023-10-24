<template>
  <div class="card rounded-3xl
    items-center text-center w-[320px] sm:w-[45%] h-64 md:h-80 mb-10" :class="{ 'flipped': isFlipped }"
    @click="flipCard">
    <div class="front-of-card bg-primary rounded-3xl border-4 border-secondary cursor-pointer
    flex flex-col justify-between">
      <div v-if="workRelated" class="bg-accent text-secondary card-tag">
        Work Related
      </div>
      <div v-else class="bg-secondary text-accent card-tag">
        Personal Project
      </div>
      <SvgIcon :name="imageName"
        class="self-center fill-accent h-[180px] md:h-[200px] flex justify-center pt-5 scale-75 md:scale-100" />
      <h3 class="text-2xl text-accent underline pt-2">{{ title }}</h3>
      <p class="bg-secondary rounded-b-2xl text-textcolor">Click to flip the card!</p>
    </div>
    <div class="back-of-card bg-neutral rounded-3xl border-4 border-primary cursor-pointer
    flex flex-col justify-between">
      <a v-if="url" :href="url" class="card-border rounded-t-2xl">Click for repo/project!</a>
      <p v-else class="card-border rounded-t-2xl">The repo/project is confidential</p>
      <p class="p-2 xl:px-8 md:text-xl min-h-28 text-textcolor">{{ description }}</p>
      <div class="bg-primary text-xl rounded-b-2xl tracking-widest text-secondary
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
