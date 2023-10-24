<template>
  <li class="ml-10 mb-10">
    <span
      class="flex absolute -left-5 justify-center items-center w-10 h-10
      bg-blue-200 rounded-full ring-8 ring-white"
    >
      <svgIcon :name="svgName" />
    </span>
    <h3 class="mb-1 text-lg font-semibold tracking-widest text-white">
      {{ title }}
      <span v-if="svgName === 'diploma'"
      class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
        Latest
      </span>
    </h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400"> {{ period }} </time>
    <p class="text-base font-light tracking-wide text-white">
      {{ description }}
    </p>
  </li>
</template>

<script>
import svgIcon from './svgIcon.vue';

export default {
  name: 'TimeLineItem',
  components: { svgIcon },
  props: {
    title: {
      type: String,
      default: 'timeline item',
    },
    period: {
      type: String,
      default: '2221-2222',
    },
    svgName: {
      type: String,
      default: 'diploma',
    },
    description: {
      type: String,
      default: 'lorem',
    },
  },
};
</script>
