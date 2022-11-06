<template>
  <div>
    <!-- <img v-if="name === basketball" :src="'@/assets/' + basketball" /> -->
    <img v-if="imageName === basketball" :src="'../assets/images/' + this.basketball" />
    <img v-else-if="imageName === kickbox" :src="'../assets/images/' + this.kickbox" />
    <img v-else-if="imageName === gym" :src="'../assets/images/' + this.gym" />
    <img v-else-if="imageName === pingpong" :src="'../assets/images/' + this.pingpong" />
    <img v-else :src="'../assets/' + this.placeholder" />
  </div>
</template>
<script>
export default {
  name: 'ImageComponent',
  props: {
    imageName: {
      type: String,
      default: 'placeholder',
    },
  },
  data() {
    return {
      basketball: 'basketball.jpg',
      kickbox: 'kickbox.jpeg',
      gym: 'gym.jpeg',
      pingpong: 'pingpong.jpeg',
      placeholder: 'placeholder.png',
    };
  },
};
</script>
