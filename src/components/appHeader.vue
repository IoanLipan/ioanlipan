<template>
  <nav class="h-[72px] md:h-20">
    <div class="w-full fixed bg-black p-5 text-white">
      <div class="grid grid-cols-4 items-center">
        <div class="space-y-2 w-8 ease-in transition-all duration-500" @click="toggleMenu">
          <div
            :class="[
              'h-0.5 bg-gray-200 transition-all duration-400',
              showMenu ? 'rotate-45 translate-y-[5px]' : '',
            ]"
          />
          <div
            :class="['h-0.5 bg-gray-200 transition-all duration-300', showMenu ? 'hidden' : '']"
          />
          <div
            :class="[
              'h-0.5 bg-gray-200 transition-all duration-400',
              showMenu ? '-rotate-45 -translate-y-[5px]' : '',
            ]"
          />
        </div>
        <h1 class="font-cinzel text-2xl md:text-4xl col-span-2 text-center">Ioan Lipan</h1>
      </div>
    </div>
    <div
      v-show="showMenu"
      class="h-[92vh] top-[72px] fixed z-50 bg-black md:bg-opacity-90
      text-white w-full md:w-[36vw] xl:w-[20vw] px-6" >
      <div class="h-full flex flex-col justify-evenly text-3xl pl-5 text-center md:text-left">
        <HeaderMenuItem title="Home" link="/" @click="closeMenu" />
        <HeaderMenuItem title="Web-Developer" link="/web-dev" @click="closeMenu" />
        <HeaderMenuItem title="Engineer" link="/engineer" @click="closeMenu" />
        <HeaderMenuItem title="Athlete" link="/athlete" @click="closeMenu" />
        <HeaderMenuItem title="Problem-Solver" link="/problem-solver" @click="closeMenu" />
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
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
    onClickAbout() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
