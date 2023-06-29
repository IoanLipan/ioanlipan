<template>
  <div class="text-2xl md:text-4xl xl:my-[15vh] text-white font-mono grid grid-cols-12">
    <div class="col-start-2 col-span-10 md:col-start-3 md:col-span-8 text-center p-4 md:p-10 mb-20">
      These are the technologies that I am proficient in:
    </div>
    <div class="col-start-2 col-span-10 flex justify-evenly items-center flex-wrap">
      <KnownTechItem imageName="html" title="asa" description="asdfasdfasdfasdf" level="leevl experience" />
      <KnownTechItem imageName="css" title="asa" description="asdfasdfasdfasdf" level="leevl experience" />
      <KnownTechItem imageName="tailwind" title="asa" description="asdfasdfasdfasdf" level="leevl experience" />
      <KnownTechItem imageName="javascript" title="asa" description="asdfasdfasdfasdf" level="leevl experience" />
      <KnownTechItem imageName="react" title="asa" description="asdfasdfasdfasdf" level="leevl experience" />
      <KnownTechItem imageName="vue" title="asa" description="asdfasdfasdfasdf" level="leevl experience" />
    </div>
  </div>
</template>

<script>
import KnownTechItem from '../components/knownTechItem.vue';

export default {
  name: 'KnownTechs',
  title: 'Ioan Lipan | Tech-Knowledge',
  components: { KnownTechItem },
};
</script>
