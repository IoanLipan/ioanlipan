<template>
  <div class="mx-auto w-full text-center text-textcolor">
    <div class="text-5xl font-light pt-[10%] px-5">Hello! I am <span
        class="font-semibold text-secondary tracking-wider">Ioan
        Lipan</span>
    </div>
    <div class="tracking-widest pt-4 font-thin text-2xl px-5">
      I am here to help you <span class="text-secondary font-medium">digitalize your business!</span>
      <br>
      <button class="p-2 my-8 px-3 rounded-2xl bg-secondary text-accent text-lg font-extralight" @click="scrollDown">
        Let's get in touch and start working on it!
      </button>
    </div>
    <div class="bg-primary text-accent box pb-20">
      <h2 class="title pt-16 pb-6 lg:pt-32 lg:pb-12">Why Digitalize?</h2>
      <div class="text-xl tracking-wider font-light px-10 md:max-w-[50%] mx-auto pb-20">
        In today's fast-paced digital landscape, it's crucial for businesses to have a strong online presence. A
        well-designed website not only attracts more customers but also gives your business the digital footprint it
        deserves.
      </div>
      <div class="flex justify-between bg-neutral py-12 box2 max-w-2xl mx-auto">
        <router-link to="/tech-knowledge" class="ribbon-left py-2">
          See Tech Stacks
        </router-link>
        <router-link to="/projects" class="ribbon-middle flex items-center my-2">
          See My Projects
        </router-link>
        <router-link to="/engineer" class="ribbon-right py-2">
          See My Califications
        </router-link>
      </div>
      <h2 class="title pt-10 pb-6 lg:pt-20 lg:pb-12">Services</h2>
      <section class="flex flex-wrap md:px-10 lg:px-20">
        <article class="article-landing">
          <h3 class="article-title">Website Design</h3>
          <ul>
            <li>Custom layouts and themes</li>
            <li>Mobile-responsive designs</li>
            <li>UI/UX focused</li>
          </ul>
        </article>

        <article class="article-landing">
          <h3 class="article-title">Web Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Front-end frameworks like React and Vue.js</li>
            <li>E-commerce solutions</li>
          </ul>
        </article>

        <article class="article-landing">
          <h3 class="article-title">SEO Optimization</h3>
          <ul>
            <li>Meta tags and descriptions</li>
            <li>Google Analytics integration</li>
            <li>On-page and off-page SEO</li>
          </ul>
        </article>

        <article class="article-landing">
          <h3 class="article-title">Maintenance and Support</h3>
          <ul>
            <li>Regular updates</li>
            <li>Debugging and problem-solving</li>
            <li>24/7 customer support</li>
          </ul>
        </article>
      </section>
    </div>
    <div class="my-24 select-none cursor-pointer flex justify-center" ref="cube">
      <xyzCube>
        <template #front>
          <div>Code is like humor. When you have to explain it, it's bad. -Cory House</div>
        </template>
        <template #back>
          <div>Code never lies; comments do. - Ron Jeffries</div>
        </template>
        <template #left>
          <div>Debugging is like being the detective in a crime movie. - Filipe Fortes</div>
        </template>
        <template #right>
          <div>Talk is cheap. Show me the code. - Linus Torvalds</div>
        </template>
        <template #top>
          <SvgIcon name="solutionBig" class="scale-[2.5]" />
        </template>
        <template #bottom>
          <SvgIcon name="webdevBig" class="scale-[2.5]" />
        </template>
      </xyzCube>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/svgIcon.vue';
import xyzCube from '../components/xyzCube.vue';

export default {
  name: 'LandingPage',
  title: 'Ioan Lipan',
  components: { xyzCube, SvgIcon },
  methods: {
    scrollDown() {
      this.$nextTick(() => {
        const component = this.$refs.cube;
        const position = component.offsetTop + component.offsetHeight;
        window.scrollTo({ top: position, behavior: 'smooth' });
      });
    },
  },
};
</script>

<style>
.box {
  --mask:
    conic-gradient(from 130deg at top, #0000, #000 1deg 99deg, #0000 100deg) top/71.51px 51% repeat-x,
    conic-gradient(from -50deg at bottom, #0000, #000 1deg 99deg, #0000 100deg) bottom/71.51px 51% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.box2 {
  --mask:
    radial-gradient(63.09px at 50% 85.50px, #000 99%, #0000 101%) calc(50% - 60px) 0/120px 51% repeat-x,
    radial-gradient(63.09px at 50% -55.5px, #0000 99%, #000 101%) 50% 30px/120px calc(51% - 30px) repeat-x,
    radial-gradient(63.09px at 50% calc(100% - 85.50px), #000 99%, #0000 101%) 50% 100%/120px 51% repeat-x,
    radial-gradient(63.09px at 50% calc(100% + 55.50px), #0000 99%, #000 101%) calc(50% - 60px) calc(100% - 30px)/120px calc(51% - 30px) repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.ribbon-left,
.ribbon-middle,
.ribbon-right {
  --r: 20px;
  line-height: 1.8;
}

.ribbon-left {
  border-block: .5em solid #0000;
  padding-inline: .25em calc(var(--r) + .25em);
  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%, calc(100% - var(--r)) calc(100% - .25em), 100% 50%, calc(100% - var(--r)) .25em);
  background:
    radial-gradient(.2em 50% at left, #000a, #0000) border-box,
    var(--secondary) padding-box;
}

.ribbon-middle {
  padding: .1em calc(var(--r) + .3em);
  line-height: 1.8;
  clip-path: polygon(0 0, 100% 0, calc(100% - var(--r)) 50%, 100% 100%, 0 100%, var(--r) 50%);
  background: var(--secondary);
  width: fit-content;
}

.ribbon-right {
  border-block: .5em solid #0000;
  padding-inline: calc(var(--r) + .25em) .25em;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, var(--r) calc(100% - .25em), 0 50%, var(--r) .25em);
  background:
    radial-gradient(.2em 50% at right, #000a, #0000) border-box,
    var(--secondary) padding-box;
}
</style>
