<template>
  <div class="p-0">
    <router-link :to="{ path: link }" class="p-2 flex items-center
      lg:hover:bg-secondary lg:not:hover:bg-transparent rounded-lg w-full"
      :class="iconName ? 'flex-row gap-3' : 'flex-col'">
      <SvgIcon v-if="iconName" :name="iconName" />
      <div>
        {{ title }}
      </div>
      <div v-if="description" class="text-[10px] tracking-[0.4rem] sm:tracking-[0.6rem] leading-[1rem]">
        {{ description }}
      </div>
    </router-link>
  </div>
</template>

<script>
import SvgIcon from './svgIcon.vue';

export default {
  name: 'HeaderMenuItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  components: { SvgIcon },
};
</script>
