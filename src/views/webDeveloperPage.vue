<template>
  <div class="grid-of-12-container">
    <div class="text-white text-2xl text-center font-serif tracking-widest leading-relaxed
      col-start-2 col-span-10 md:col-start-4 md:col-span-6 pt-10">
      Programming is my passion. My mindstate is that anything can be
      <span class="text-blue-400">created</span>,
      <span class="text-green-400">improved</span> and
      <span class="text-red-500">fixed</span> if
      <span class="text-yellow-400">broken</span>. Here are some of the
      projects I have been <span class="text-blue-600">blessed</span> to
      <span class="font-superstar text-green-600">work on and learn from</span>
    </div>
    <div class="cols-2-10">
      <div class="text-normal p-5 sm:p-10 flex flex-row flex-wrap justify-evenly">
        <ProjectCard
          title="UI library"
          usedTech="VueJS"
          description="A library with UI components"
          imageName="library"
        />
        <ProjectCard
          title="TLC"
          usedTech="ReactJS, TailwindCss"
          description="A e-commerce website for a dentist accessories company"
          imageName="e-commerce"
        />
        <ProjectCard title="" usedTech="" />
        <ProjectCard title="" usedTech="" />
        <ProjectCard title="" usedTech="" />
        <ProjectCard title="" usedTech="" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/projectCard.vue';

export default {
  name: 'WebDevPage',
  components: {
    ProjectCard,
  },
};
</script>
