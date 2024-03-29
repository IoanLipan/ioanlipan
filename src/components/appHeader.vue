<!-- eslint-disable max-len -->
<template>
  <nav ref="menuRef" class="h-[72px] md:h-20 z-40 sm:mb-4 lg:mb-6">
    <!-- desktop menu -->
    <div class="hidden lg:block">
      <div class="w-full fixed bg-primary text-accent flex justify-between items-center p-4 px-8">
        <div class="flex gap-5 items-center">
          <router-link to="/" @click="closeAboutMeDesktop()">
            <img src="../assets/ILLogo.png" class="h-10 w-auto" />
          </router-link>
          <HeaderMenuItem title="Ioan Lipan" description="WEB DEVELOPER" class="text-3xl tracking-[0.2em]" link="/" />
        </div>
        <HeaderMenuItem class="text-2xl cursor-pointer hidden" title="💰 Freelance services" link="/services" />
        <div class="flex">
          <div class="theme-toggle-container">
            <label class="switch">
              <input type="checkbox" v-model="darkMode" @change="switchTheme">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex flex-col z-40">
            <div class="text-3xl cursor-pointer flex items-center" @click="toggleAboutMeDesktop">
              <SvgIcon name="info" />About Me
            </div>
            <div v-if="showAboutMeDesktop"
              class="text-3xl absolute top-20 right-0 flex flex-col gap-3 pl-4 pr-2 pb-3 bg-primary rounded-bl-2xl"
              v-motion-roll-right>
              <HeaderMenuItem iconName="webdevBig" title="Projects" link="/projects" @click="closeAboutMeDesktop" />
              <HeaderMenuItem iconName="thanosBig" title="Technologies" link="/tech-knowledge"
                @click="closeAboutMeDesktop" />
              <HeaderMenuItem iconName="engineerBig" title="Engineer" link="/engineer" @click="closeAboutMeDesktop" />
              <HeaderMenuItem iconName="athleteBig" title="Athlete" link="/athlete" @click="closeAboutMeDesktop" />
              <HeaderMenuItem iconName="solutionBig" title="Problem-Solver" link="/problem-solver"
                @click="closeAboutMeDesktop" />
              <HeaderMenuItem iconName="travelBig" title="Travel" link="/travel" @click="closeAboutMeDesktop" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="lg:hidden">
      <div class="w-full fixed bg-primary px-5 sm:py-2 text-accent">
        <div class="grid grid-cols-5 items-center">
          <div class="space-y-2 w-8 ease-in transition-all duration-500 cursor-pointer" @click="toggleMenu">
            <div :class="[
              'h-0.5 bg-accent transition-all duration-400',
              showMenu ? 'rotate-45 translate-y-[5px]' : '',
            ]" />
            <div :class="['h-0.5 bg-accent transition-all duration-300', showMenu ? 'hidden' : '']" />
            <div :class="[
              'h-0.5 bg-accent transition-all duration-400',
              showMenu ? '-rotate-45 -translate-y-[5px]' : '',
            ]" />
          </div>
          <HeaderMenuItem title="Ioan Lipan" description="WEB DEVELOPER"
            class="text-2xl md:text-4xl col-span-3 text-center tracking-[0.25em]" link="/" @click="closeMenu()" />
          <div class="flex items-center justify-end col-start-5">
            <div class="theme-toggle-container">
              <label class="switch">
                <input type="checkbox" v-model="darkMode" @change="switchTheme">
                <span class="slider round"></span>
              </label>
            </div>
            <router-link to="/" @click="closeMenu()" class="hidden sm:block">
              <img src="../assets/ILLogo.png" class="h-10 w-auto" />
            </router-link>
          </div>
        </div>
      </div>
      <div v-show="showMenu"
        class="h-[94vh] top-[60px] sm:h-[92vh] sm:top-[72px] md:top-[88px] fixed z-50 bg-primary md:bg-opacity-80 text-accent w-full md:w-[38vw] px-6">
        <div
          class="h-full w-full md:w-fit pt-10 flex flex-col gap-4 text-base sm:text-lg lg:text-3xl items-start text-left">
          <HeaderMenuItem iconName="webdev" title="Projects" link="/projects" @click="closeMenu" />
          <HeaderMenuItem iconName="thanos" title="Tech Stacks" link="/tech-knowledge" @click="closeMenu" />
          <HeaderMenuItem v-if="!this.showAboutMe" iconName="explore" title="More about me &#8600;"
            @click.stop="toggleAboutMe($event)" v-motion-fade />
          <HeaderMenuItem v-else iconName="explore" title="Less about me &#8599;" @click.stop="toggleAboutMe($event)"
            v-motion-fade />
          <HeaderMenuItem v-if="this.showAboutMe" iconName="engineer" title="Engineer" link="/engineer" @click="closeMenu"
            v-motion-fade />
          <HeaderMenuItem v-if="this.showAboutMe" iconName="athlete" title="Athlete" link="/athlete" @click="closeMenu"
            v-motion-fade />
          <HeaderMenuItem v-if="this.showAboutMe" iconName="solution" title="Problem Solver" link="/problem-solver"
            @click="closeMenu" v-motion-fade />
          <HeaderMenuItem v-if="this.showAboutMe" iconName="travel" title="Travel" link="/travel" @click="closeMenu"
            v-motion-fade />
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
      showMenu: false,
      showAboutMe: false,
      showAboutMeDesktop: false,
      darkMode: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    switchTheme() {
      if (this.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    },
    toggleAboutMe(event) {
      event.stopPropagation();
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
    handleClickOutside(event) {
      if (this.showMenu || this.showAboutMeDesktop || this.showAboutMe) {
        const { menuRef } = this.$refs;
        if (!menuRef.contains(event.target) && event.target !== menuRef) {
          this.closeMenu();
          this.closeAboutMeDesktop();
        }
      }
    },
  },
};
</script>

<style>
.theme-toggle-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 640px) {
    padding-right: 20px;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked+.slider {
  background-color: #FF4500;
}

input:checked+.slider:before {
  transform: translateX(26px);
}
</style>
