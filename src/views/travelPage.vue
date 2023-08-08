<!-- eslint-disable max-len vue/no-use-v-if-with-v-for -->
<template>
  <div class="w-full max-w-[100vw] font-mono">
    <h1 class="py-4 text-center text-3xl text-white">Traveling</h1>

    <div class="text-white grid grid-cols-12">
      <div class="col-start-2 col-span-10">

        <!-- Country Flex Menu -->
        <div class="flex items-center overflow-x-auto mb-4 w-full styled-scrollbar">
          <div class="flex space-x-6 ml-auto mr-auto">
            <!-- Iterating over each country/city combination -->
            <div v-for="entry in generateCountryCityEntries" :key="entry.key"
              @click="selectCountryCity(entry.country, entry.city)" class="cursor-pointer px-4 py-2 min-w-[96px]"
              :class="{ 'border-b-4 border-white': isSelectedCountryCity(entry.country, entry.city) }">

              <img :src="require(`../assets/images/flags/${entry.flag}.jpeg`)"
                class="h-10 w-16 min-h-10 min-w-16 mx-auto hover:scale-105" />
              <div class="flex flex-col justify-center h-10 pt-2">
                <h2 class="text-center">{{ entry.displayCountry }}</h2>
                <h3 v-if="entry.displayCity" class="text-center text-xs">{{ entry.displayCity }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Days Flex Menu -->
        <div v-if="selectedCountry"
          class="flex items-center overflow-x-auto relative mb-4 space-x-4 p-4 rounded-md ml-auto mr-auto styled-scrollbar">
          <div v-for="day in getSelectedCountryDays" :key="day.day"
            @click="selectedDay = selectedDay === day.day ? '' : day.day"
            class="cursor-pointer px-4 py-2 bg-[#4B5563] h-fit sm:h-10 min-w-fit rounded-lg transition-transform transform hover:scale-105">
            {{ day.day }}
          </div>
        </div>

        <!-- Attractions List -->
        <div v-if="selectedDay" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
          <TravelAttractionCard v-for="attraction in getSelectedCountryAttractions" :key="attraction.name"
            :title="attraction.name" :description="attraction.description" :image="attraction.image"
            :mapLink="attraction.mapLink" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TravelAttractionCard from '../components/attractionCard.vue';
import countries from '../assets/countries.json';

export default {
  name: 'TravelPage',
  title: 'Ioan Lipan | Travel',
  components: {
    TravelAttractionCard,
  },
  data() {
    return {
      countries,
      selectedCountry: null,
      selectedCity: null,
      selectedDay: '',
    };
  },

  methods: {
    selectCountry(countryData) {
      if (!countryData.cities) {
        this.selectedCountry = countryData.country;
        this.selectedCity = null;
      } else if (this.selectedCountry !== countryData.country) {
        this.selectedCountry = countryData.country;
        this.selectedCity = null;
      } else {
        this.selectedCountry = null;
      }
    },

    selectCity(cityName) {
      this.selectedCity = cityName;
    },
    selectCountryCity(country, city) {
      this.selectedCountry = country;
      this.selectedCity = city;
    },

    isSelectedCountryCity(country, city) {
      return this.selectedCountry === country && this.selectedCity === city;
    },
  },

  computed: {
    generateCountryCityEntries() {
      const entries = [];
      this.countries.forEach((country) => {
        if (country.cities) {
          country.cities.forEach((city) => {
            entries.push({
              key: country.country + city.name,
              flag: country.flag,
              displayCountry: country.country,
              displayCity: city.name,
              country: country.country,
              city: city.name,
            });
          });
        } else {
          entries.push({
            key: country.country,
            flag: country.flag,
            displayCountry: country.country,
            displayCity: null,
            country: country.country,
            city: null,
          });
        }
      });
      return entries;
    },
    getSelectedCountryDays() {
      if (!this.selectedCountry) return [];

      const selectedCountry = this.countries.find((c) => c.country === this.selectedCountry);

      // If cities are not available
      if (!selectedCountry.cities) return selectedCountry.days;

      // If cities are available
      const city = selectedCountry.cities.find((c) => c.name === this.selectedCity);
      return city.days;
    },

    getSelectedCountryAttractions() {
      if (!this.selectedCountry) return [];

      const selectedCountry = this.countries.find((c) => c.country === this.selectedCountry);

      // If cities are not available
      if (!selectedCountry.cities) {
        const dayData = selectedCountry.days.find((d) => d.day === this.selectedDay);
        return dayData ? dayData.attractions : [];
      }

      // If cities are available
      const city = selectedCountry.cities.find((c) => c.name === this.selectedCity);
      const dayData = city.days.find((d) => d.day === this.selectedDay);
      return dayData ? dayData.attractions : [];
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
</style>
