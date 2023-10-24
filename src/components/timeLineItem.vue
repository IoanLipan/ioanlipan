<template>
  <li class="ml-10 mb-10">
    <span
      class="flex absolute -left-5 justify-center items-center w-10 h-10
      bg-secondary rounded-full ring-8 ring-primary"
    >
      <svgIcon :name="svgName" />
    </span>
    <h3 class="mb-1 text-lg font-semibold tracking-widest">
      {{ title }}
      <span v-if="svgName === 'diploma'"
      class="bg-accent text-primary border-secondary border-2 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
        Latest
      </span>
    </h3>
    <time class="block mb-2 text-sm font-normal leading-none text-secondary"> {{ period }} </time>
    <p class="text-base font-light tracking-wide">
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
