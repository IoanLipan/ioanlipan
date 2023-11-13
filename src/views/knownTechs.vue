<template>
  <div class="text-2xl md:text-4xl xl:my-[15vh] text-textcolor grid grid-cols-12 mx-auto">
    <div class="col-start-2 col-span-10 md:col-start-3 md:col-span-8 text-center p-4 md:p-10 xl:mb-20">
      These are the technologies that I am proficient in:
    </div>
    <div class="col-start-2 col-span-10 flex justify-evenly items-center flex-wrap">
      <KnownTechItem v-for="tech in TECH_STACKS" :key="tech.title" :imageName="tech.imageName" :title="tech.title"
        :description="tech.description" :level="tech.level" />
    </div>
  </div>
</template>

<script>
import TECH_STACKS from '../components/techStacks';
import KnownTechItem from '../components/knownTechItem.vue';

export default {
  name: 'KnownTechs',
  title: 'Ioan Lipan | Tech-Knowledge',
  components: { KnownTechItem },
  data() {
    return {
      TECH_STACKS,
    };
  },
};
</script>
