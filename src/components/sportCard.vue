<template>
  <div class="relative rounded-2xl overflow-hidden cursor-pointer" @click="openPopover">
    <img class="w-full h-80 object-cover" :src="image" :alt="title">
    <div
      class="absolute bottom-0 w-full bg-gradient-to-t from-textcolor to-transparent text-neutral text-xl p-3 select-none">
      {{ title }}
    </div>
    <div v-if="showPopover" class="fixed inset-0 flex justify-center items-center z-50 blur-bg"
      @click.self="closePopover">
      <div class="bg-neutral p-4 rounded-2xl shadow-lg w-4/5 md:w-2/5 text-textcolor xl:text-2xl">
        <SvgIcon :name="icon" class="mx-auto pb-5" />
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';

export default {
  name: 'SportCard',
  components: { SvgIcon },
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showPopover: false,
      currentTitle: '',
    };
  },
  methods: {
    openPopover() {
      this.currentTitle = this.title;
      if (!this.showPopover) {
        this.showPopover = true;
        this.$nextTick(() => {
          document.addEventListener('click', this.documentClickHandler);
        });
      }
    },
    closePopover() {
      if (this.currentTitle === this.title) {
        this.showPopover = false;
        document.removeEventListener('click', this.documentClickHandler);
      }
    },
    documentClickHandler(event) {
      if (!this.$el.contains(event.target)) {
        this.closePopover();
      }
    },
  },
};
</script>

<style scoped>
.blur-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  /* Adjust the blur value as needed */
  z-index: -1;
}
</style>
