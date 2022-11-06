<!-- eslint-disable max-len -->
<template>
  <div class="grid-of-12-container bg-slate-800">
    <div
      class="p-4 md:p-0 col-start-1 col-span-12 font-mono text-white md:col-start-2 md:col-span-10"
    >
      <h1
        class="text-4xl md:text-6xl text-center font-superstar p-4 py-6 tracking-wider"
        v-motion-pop
      >
        My therapy is sport and healthy competition!
      </h1>
      <p
        class="text-sm md:text-lg text-center px-8 py-6 tracking-wide rounded-2xl"
        v-motion-pop
        :delay="delay"
      >
        &emsp; I like to keep my mind and my body in shape. This helps me reach my maximum
        potential. There is a saying: Mens sano in corpore sano . If problem-solving keeps the brain
        active and healthy, the same is with sports and the body. Nowadays, most of the people are
        negligent towards their body, especially programmers. The body reacts to what it is doing
        most of the time. Having a sedentary job and 10+ hours of screentime should not be a
        motivation to adopt a sedentary lifestyle. In order to compensate for the physical
        inactivity of my job, I play every sport that I can, whenever I have the occasion.
      </p>
      <TextWithRightImage v-motion-pop title="Basketball" image="basketball.jpg" text="I always liked basketball, but since it requires practice, I only started to be a good basketball player when I started practicing more and training even more. The feeling was the same as in programming. The better I got at scoring the ball, the more I loved the game and the more competitive I got. I am now pursuing a shooter role in a division 2 league in my country Romania, so good luck to me :D" />
      <TextWithLeftImage title="Kick-Boxing" image="kickbox.jpeg" text="Kickboxing thaught me a lot about respect, conduite and hard work. If you want a sport that is very challenging on your cardio-vascular system, pick kickboxing. The amount of training that you have to do in order to perform good in kickboxing and not get tired and gas you in the first 2 minutes is insane!" />
      <TextWithRightImage title="Gym" image="gym.jpeg" text="There are many things I like about the weight room. One of them is the fact that it helps me grow in strength and muscle size, but I use the gym to get better at movements that I want to improve for the sports I play. It helps me focus on my weaker movements like jumping." />
      <TextWithLeftImage title="Ping-Pong" image="pingpong.jpeg" text="Ping pong is a great sport in my opinion. It demonstrates that consistency is key to perfecting and that the little things count. I also like the fact that it trains the agility, dexterity and the reaction time." />
    </div>
  </div>
</template>

<script>
import TextWithLeftImage from '../components/textWithLeftImage.vue';
import TextWithRightImage from '../components/textWithRightImage.vue';

export default {
  name: 'AthletePage',
  data() {
    return {
      delay: 200,
    };
  },
  components: { TextWithRightImage, TextWithLeftImage },
};
</script>
