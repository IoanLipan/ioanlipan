<template>
  <div class="flex items-center mx-auto">
    <p class="text-base text-neutral pr-3">My skill level :</p>
    <svg v-for="i in 5" :key="i" class="h-6 w-6">
      <path v-if="i <= level"
        d="M12 2L14.55 8.16L21 9.24L16.24 13.61L17.47 20L12 17.77L6.53 20L7.76 13.61L3 9.24L9.45 8.16L12 2Z"
        fill="gold" />
      <path v-else d="M12 2L14.55 8.16L21 9.24L16.24 13.61L17.47 20L12 17.77L6.53 20L7.76 13.61L3 9.24L9.45 8.16L12 2Z"
        fill="none" stroke="gold" />
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
