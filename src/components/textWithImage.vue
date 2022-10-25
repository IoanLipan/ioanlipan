<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 p-8 pt-6 gap-10 mt-10 items-center
    bg-blue-100 border-indigo-50 rounded-2xl"
  >
    <div>
      <div class="text-3xl pb-4 text-center underline">{{ title }}</div>
      <img :src="imageSrc" class="flex md:hidden py-4" />
      <div class="text-xl text-center">
        {{ text }}
      </div>
    </div>
    <img class="hidden md:flex" :src=imagePath />
  </div>
</template>

<script>
export default {
  name: 'TextWithImage',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default: 'lorem',
    },
    imagePath: {
      type: String,
      default: '',
    },
  },
};
</script>
