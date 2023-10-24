<template>
  <div class="card text-white rounded-3xl items-center text-center w-full h-80 mb-10" :class="{ 'flipped': isFlipped }"
    @click="flipCard">

    <!-- Front of the card -->
    <div
      class="front-of-card bg-slate-900 rounded-3xl border-4 border-slate-400 cursor-pointer flex flex-col justify-between">
      <img :src="image" alt="Attraction Image" class="rounded-t-3xl object-cover h-[180px] w-full">
      <h3 class="text-2xl text-lime-300 pt-2">{{ title }}</h3>
      <p class="bg-slate-400 rounded-b-2xl text-black">Click to see more!</p>
    </div>

    <!-- Back of the card -->
    <div
      class="back-of-card bg-slate-300 rounded-3xl border-4 border-slate-700 cursor-pointer flex flex-col justify-between">
      <p class="p-2 sm:px-8 md:px-2 xl:px-8 min-h-28 text-black my-auto">{{ description }}</p>
      <a :href="mapLink" target="_blank" class="text-lime-300 hover:underline bg-slate-700 rounded-b-2xl p-2">View on
        Map</a>
    </div>
  </div>
</template>

<script>
import '../assets/styles/projectCard.css';

export default {
  name: 'TravelAttractionCard',
  props: {
    title: {
      type: String,
      default: 'Unknown Attraction',
    },
    description: {
      type: String,
      default: 'Description not available.',
    },
    image: {
      type: String,
      default: '',
    },
    mapLink: {
      type: String,
      default: '',
    },
  },
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
