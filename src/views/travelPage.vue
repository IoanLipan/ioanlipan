<!-- eslint-disable max-len vue/no-use-v-if-with-v-for -->
<template>
  <div class="w-full max-w-[100vw] text-textcolor">
    <h1 class="py-4 text-center text-3xl">Where you could've find me:</h1>
    <div class="grid grid-cols-12">
      <div class="col-start-2 col-span-10">
        <!-- Country Menu -->
        <div class="flex items-center overflow-x-auto overflow-y-hidden mb-4 w-full styled-scrollbar">
          <div class="flex space-x-6 ml-auto mr-auto h-28 items-center">
            <div v-for="country in countries" :key="country.country" @click="selectCountry(country)"
              class="cursor-pointer px-4 py-2 min-w-[96px] hover:scale-110 transition-all ease-in-out">

              <img :src="require(`../assets/images/flags/${country.flag}.jpeg`)"
                class="h-10 w-16 min-h-10 min-w-16 mx-auto" />
              <h2 class="text-center pt-4 whitespace-nowrap">{{ country === selectedCountry ? "> " : "" }}{{
                country.country }}{{ country
    === selectedCountry ? " <" : "" }}</h2>
            </div>
          </div>
        </div>
        <!-- Google Maps Iframe -->
        <div class="box">
          <iframe v-if="selectedCountry" :src="currentMapLink" width="100%" height="450" frameborder="0"
            allowfullscreen=""></iframe>
          <img v-else src="../assets/images/onBoard.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countries from '../assets/countries.json';

export default {
  name: 'TravelPage',
  data() {
    return {
      countries,
      selectedCountry: null,
      currentMapLink: `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}&q=World`,
      // Set a default Google Maps link showing the world.
    };
  },
  methods: {
    selectCountry(country) {
      if (this.selectedCountry !== country) {
        this.currentMapLink = `https://www.google.com/maps/embed/v1/view?center=${country.lat},${country.lng}&zoom=${country.zoom}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`;
        this.selectedCountry = country;
      } else {
        this.selectedCountry = null;
      }
    },
  },
};
</script>

<style>
.styled-scrollbar::-webkit-scrollbar {
  height: 10px;
  /* width of the entire scrollbar */
}

.styled-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  /* color of the tracking area */
}

.styled-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.7);
  /* color of the scroll thumb */
  border-radius: 2px;
  /* roundness of the scroll thumb */
  border: 1px solid transparent;
  /* creates padding around scroll thumb */
  background-clip: content-box;
}

.styled-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 100, 100, 0.7);
}

/* For Firefox */
.styled-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
}

.box {
  --mask:
    linear-gradient(#000 0 0) 50%/calc(100% - 32px) calc(100% - 32px) no-repeat,
    radial-gradient(16px, #0000 98%, #000) 0 -16px/29.60px 32px round no-repeat,
    radial-gradient(16px, #0000 98%, #000) 0 calc(100% + 16px)/29.60px 32px round no-repeat,
    radial-gradient(16px, #0000 98%, #000) -16px 0/32px 29.60px no-repeat round,
    radial-gradient(16px, #0000 98%, #000) calc(100% + 16px) 0/32px 29.60px no-repeat round;
  clip-path: polygon(32px 0, calc(100% - 32px) 0, 100% 32px, 100% calc(100% - 32px), calc(100% - 32px) 100%, 32px 100%, 0 calc(100% - 32px), 0 32px);
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
