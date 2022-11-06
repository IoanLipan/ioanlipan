<template>
  <div class="blog-container-grid-2-1">
    <div>
      <h1 class="blog-title" v-motion-slide-visible-left>{{ title }}</h1>
      <img :src="imagePath" class="blog-image-mobile" v-motion-pop-visible />
      <p class="blog-text" v-motion-fade-visible>
        {{ text }}
      </p>
    </div>
    <img class="blog-image-desktop" :src="imagePath" v-motion-pop-visible />
  </div>
</template>

<script>
export default {
  name: 'TextWithRightImage',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default: 'lorem',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    imagePath() {
      if (this.image !== '') {
        return require(`@/assets/images/${this.image}`);
      }
      return 0;
    },
  },
};
</script>
