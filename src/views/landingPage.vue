<template>
  <div class="mx-auto mt-24 mb-64 select-none cursor-pointer" v-motion-pop>
    <xyzCube>
      <template #front>
        <div>Code is like humor. When you have to explain it, it's bad. -Cory House</div>
      </template>
      <template #back>
        <div>Code never lies; comments do. - Ron Jeffries</div>
      </template>
      <template #left>
        <div>Debugging is like being the detective in a crime movie. - Filipe Fortes</div>
      </template>
      <template #right>
        <div>Talk is cheap. Show me the code. - Linus Torvalds</div>
      </template>
      <template #top>
        <SvgIcon name="solutionBig" class="scale-[2.5]" />
      </template>
      <template #bottom>
        <SvgIcon name="webdevBig" class="scale-[2.5]" />
      </template>
    </xyzCube>
  </div>
</template>

<script>
import SvgIcon from '../components/svgIcon.vue';
import xyzCube from '../components/xyzCube.vue';

export default {
  name: 'LandingPage',
  title: 'Ioan Lipan',
  components: { xyzCube, SvgIcon },
};
</script>
