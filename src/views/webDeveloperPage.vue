<template>
  <div class="grid-of-12-container">
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
