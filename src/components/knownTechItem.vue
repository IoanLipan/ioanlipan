<template>
  <div>
    <div class='flex flex-col bg-gray-500 bg-opacity-0 hover:bg-opacity-60 hover:scale-125 transition-all p-5 rounded-full' @click="openModal">
      <div class="w-24 h-24 flex items-center justify-center">
        <SvgIcon :name='imageName' />
      </div>
    </div>
    <div class="modal-overlay bg-gray-500 bg-opacity-80" v-if="isModalOpen" @click="closeModal">
      <div class="modal bg-textcolor text-center flex flex-col justify-around gap-8 rounded-[36px] border-4 border-secondary">
        <SvgIcon :name='imageName' class="mx-auto" />
        <h2 class="text-neutral">{{ title }}</h2>
        <StarRating :level="level" />
        <p class="text-neutral text-base">{{ description }}</p>
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
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
