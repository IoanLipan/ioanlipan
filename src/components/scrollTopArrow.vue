<template>
  <div
    @click="scrollTop"
    v-show="visibleScroll"
    class="fill-slate-400 fixed bottom-10 right-3 lg:bottom-20 lg:right-5 cursor-pointer z-30"
  >
    <SvgIcon name="arrowUp" class="w-24 h-24 lg:w-36" />
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';

export default {
  name: 'ScrollTopArrow',
  components: { SvgIcon },
  data() {
    return {
      visibleScroll: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener() {
      this.visibleScroll = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>
