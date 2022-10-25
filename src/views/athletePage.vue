<template>
  <div class="grid grid-cols-12">
    <div class="col-start-2 col-span-10">
      <div class="text-5xl text-center p-4 py-6 font-semibold">My therapy is sport!</div>
      <div class="text-xl bg-indigo-200 px-8 py-6 border-indigo-50 rounded-2xl">
        &emsp; &emsp; I like to keep my mind and my body in shape. This helps me reach my maximum
        potential. There is a saying:
        <HoverText text="Mens sano in corpore sano"></HoverText>
        . If problem-solving keeps the brain active and healthy, the same is with sports and the
        body. Nowadays, most of the people are negligent towards their body, especially programmers.
        The body reacts to what it is doing most of the time. Having a
        <HoverText text="sedentary job"></HoverText>
        and 10+ hours of screentime should not be a motivation to adopt a
        <HoverText text="sedentary lifestyle"></HoverText>
        . In order to compensate for the physical inactivity of my job, I play every sport that I
        can, whenever I have the occasion.
      </div>
      <TextWithImage
        title="Basketball"
        text="I always liked basketball, but since it requires practice,
            I only started to be a good basketball player when I started
            practicing more and training even more. The feeling was the same
            as in programming. The better I got at scoring the ball, the more I loved the
            game and the more competitive I got. I am now pursuing a shooter role in a division 2
            league in my country Romania, so good luck to me :D"
        imagePath='../assets/basketball1.jpg'
      />
      <TextWithImage
        title="KickBoxing"
        text="Kickboxing thaught me a lot about respect, conduite and hard work. If you want
        a sport that is very challenging on your cardio-vascular system, pick kickboxing.
        The amount of training that you have to do in order to perform good in kickboxing and not
        get tired and gas you in the first 2 minutes is insane!"
        imagePath='../assets/basketball1.jpg'
      />
      <TextWithImage
        title="Gym"
        text="There are many things I like about the weight room. One of them is the fact that it
        helps me grow in strength and muscle size, but I use the gym to get better at movements
        that I want to improve for the sports I play. It helps me focus on my weaker movements like
        jumping."
        imagePath='../assets/basketball1.jpg'
      />
      <TextWithImage
        title="Ping-Pong"
        text="Ping pong is a great sport in my opinion. It demonstrates that
            consistency is key to perfecting and that the little things count.
            I also like the fact that it trains the agility, dexterity and the
            reaction time."
        imagePath='../assets/basketball1.jpg'
        class="mb-10"
      />
    </div>
  </div>
</template>

<script>
import HoverText from '../components/hoverText.vue';
import TextWithImage from '../components/textWithImage.vue';

export default {
  name: 'AthletePage',
  components: { HoverText, TextWithImage },
};
</script>
