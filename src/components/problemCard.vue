<template>
  <div class="text-center bg-slate-600 border-slate-800 border-2 rounded-2xl
   max-w-fit mx-auto flex flex-col justify-between cursor-grab
   h-[380px] sm:h-[480px] p-8">
    <img class="h-48 sm:h-80 w-auto rounded-xl mx-auto" :src="image" />
    <div>
      <div class="text-2xl pb-2">{{ title }}</div>
      <div class="max-w-lg mb2">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemCard',
  props: {
    title: {
      type: String,
      default: 'blablabla',
    },
    description: {
      type: String,
      default: 'blablabla',
    },
    image: {
      type: String,
      default: '',
    },
  },
};
</script>
