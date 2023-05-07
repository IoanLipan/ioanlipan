<template>
  <router-link
    :to="{ path: link }"
    class="p-2 font-mono flex items-center
      lg:hover:bg-slate-700 lg:not:hover:bg-transparent rounded-lg"
    :class="iconName ? 'flex-row gap-3' : 'flex-col'"
  >
    <SvgIcon v-if="iconName" :name="iconName" />
    <div>
      {{ title }}
    </div>
    <div v-if="description" class="text-[10px] tracking-[0.6rem] leading-[1rem]">
      {{ description }}
    </div>
  </router-link>
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
