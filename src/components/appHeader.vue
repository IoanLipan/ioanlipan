<template>
  <nav class="h-16 md:h-16">
    <!-- desktop menu -->
    <div class="hidden fixed w-full bg-black p-[10px] md:grid grid-cols-12 text-white">
      <div class="col-start-2 col-span-10 flex justify-between items-center">
        <!-- menu -->
        <HeaderMenuItem title="Ioan Lipan" link="/" class="text-normal" />
        <HeaderMenuItem title="Web-Developer" link="/web-dev" />
        <div @click="onClickAbout()" class="flex flex-col text-center items-center">
          <HeaderMenuItem class="z-10" title="About me" />
          <div
            v-if="showDropdown"
            class="flex flex-col absolute pt-10 bg-gray-800 border border-gray-800 rounded-xl"
          >
            <HeaderMenuItem title="Engineer" link="/engineer" />
            <HeaderMenuItem title="Athlete" link="/athlete" />
            <HeaderMenuItem title="Problem-Solver" link="/problem-solver" />
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="md:hidden w-full fixed bg-black p-6 text-white">
      <div v-if="!showMobileMenu" class="space-y-2 w-8" @click="toggleMenu">
        <div class="h-0.5 bg-gray-200" />
        <div class="h-0.5 bg-gray-200" />
        <div class="h-0.5 bg-gray-200" />
      </div>
      <div v-else class="space-y-2 w-8" @click="toggleMenu">
        <div class="w-8 h-0.5 bg-gray-200 rotate-45 translate-y-[10px]" />
        <div class="w-8 h-0.5 " />
        <div class="w-8 h-0.5 bg-gray-200 -rotate-45 translate-y-[-10px]" />
      </div>
      <div v-show="showMobileMenu" class="h-[92vh] z-50">
        <div class="h-full flex flex-col gap-10 text-3xl pl-5">
          <div></div>
          <HeaderMenuItem title="Home" link="/" @click="closeMenu" />
          <HeaderMenuItem title="Web-Developer" link="/web-dev" @click="closeMenu" />
          <HeaderMenuItem title="Engineer" link="/engineer" @click="closeMenu" />
          <HeaderMenuItem title="Athlete" link="/athlete" @click="closeMenu" />
          <HeaderMenuItem title="Problem-Solver" link="/problem-solver" @click="closeMenu" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderMenuItem from './headerMenuItem.vue';

export default {
  name: 'HeaderMenu',
  components: { HeaderMenuItem },
  data() {
    return {
      showDropdown: false,
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    closeMenu() {
      this.showMobileMenu = false;
    },
    onClickAbout() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
