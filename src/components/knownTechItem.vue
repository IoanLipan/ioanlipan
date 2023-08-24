<template>
  <div>
    <div class='flex flex-col hover:bg-slate-600 transition-all p-5 rounded-full' @click="openModal">
      <div class="w-24 h-24 flex items-center justify-center">
        <SvgIcon :name='imageName' />
      </div>
    </div>
    <div class="modal-overlay" v-if="isModalOpen" @click="closeModal">
      <div class="modal text-center flex flex-col justify-around gap-8 rounded-[36px] font-mono">
        <SvgIcon :name='imageName' class="mx-auto" />
        <h2 class="text-white">{{ title }}</h2>
        <StarRating :level="level" />
        <p class="text-slate-400 text-base">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';
import StarRating from './starRating.vue';

export default {
  name: 'KnownTechItem',
  components: { SvgIcon, StarRating },
  props: {
    title: {
      type: String,
      default: 'Tech',
    },
    imageName: {
      type: String,
      default: 'ILLogoSvg',
    },
    description: {
      type: String,
      default: 'Lorem ipsum igitus sqgwefvf sdcv r fverc vetgrwce',
    },
    level: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(34, 35, 34, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: rgb(75, 73, 73);
  padding: 20px;
  max-width: 400px;
  border-radius: 36px;
  text-align: center;
  animation-name: modal-animation;
  animation-duration: 0.15s;
  animation-timing-function: ease-in-out;
}

@keyframes modal-animation {
  from {
    opacity: 0;
    transform: scale(0.6);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
