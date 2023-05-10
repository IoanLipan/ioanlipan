<template>
  <div class="p-0 mx-auto">
    <router-link
    :to="{ path: link }"
    class="p-2 font-mono flex items-center
      lg:hover:bg-slate-700 lg:not:hover:bg-transparent rounded-lg w-full"
    :class="iconName ? 'flex-row gap-3' : 'flex-col'"
  >
  <SvgIcon v-if="iconName && isDesktopItem" :name="iconName" />
  <div>
    {{ title }}
  </div>
  <SvgIcon v-if="iconName && !isDesktopItem" :name="iconName" />
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
    isDesktopItem: {
      type: Boolean,
      default: false,
    },
  },
  components: { SvgIcon },
};
</script>
