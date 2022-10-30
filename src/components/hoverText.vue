<template>
  <span class="font-bold underline p-1 hover:bg-red-400 cursor-pointer
    hover:transition-all hover:rounded-xl hover:scale-110" >
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'hoverText',
  props: {
    text: {
      type: String,
      default: 'lorem',
    },
  },
};
</script>
