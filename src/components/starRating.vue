<template>
  <div class="flex items-center mx-auto">
    <p class="text-base text-secondary pr-3">My skill level :</p>
    <svg v-for="i in 5" :key="i" class="h-6 w-6">
      <!-- Full star -->
      <path v-if="i <= Math.floor(level)"
        d="M12 2L14.55 8.16L21 9.24L16.24 13.61L17.47 20L12 17.77L6.53 20L7.76 13.61L3 9.24L9.45 8.16L12 2Z"
        :style="`fill: var(--secondary);`" />
      <!-- Partial star -->
      <g v-else-if="i === Math.floor(level) + 1">
        <!-- Empty star -->
        <path
          d="M12 2L14.55 8.16L21 9.24L16.24 13.61L17.47 20L12 17.77L6.53 20L7.76 13.61L3 9.24L9.45 8.16L12 2Z"
          fill="none"
          :style="`stroke: var(--secondary);`"
        />
        <!-- Fill half the star if it's a fraction -->
        <path
          d="M12 2L9.45 8.16L3 9.24L7.76 13.61L6.53 20L12 17.77L12 2Z"
          v-if="level % 1 !== 0"
          :style="`fill: var(--secondary);`"
        />
      </g>
      <!-- Empty star -->
      <path v-else
        d="M12 2L14.55 8.16L21 9.24L16.24 13.61L17.47 20L12 17.77L6.53 20L7.76 13.61L3 9.24L9.45 8.16L12 2Z"
        fill="none"
        :style="`stroke: var(--secondary);`" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
      validator: (value) => value >= 1 && value <= 5,
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
