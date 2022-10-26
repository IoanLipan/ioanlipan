<template>
  <nav class="h-20 md:h-16">
    <!-- desktop menu -->
    <div class="hidden fixed w-full bg-indigo-800 p-2 md:grid grid-cols-12 text-white">
      <div class="col-start-2 col-span-10 flex justify-between items-center">
        <!-- menu -->
        <HeaderMenuItem title="Ioan Lipan" link="/" class="text-normal" />
        <div></div>
        <HeaderMenuItem title="Web-Developer" link="/web-dev" />
        <HeaderMenuItem title="Engineer" link="/engineer" />
        <HeaderMenuItem title="Athlete" link="/athlete" />
        <HeaderMenuItem title="Problem-Solver" link="/problem-solver" />
      </div>
    </div>
    <!-- mobile menu -->
    <div class="md:hidden w-full bg-indigo-800 p-5 text-white">
      asdfs
    </div>
  </nav>
</template>

<script>
import HeaderMenuItem from './headerMenuItem.vue';

export default {
  name: 'HeaderMenu',
  components: { HeaderMenuItem },
};
</script>
