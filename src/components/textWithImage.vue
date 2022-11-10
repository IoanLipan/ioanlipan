<template>
  <div class="blog-container-grid-2-1">
    <img v-if="!imageIsRight" class="blog-image-desktop" :src="image" v-motion-pop-visible />
    <div>
      <h1 class="blog-title" v-motion-slide-left>{{ title }}</h1>
      <img :src="image" class="blog-image-mobile" v-motion-pop-visible />
      <p class="blog-text" v-motion-fade-visible>
        {{ text }}
      </p>
    </div>
    <img v-if="imageIsRight" class="blog-image-desktop" :src="image" v-motion-pop-visible />
  </div>
</template>

<script>
export default {
  name: 'TextWithImage',
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
    imageIsRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
