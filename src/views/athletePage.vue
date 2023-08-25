<!-- eslint-disable max-len -->
<template>
  <div class="grid-of-12-container">
    <div class="p-4 md:p-0 col-start-1 col-span-12 font-mono text-white md:col-start-2 md:col-span-10">
      <h1 class="text-4xl md:text-5xl text-center font-superstar p-4 pb-4 pt-10 tracking-wider" v-motion-pop>
        Mens sano in corpore sano!
      </h1>
      <p class="text-sm md:text-lg text-center px-8 py-6 tracking-wide rounded-2xl" v-motion-pop :delay="delay">
        Some of the sports I enjoy are:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SportCard
          v-for="article in athleteArticles"
          :key="article.title"
          :title="article.title"
          :text="article.text"
          :icon="article.icon"
          :image="article.image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SportCard from '../components/sportCard.vue';

export default {
  name: 'AthletePage',
  title: 'Ioan Lipan | Athlete',
  components: { SportCard },
  setup() {
    /* eslint-disable global-require */
    const athleteArticles = ref([
      {
        articleNumber: 1,
        title: 'Basketball',
        image: require('../assets/images/basketball.jpeg'),
        icon: 'basketball',
        text: "Basketball has always been a passion of mine. Like programming, it demands dedication, practice, and an evolving mindset. As my skills improved, so did my love for the game, fueling my competitive spirit. Here's to making every shot count!",
      },
      {
        articleNumber: 2,
        title: 'Kick-Boxing',
        image: require('../assets/images/kickbox.jpeg'),
        icon: 'kickbox',
        text: "Kickboxing has been more than just a sport for me; it's a lesson in respect, discipline, and perseverance. Beyond its physical demands, it tests your mental stamina. Ensuring you're not winded within the initial minutes necessitates rigorous cardiovascular training. Every session is a step closer to mastering the art.",
      },
      {
        articleNumber: 3,
        title: 'Swimming',
        image: require('../assets/images/swimming.jpeg'),
        icon: 'swimming',
        text: "Swimming, the dance of the water, offers a unique blend of relaxation and intense workout. It strengthens both the mind and body, teaching the essence of rhythm and breath control. Beyond being an excellent cardiovascular exercise, it's a meditation, a moment of synergy between human and water.",
      },
      {
        articleNumber: 4,
        title: 'Gym',
        image: require('../assets/images/gym.jpeg'),
        icon: 'gym',
        text: "The weight room offers more than just physical growth; it's a sanctuary for holistic development. While I appreciate the strength and muscle gains, my primary goal is to refine sport-specific movements. The gym allows me to focus on enhancing my weaker areas, such as my jumping technique.",
      },
      {
        articleNumber: 5,
        title: 'Ping-Pong',
        image: require('../assets/images/pingpong.jpeg'),
        icon: 'pingpong',
        text: "Ping pong, to me, epitomizes the importance of consistency and attention to detail. It's a game where every swift movement matters, honing agility, dexterity, and reaction time. It's not just about hitting the ball but mastering the rhythm of the game.",
      },
    ]);
    return { athleteArticles };
    /* eslint-enable global-require */
  },
  data() {
    return {
      delay: 200,
    };
  },
};
</script>
