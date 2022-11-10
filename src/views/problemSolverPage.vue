<template>
  <div class="grid-of-12-container">
    <div class="cols-2-10 mt-10 font-mono text-white text-center">
      <h1 class="text-3xl font-semibold">I'm always looking a new challenge!</h1>
      <p class="text-lg">Anything that implies being smart and adaptable</p>
      <swiper
        :modules="modules"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        class="my-10"
      >
        <swiper-slide v-for="problem in swiperProblems" :key="problem.description">
          <ProblemCard
            :image="problem.image"
            :title="problem.title"
            :description="problem.description"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Autoplay, Pagination } from 'swiper';
import { ref } from 'vue';
import ProblemCard from '../components/problemCard.vue';
import 'swiper/swiper-bundle.min.css';

export default {
  name: 'ProblemSolverPage',
  components: { Swiper, SwiperSlide, ProblemCard },
  setup() {
    const swiperProblems = ref([
      {
        image: 'rubiks.jpeg',
        title: 'Rubiks Cube',
        description: "I can solve a rubik's cube in less than a minute",
      },
      {
        image: 'chess.jpeg',
        title: 'Chess',
        description: 'I think chess is the best strategy game you can play',
      },
      {
        image: 'jigsawPuzzle.jpeg',
        title: 'Jigsaw Puzzle',
        description: 'These kind of puzzles train your patience. Trust me.',
      },
      {
        image: 'otherRubiks.jpeg',
        title: 'Other Rubiks Puzzles',
        description: 'I tried almost evey variation of rubik puzzle',
      },
      {
        image: 'mathLogic.jpeg',
        title: 'Math and logic problems',
        description: 'I love math and logic',
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperProblems };
  },
};
</script>
