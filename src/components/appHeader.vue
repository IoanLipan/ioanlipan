<!-- eslint-disable max-len -->
<template>
  <nav class="h-[72px] md:h-20 z-40 font-mono sm:mb-10">
    <!-- desktop menu -->
    <div class="hidden lg:block">
      <div class="w-full fixed bg-black text-white flex justify-between items-center p-4 px-8">
        <div class="flex gap-5 items-center">
          <router-link to="/" @click="closeAboutMeDesktop()">
            <img src="../assets/ILLogo.png" class="h-10 w-auto" />
          </router-link>
          <HeaderMenuItem title="Ioan Lipan" description="WEB DEVELOPER" class="text-3xl tracking-widest" link="/" />
        </div>
        <HeaderMenuItem class="text-2xl cursor-pointer hidden" title="💰 Freelance services" link="/services" />
        <div class="flex flex-col z-40">
          <div class="text-3xl cursor-pointer flex items-center" @click="toggleAboutMeDesktop"><SvgIcon name="info" />About Me</div>
          <div
            v-if="showAboutMeDesktop"
            class="text-3xl absolute top-20 right-0 flex flex-col gap-3 pl-4 pr-2 pb-3 bg-black rounded-bl-2xl"
            v-motion-roll-right
          >
            <HeaderMenuItem iconName="thanosBig" title="Technologies" link="/tech-knowledge" @click="closeAboutMeDesktop" />
            <HeaderMenuItem iconName="engineerBig" title="Engineer" link="/engineer" @click="closeAboutMeDesktop" />
            <HeaderMenuItem iconName="athleteBig" title="Athlete" link="/athlete" @click="closeAboutMeDesktop" />
            <HeaderMenuItem iconName="solutionBig" title="Problem-Solver" link="/problem-solver" @click="closeAboutMeDesktop" />
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="lg:hidden">
      <div class="w-full fixed bg-black px-5 sm:p-5 text-white">
        <div class="grid grid-cols-5 items-center">
          <div
            class="space-y-2 w-8 ease-in transition-all duration-500 cursor-pointer"
            @click="toggleMenu"
          >
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
          <HeaderMenuItem
            title="Ioan Lipan"
            description="WEB DEVELOPER"
            class="text-2xl md:text-4xl col-span-3 text-center tracking-widest"
            link="/"
            @click="closeMenu()"
          />
          <div class="flex items-center justify-end col-start-5">
            <router-link to="/" @click="closeMenu()" >
          <img src="../assets/ILLogo.png" class="h-10 w-auto" />
          </router-link>
            </div>
        </div>
      </div>
      <div
        v-show="showMenu"
        class="h-[94vh] top-[60px] sm:h-[92vh] sm:top-[72px] fixed z-50 bg-black md:bg-opacity-90 text-white w-full md:w-[58vw] xl:w-[28vw] px-6"
      >
        <div class="h-full flex flex-col gap-8 text-4xl pt-10 text-center items-center md:items-start md:text-left">
          <div></div>
          <HeaderMenuItem iconName="webdev" title="Web Developer" link="/" @click="closeMenu" />
          <HeaderMenuItem iconName="thanosBig" title="Tech Stacks" link="/tech-knowledge" @click="closeMenu" />
          <div v-if="!showAboutMe" @click="toggleAboutMe" class="p-2 cursor-pointer flex items-center gap-3">
            <SvgIcon name="explore" />
            About me ↘️
          </div>
          <div v-else class="flex flex-col gap-8 p-2 cursor-pointer items-center md:items-start" @click="toggleAboutMe">
            <div class="flex items-center gap-3 justify-center">
              <SvgIcon name="explore" />
              About me ↗️
            </div>
            <HeaderMenuItem iconName="engineerBig" title="Engineer" link="/engineer" @click="closeMenu" v-motion-fade />
            <HeaderMenuItem iconName="athleteBig" title="Athlete" link="/athlete" @click="closeMenu" v-motion-fade />
            <HeaderMenuItem iconName="solutionBig" title="Problem Solver" link="/problem-solver" @click="closeMenu" v-motion-fade />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderMenuItem from './headerMenuItem.vue';
import SvgIcon from './svgIcon.vue';

export default {
  name: 'HeaderMenu',
  components: { HeaderMenuItem, SvgIcon },
  data() {
    return {
      showDropdown: false,
      showMenu: false,
      showAboutMe: false,
      showAboutMeDesktop: false,
    };
  },
  methods: {
    toggleAboutMe() {
      this.showAboutMe = !this.showAboutMe;
    },
    toggleAboutMeDesktop() {
      this.showAboutMeDesktop = !this.showAboutMeDesktop;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (!this.showMenu) this.showAboutMe = false;
    },
    closeMenu() {
      this.showMenu = false;
      this.showAboutMe = false;
    },
    closeAboutMeDesktop() {
      this.showAboutMeDesktop = false;
    },
  },
};
</script>
