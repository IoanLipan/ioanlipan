<template>
  <div class="grid-of-12-container py-16 md:py-20 bg-slate-800 font-mono">
    <div class="col-start-3 col-span-8 text-center">
      <div class="text-white text-2xl md:text-4xl mb-16">
        Sorry, this page doesn't exist! 😔
      </div>
      <router-link
        class="p-5 bg-slate-500 hover:bg-slate-600 text-white text-2xl rounded-xl"
        :to="{ name: 'home' }"
      >
        Back To Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Not-found',
  title: 'Ioan Lipan | Error 404',
};
</script>
