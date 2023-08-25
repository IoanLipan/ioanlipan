<template>
  <div class="grid-of-12-container w-[100vw] mx-auto font-mono text-white">
    <article class="md:text-2xl text-center tracking-widest leading-relaxed
      col-start-2 col-span-10 md:col-start-4 md:col-span-6 py-10" v-motion-fade>
      My dev mindstate: anything can be <br />
      <span class="text-lime-400" v-motion-pop :delay="250">&lt;created&gt;</span> =>
      <span class="text-green-500" v-motion-pop :delay="500">&lt;improved/&gt;</span> and
      <span class="text-red-500" v-motion-pop :delay="750">&lt;fixed&gt;</span> if
      <span class="text-yellow-400" v-motion-pop :delay="1000">&lt;broken/&gt;</span>
    </article>
    <div class="col-start-1 col-span-12 md:col-start-2 md:col-span-10 flex flex-col items-center">
      <RouterLink v-motion-pop :delay="600" to="/tech-knowledge" class="flex p-2 gap-2 mx-3 rounded-3xl text-center
          cursor-pointer bg-slate-600 hover:bg-slate-500 active:bg-slate-700 border-slate-500 border-4">
        <SvgIcon name="click" class="rotate-90 my-auto" />
        <div class="min-w-[165px]">
          Click here
          <br />
          to see my stack
        </div>
        <SvgIcon name="click" class="-rotate-90 scale-x-[-1] my-auto" />
      </RouterLink>
      <p v-motion-pop :delay="700" class="text-center py-4 md:py-8">
        OR
      </p>
      <h3 v-motion-pop :delay="800" class="text-center px-8 md:text-2xl pb-5 md:pb-10 flex justify-between items-center">
        <SvgIcon name="chevron-down" />
        Check out the projects I worked on below:
        <SvgIcon name="chevron-down" />
      </h3>
      <article v-motion-pop :delay="900" class="text-normal p-5 lg:px-10 flex flex-row flex-wrap justify-evenly w-full">
        <ProjectCard title="What to wear" usedTech="ReactJS, TailwindCSS, genez.io"
          description="A weather app with suggestions for dressing properly for the weather" imageName="weather"
          url="https://rose-junior-opossum.app.genez.io/" v-motion-roll-top />
        <ProjectCard title="UI library" usedTech="VueJS"
          description="A library with homogenized UI components for developers" imageName="library" workRelated
          v-motion-roll-top />
        <ProjectCard title="Guardian" usedTech="Shopify, CSS" url="https://guardian-armour-up.myshopify.com/"
          description="A e-commerce website for a phone protection company" imageName="protection"
          v-motion-roll-top />
        <ProjectCard title="TLC" usedTech="ReactJS, TailWindCSS"
          description="A e-commerce website for a dentist accessories company" imageName="e-commerce" workRelated
          url="https://theloupescompany.com/" v-motion-roll-bottom />
          <div v-if="!showMore" class="text-white bg-slate-600 px-5 py-4 rounded-3xl text-center cursor-pointer
          hover:bg-slate-500 active:bg-slate-700 font-mono text-xl" @click="ShowMoreProjects()">
          ✨ Show More Programming Projects ...
        </div>
        <ProjectCard v-if="showMore" title="AVM Assistant" usedTech="ReactJS, DJango"
          description="A web-app to help Auditive, Visualy or Motricly impaired people" imageName="wheelchair"
          url="https://github.com/IoanLipan/avm_assistant" v-motion-roll-top />
        <ProjectCard v-if="showMore" title="Custom Video Browser" usedTech="VueJS, YouTubeAPI"
          description="A custom video browser connected to the YouTubeAPI" imageName="video"
          url="https://github.com/IoanLipan/Video-browser" v-motion-roll-top />
        <ProjectCard v-if="showMore" title="Traffic Sign Detector" usedTech="YOLOv4"
          description="A trained model that detects traffic signs with AI" imageName="sign"
          url="https://github.com/IoanLipan/Traffic-sign-detection" v-motion-roll-top />
        <ProjectCard v-if="showMore" title="TicTacToe Game" usedTech="Java"
          description="TicTacToe that can be played in the console" imageName="game"
          url="https://github.com/IoanLipan/TicTacToe" v-motion-roll-bottom />
        <ProjectCard v-if="showMore" title="BattlePlanes Game" usedTech="Python"
          description="A game of Battleplanes that can be played in the console" imageName="plane"
          url="https://github.com/IoanLipan/TicTacToe" v-motion-roll-bottom />
      </article>
      <div v-if="showMore" class="text-white bg-slate-600 py-4 rounded-3xl text-center mb-5 cursor-pointer
       hover:bg-slate-500 active:bg-slate-700 font-mono text-xl w-[240px] mx-auto" @click="ShowLessProjects()">
        ⏫ Show less ...
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/svgIcon.vue';
import ProjectCard from '../components/projectCard.vue';

export default {
  name: 'WebDevPage',
  title: 'Ioan Lipan | Web-Dev',
  components: {
    ProjectCard,
    SvgIcon,
  },
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    ShowMoreProjects() {
      this.showMore = true;
    },
    ShowLessProjects() {
      this.showMore = false;
      window.scroll(0, 0);
    },
  },
};
</script>
