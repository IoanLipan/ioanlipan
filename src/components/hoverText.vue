<template>
  <span class="font-bold underline p-1 hover:bg-green-400 hover:border-green-400
    hover:transition-all hover:rounded-xl" >
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
