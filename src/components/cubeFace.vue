<template>
  <div class="face bg-primary text-accent border-secondary border-4 rounded-xl
    flex items-center justify-center text-lg p-2 text-center"
    :class="faceClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CubeFace',
  props: {
    faceClass: {
      type: String,
      required: true,
    },
  },
};
</script>
