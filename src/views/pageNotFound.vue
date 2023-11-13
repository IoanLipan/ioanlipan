<template>
  <div class="grid-of-12-container py-16 md:py-20 min-w-full bg-neutral">
    <div class="col-start-3 col-span-8 text-center">
      <div class="text-textcolor text-2xl md:text-4xl mb-16">
        Sorry, this page doesn't exist! 😔
      </div>
      <router-link class="p-5 bg-secondary hover:bg-opacity-90 text-neutral text-2xl rounded-xl" :to="{ name: 'home' }">
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
