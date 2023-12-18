<template>
  <div
    class="card rounded-3xl items-center text-center w-[320px] sm:w-[45%] h-64 md:h-80 mb-10"
    :class="{ flipped: isFlipped, hovered: isHovered }"
    @click="flipCard"
    @mouseenter="hoverCard"
  >
    <div
      class="front-of-card bg-primary rounded-3xl border-4 border-secondary cursor-pointer flex flex-col justify-between"
      :style="{ transform: frontTransform }"
    >
      <div v-if="workRelated === true" class="bg-accent text-secondary card-tag">
        Work Related
      </div>
      <div v-else class="bg-secondary text-accent card-tag">
        Personal Project
      </div>
      <img
        :src="imageURL"
        class="self-center h-[180px] md:h-[200px] rounded-2xl"
      />
      <h3 class="text-2xl text-accent underline">{{ title }}</h3>
      <p class="bg-secondary rounded-b-2xl text-textcolor tracking-widest">
        Click to flip the card!
      </p>
    </div>
    <div
      class="back-of-card bg-neutral rounded-3xl border-4 border-primary cursor-pointer flex flex-col justify-between"
      :style="{ transform: backTransform }"
    >
      <a
        v-if="url"
        :href="url"
        class="card-border rounded-t-2xl tracking-widest"
        >Click for repo/project!</a
      >
      <p v-else class="card-border rounded-t-2xl tracking-widest">
        The repo/project is confidential
      </p>
      <p class="p-2 xl:px-8 md:text-xl min-h-28 text-textcolor">
        {{ description }}
      </p>
      <div
        class="bg-primary text-xl rounded-b-2xl tracking-widest text-secondary w-full mx-auto px-5 py-2 h-20 flex items-center justify-center"
      >
        {{ usedTech }}
      </div>
    </div>
  </div>
</template>

<script>
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
    imageURL: {
      type: String,
      default: null,
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
  data() {
    return {
      isFlipped: false,
      isHovered: false,
      isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    };
  },
  computed: {
    frontTransform() {
      const baseRotate = this.isFlipped ? -180 : 0;
      const hoverRotate = this.isHovered ? 20 : 0;
      return `rotateY(${baseRotate + hoverRotate}deg)`;
    },
    backTransform() {
      const baseRotate = this.isFlipped ? 0 : 180;
      const hoverRotate = this.isHovered ? -20 : 0;
      return `rotateY(${baseRotate + hoverRotate}deg)`;
    },
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    hoverCard() {
      if (!this.isTouchDevice && !this.isFlipped) {
        this.isHovered = true;
        setTimeout(() => {
          this.isHovered = false;
        }, 300);
      }
    },
  },
};
</script>
