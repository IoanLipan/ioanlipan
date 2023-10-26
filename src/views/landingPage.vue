<template>
  <div class="m-40 mx-auto select-none cursor-pointer">
    <xyzCube>
      <template #front>
        <div>Talk is cheap. Show me the code. - Linus Torvalds</div>
      </template>
      <template #back>
        <div>Code never lies; comments do. - Ron Jeffries</div>
      </template>
      <template #left>
        <div>Debugging is like being the detective in a crime movie. - Filipe Fortes</div>
      </template>
      <template #right>
        <div>First, solve the problem. Then, write the code. - John Johnson</div>
      </template>
      <template #top>
        <div>Code is like humor. When you have to explain it, it’s bad. - Cory House</div>
      </template>
      <template #bottom>
        <div>Simplicity is the soul of efficiency. - Austin Freeman</div>
      </template>
    </xyzCube>
  </div>
</template>

<script>
import xyzCube from '../components/xyzCube.vue';

export default {
  name: 'LandingPage',
  title: 'Ioan Lipan',
  components: { xyzCube },
};
</script>
