<!-- eslint-disable max-len -->
<template>
  <nav  v-motion-slide-left :delay="250" class="h-[72px] md:h-20 z-40 font-mono">
    <!-- desktop menu -->
    <div class="hidden lg:block">
      <div class="w-full fixed bg-black text-white flex justify-between items-center p-4 px-8">
        <div class="flex gap-5 items-center">
          <router-link to="/" @click="closeAboutMeDesktop()">
            <img src="../assets/ILLogo.png" class="h-10 w-auto" />
          </router-link>
          <HeaderMenuItem title="Ioan Lipan" description="WEB DEVELOPER" class="text-3xl tracking-widest" link="/" />
        </div>
        <HeaderMenuItem class="text-2xl cursor-pointer hidden" title="💰 My services" link="/services" />
        <div class="flex flex-col z-40">
          <div class="text-2xl cursor-pointer flex items-center" @click="toggleAboutMeDesktop"><SvgIcon name="info" /> About Me</div>
          <div
            v-if="showAboutMeDesktop"
            class="text-xl absolute top-20 right-0 flex flex-col gap-3 pl-4 pb-3 bg-black rounded-bl-2xl"
            v-motion-roll-right
          >
            <HeaderMenuItem iconName="thanos" title="Technologies" link="/tech-knowledge" @click="closeAboutMeDesktop" />
            <HeaderMenuItem iconName="engineer" title="Engineer" link="/engineer" @click="closeAboutMeDesktop" />
            <HeaderMenuItem iconName="athlete" title="Athlete" link="/athlete" @click="closeAboutMeDesktop" />
            <HeaderMenuItem iconName="solution" title="Problem-Solver" link="/problem-solver" @click="closeAboutMeDesktop" />
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="lg:hidden">
      <div class="w-full fixed bg-black p-5 text-white">
        <div class="grid grid-cols-4 items-center">
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
          <router-link
            class="text-2xl md:text-4xl col-span-2 text-center tracking-widest"
            to="/"
            @click="closeMenu()"
          >
            Ioan Lipan
          </router-link>
          <router-link to="/" @click="closeMenu()" class="col-start-4 place-self-end">
            <img src="../assets/ILLogo.png" class="h-10 w-auto" />
          </router-link>
        </div>
      </div>
      <div
        v-show="showMenu"
        class="h-[92vh] top-[72px] fixed z-50 bg-black md:bg-opacity-90 text-white w-full md:w-[36vw] xl:w-[28vw] px-6"
      >
        <div class="h-full flex flex-col gap-8 text-3xl pt-10 text-center md:text-left">
          <div></div>
          <HeaderMenuItem title="🧠 Web-Developer" link="/" @click="closeMenu" />
          <div v-if="!showAboutMe" @click="toggleAboutMe" class="p-2 cursor-pointer">
            🦁 About me ↘️
          </div>
          <div v-else class="flex flex-col gap-8 p-2 cursor-pointer" @click="toggleAboutMe">
            🦁 About me ↗️
            <HeaderMenuItem title="🔧 Engineer" link="/engineer" @click="closeMenu" v-motion-fade />
            <HeaderMenuItem title="⛹🏼‍♂️ Athlete" link="/athlete" @click="closeMenu" v-motion-fade />
            <HeaderMenuItem
              title="🧐 Problem-Solver"
              link="/problem-solver"
              @click="closeMenu"
              v-motion-fade
            />
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
