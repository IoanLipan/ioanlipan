<template>
  <div class="grid-of-12-container">
    <div class="text-white text-2xl text-center
      col-start-2 col-span-10 md:col-start-4 md:col-span-6 pt-10">
      Programming is my passion. My mindstate is that anything can be
      <span class="hover:text-blue-400 cursor-pointer">created</span>,
      <span class="hover:text-green-400 cursor-pointer">improved</span> and
      <span class="hover:text-red-500 cursor-pointer">fixed</span> if
      <span class="hover:text-yellow-400 cursor-pointer">broken</span>. Here are some of the
      projects I have been <span class="hover:text-blue-600 cursor-pointer">blessed</span> to
      <span class="font-bold">work on</span> and
      <span class="text-bold underline">learn from</span>:
    </div>
    <div class="cols-2-10">
      <div class="text-normal p-10 flex flex-row flex-wrap justify-evenly">
        <ProjectCard
          title="UI library"
          usedTech="VueJS"
          description="A library with UI components"
          imageName="library"
        />
        <ProjectCard
          title="TheLoupesCompany"
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
