<template>
  <!-- this is for the next articles -->
  <div class="blog-container-grid-2-1">
    <img
      v-if="!imageIsRight && title !== 'Basketball'"
      class="blog-image-desktop"
      :src="image"
      v-motion-pop-visible
    />
    <div v-if="title !== 'Basketball'">
      <h1 class="blog-title" v-motion-slide-visible-left>{{ title }}</h1>
      <img :src="image" class="blog-image-mobile" v-motion-pop-visible />
      <p class="blog-text" v-motion-fade-visible>
        {{ text }}
      </p>
    </div>
    <img
      v-if="imageIsRight && title !== 'Basketball'"
      class="blog-image-desktop"
      :src="image"
      v-motion-pop-visible
    />
  <!-- this is for the first article -->
    <img
      v-if="!imageIsRight && title === 'Basketball'"
      class="blog-image-desktop"
      :src="image"
      v-motion-pop
    />
    <div v-if="title === 'Basketball'">
      <h1 class="blog-title" v-motion-slide-left>{{ title }}</h1>
      <img :src="image" class="blog-image-mobile" v-motion-pop />
      <p class="blog-text" v-motion-fade>
        {{ text }}
      </p>
    </div>
    <img
      v-if="imageIsRight && title === 'Basketball'"
      class="blog-image-desktop"
      :src="image"
      v-motion-pop
    />
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
