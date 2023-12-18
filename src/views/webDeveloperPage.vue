<template>
  <div class="grid-of-12-container w-[100vw] mx-auto text-textcolor">
    <article
      class="md:text-2xl text-center tracking-widest leading-relaxed col-start-2 col-span-10 md:col-start-3 md:col-span-8 py-10"
      v-motion-fade
    >
      Remember, anything is possible with the right approach!
    </article>
    <div
      class="col-start-1 col-span-12 md:col-start-2 md:col-span-10 flex flex-col items-center"
    >
      <RouterLink
        v-motion-pop
        :delay="600"
        to="/tech-knowledge"
        class="flex p-3 gap-2 mx-3 rounded-3xl text-center cursor-pointer bg-secondary hover:bg-opacity-90 group text-accent"
      >
        <SvgIcon
          name="click"
          class="rotate-90 group-hover:rotate-[450deg] point-finger"
        />
        <div class="min-w-[165px] text-accent point-finger">
          Click here
          <br />
          to see my stack
        </div>
        <SvgIcon
          name="click"
          class="-rotate-90 scale-x-[-1] group-hover:rotate-[270deg] point-finger"
        />
      </RouterLink>
      <p v-motion-pop :delay="700" class="text-center py-4 md:py-8">OR</p>
      <h3
        v-motion-pop
        :delay="800"
        class="text-center px-8 md:text-2xl pb-5 md:pb-10 flex justify-between items-center"
      >
        <SvgIcon name="chevron-down" class="stroke-textcolor" />
        <div>
          Check out the
          <span class="text-secondary font-semibold tracking-wider capitalize"
            >&nbsp;projects&nbsp;</span
          >
          I worked on below:
        </div>
        <SvgIcon name="chevron-down" class="stroke-textcolor" />
      </h3>
      <article
        v-motion-pop
        :delay="900"
        class="text-normal p-5 lg:px-10 flex flex-row flex-wrap justify-evenly w-full"
      >
        <!-- Projects displayed using v-for -->
        <ProjectCard
          v-for="(project, index) in displayedProjects"
          :key="index"
          :title="project.title"
          :hasImage="project.hasImage"
          :usedTech="project.usedTech"
          :workRelated="project.workRelated"
          :description="project.description"
          :imageURL="project.imageURL"
          :url="project.url"
          v-motion-roll-top
        />

        <!-- Toggle button for showing more projects -->
        <div v-if="!showMore" class="secondary-button" @click="showMore = true">
          ✨ Show More Programming Projects ...
        </div>
      </article>

      <!-- Toggle button for showing less projects -->
      <div
        v-if="showMore"
        class="secondary-button w-[240px]"
        @click="showMore = false"
      >
        ⏫ Show less ...
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../components/svgIcon.vue';
import ProjectCard from '../components/projectCard.vue';

export default {
  name: 'WebDevPage',
  title: 'Ioan Lipan | Web-Dev',
  components: {
    ProjectCard,
    SvgIcon,
  },
  data() {
    return {
      showMore: false,
      projects: [
        {
          title: 'Eat-n-Split',
          usedTech: 'ReactJS',
          description:
            'Calculate the check at a shared table!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/eat_n_split.webp'),
          url: 'https://eat-n-split-amber-mu.vercel.app/',
        },
        {
          title: 'Employee CRM',
          usedTech: 'ReactJS, MongoDB, ExpressJS, NodeJS, Material-UI',
          description:
            'You can create, delete, rename users and add hours to their work planner!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/crm_app.webp'),
          url: '#',
        },
        {
          title: 'Travel Packing List',
          usedTech: 'ReactJS',
          description:
            'You can create a list for packing and tick away the items!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/travelList.webp'),
          url: 'https://travel-list-mocha-six.vercel.app/',
        },
        {
          title: 'Reading List',
          usedTech: 'NextJS, ReactJS, TailwindCSS, Google BooksAPI',
          description:
            'You can add books to your reading list and see statistics about reading them!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/reading_list.webp'),
          url: 'https://reading-list-rho.vercel.app/',
        },
        {
          title: 'Catch The Squirrels!',
          usedTech: 'React Native',
          description:
            'A simple game with a twist. You have to catch all the squirrels!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/catch_the_squirrels.webp'),
          url: 'https://github.com/IoanLipan/CatchTheSquirrels',
        },
        {
          title: 'Pizza Menu',
          usedTech: 'ReactJS, CSS',
          description:
            'A simple pizza menu. You can see if the restaurant is open right now!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/pizzaMenu.webp'),
          url: 'https://pizza-menu-sand.vercel.app/',
        },
        {
          title: 'Advice App',
          usedTech: 'ReactJS',
          description:
            'Advice app connected to AdvicesApi. Click to see another advice!',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/adviceApp.webp'),
          url: 'https://react-advice-app-topaz.vercel.app/',
        },
        {
          title: 'What to wear',
          usedTech: 'ReactJS, TailwindCSS, genez.io',
          description:
            'A weather app with suggestions for dressing properly for the weather',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/weatherApp.webp'),
          url: 'https://rose-junior-opossum.app.genez.io/',
        },
        {
          title: 'UI library',
          usedTech: 'VueJS',
          description:
            'A library with homogenized UI components for developers',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/ui_library.webp'),
          url: '#',
          workRelated: true,
        },
        {
          title: 'TLC',
          usedTech: 'ReactJS, TailWindCSS',
          description: 'A e-commerce website for a dentist accessories company',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/tlcCommerce.webp'),
          url: 'https://theloupescompany.com/',
          workRelated: true,
        },
        {
          title: 'AVM Assistant',
          usedTech: 'ReactJS, DJango',
          description:
            'A web-app to help Auditive, Visualy or Motricly impaired people',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/avm_assistant.webp'),
          url: 'https://github.com/IoanLipan/avm_assistant',
        },
        {
          title: 'Traffic Sign Detector',
          usedTech: 'YOLOv4',
          description: 'A trained model that detects traffic signs with AI',
          // eslint-disable-next-line global-require
          imageURL: require('../assets/images/project_images/traffic_sign_detection.webp'),
          url: 'https://github.com/IoanLipan/Traffic-sign-detection',
        },
        // {
        //   title: 'TicTacToe Game',
        //   usedTech: 'Java',
        //   description: 'TicTacToe that can be played in the console',
        //   imageURL: 'game',
        //   url: 'https://github.com/IoanLipan/TicTacToe',
        // },
        // {
        //   title: 'BattlePlanes Game',
        //   usedTech: 'Python',
        //   description:
        //     'A game of Battleplanes that can be played in the console',
        //   imageURL: 'plane',
        //   url: 'https://github.com/IoanLipan/BattlePlanes',
        // },
      ],
    };
  },
  computed: {
    // ShowMoreProjects() {
    //   this.showMore = true;
    // },
    // ShowLessProjects() {
    //   this.showMore = false;
    //   window.scroll(0, 0);
    // },
    displayedProjects() {
      return this.showMore ? this.projects : this.projects.slice(0, 4);
    },
  },
};
</script>
