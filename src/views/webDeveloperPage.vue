<template>
  <div class="grid-of-12-container w-[100vw] mx-auto">
    <article
      class="text-white md:text-2xl text-center font-mono tracking-widest leading-relaxed
      col-start-2 col-span-10 md:col-start-4 md:col-span-6 py-10"
      v-motion-fade>
      My dev mindstate: anything can be <br />
      <span class="text-lime-400" v-motion-pop :delay="300">&lt;created&gt;</span> =>
      <span class="text-green-500" v-motion-pop :delay="500">&lt;improved/&gt;</span> and
      <span class="text-red-500" v-motion-pop :delay="800">&lt;fixed&gt;</span> if
      <span class="text-yellow-400" v-motion-pop :delay="1000">&lt;broken/&gt;</span>
    </article>
    <div class="col-start-1 col-span-12 md:col-start-2 md:col-span-10">
      <article class="text-normal p-5 lg:px-10 flex flex-row flex-wrap justify-evenly">
        <ProjectCard
          title="What to wear"
          usedTech="ReactJS, TailwindCSS, genez.io"
          description="A weather app with suggestions for dressing properly for the weather"
          imageName="weather"
          url="https://rose-junior-opossum.app.genez.io/"
          v-motion-roll-top
        />
        <ProjectCard
          title="UI library"
          usedTech="VueJS"
          description="A library with homogenized UI components for developers"
          imageName="library"
          workRelated
          v-motion-roll-top
        />
        <ProjectCard
          title="TLC"
          usedTech="ReactJS, TailWindCSS"
          description="A e-commerce website for a dentist accessories company"
          imageName="e-commerce"
          workRelated
          url="https://theloupescompany.com/"
          v-motion-roll-bottom
        />
        <ProjectCard
          title="AVM Assistant"
          usedTech="ReactJS, DJango"
          description="A web-app to help Auditive, Visualy or Motricly impaired people"
          imageName="wheelchair"
          url="https://github.com/IoanLipan/avm_assistant"
          v-motion-roll-top
        />
        <div
          v-if="!showMore"
          class="text-white bg-slate-600 px-5 py-4 rounded-3xl text-center cursor-pointer
         hover:bg-slate-500 font-mono text-xl"
          @click="ShowMoreProjects()"
        >
          ✨ Show More Programming Projects ...
        </div>
        <ProjectCard
          v-if="showMore"
          title="Custom Video Browser"
          usedTech="VueJS, YouTubeAPI"
          description="A custom video browser connected to the YouTubeAPI"
          imageName="video"
          url="https://github.com/IoanLipan/Video-browser"
          v-motion-roll-top
        />
        <ProjectCard
          v-if="showMore"
          title="Traffic Sign Detector"
          usedTech="YOLOv4"
          description="A trained model that detects traffic signs with AI"
          imageName="sign"
          url="https://github.com/IoanLipan/Traffic-sign-detection"
          v-motion-roll-top
        />
        <ProjectCard
          v-if="showMore"
          title="TicTacToe Game"
          usedTech="Java"
          description="TicTacToe that can be played in the console"
          imageName="game"
          url="https://github.com/IoanLipan/TicTacToe"
          v-motion-roll-bottom
        />
        <ProjectCard
          v-if="showMore"
          title="BattlePlanes Game"
          usedTech="Python"
          description="A game of Battleplanes that can be played in the console"
          imageName="plane"
          url="https://github.com/IoanLipan/TicTacToe"
          v-motion-roll-bottom
        />
      </article>
      <div
        v-if="showMore"
        class="text-white bg-slate-600 py-4 rounded-3xl text-center mb-5 cursor-pointer
       hover:bg-slate-500 font-mono text-xl w-[240px] mx-auto"
        @click="ShowLessProjects()"
      >
        ⏫ Show less ...
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/projectCard.vue';

export default {
  name: 'WebDevPage',
  title: 'Ioan Lipan | Web-Dev',
  components: {
    ProjectCard,
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
