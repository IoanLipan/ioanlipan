<template>
  <div>
    <article class="md:text-2xl text-center tracking-widest leading-relaxed
      col-start-2 col-span-10 md:col-start-4 md:col-span-6 py-10" v-motion-fade>
      My dev mindstate: anything can be <br />
      <span class="text-lime-400" v-motion-pop :delay="250">&lt;created&gt;</span> =>
      <span class="text-green-500" v-motion-pop :delay="500">&lt;improved/&gt;</span> and
      <span class="text-red-500" v-motion-pop :delay="750">&lt;fixed&gt;</span> if
      <span class="text-yellow-400" v-motion-pop :delay="1000">&lt;broken/&gt;</span>
    </article>
    <h1>Landing</h1>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  title: 'Ioan Lipan',
};
</script>
