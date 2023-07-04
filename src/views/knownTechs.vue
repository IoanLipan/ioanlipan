<template>
  <div class="text-2xl md:text-4xl xl:my-[15vh] text-white font-mono grid grid-cols-12">
    <div class="col-start-2 col-span-10 md:col-start-3 md:col-span-8 text-center p-4 md:p-10 mb-20">
      These are the technologies that I am proficient in:
    </div>
    <div class="col-start-2 col-span-10 flex justify-evenly items-center flex-wrap">
      <KnownTechItem imageName="html" title="HTML"
        description="HTML (Hypertext Markup Language) is the standard language used for creating the structure and content of web pages"
        :level="5" />
      <KnownTechItem imageName="css" title="CSS"
        description="CSS (Cascading Style Sheets) is a stylesheet language that controls the presentation and appearance of HTML elements on a web page."
        :level="5" />
      <KnownTechItem imageName="tailwind" title="Tailwind"
        description="Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to rapidly build user interfaces."
        :level="5" />
      <KnownTechItem imageName="javascript" title="JavaScript" description="JavaScript is a versatile programming language used for adding interactivity and dynamic functionality to websites.

" :level="4" />
      <KnownTechItem imageName="react" title="ReactJS" description="React is a popular JavaScript library for building user interfaces, offering a component-based approach for creating reusable UI elements.

" :level="3" />
      <KnownTechItem imageName="vue" title="VueJS"
        description="Vue.js is a progressive JavaScript framework for building user interfaces, known for its simplicity, flexibility, and performance."
        :level="4" />
      <KnownTechItem imageName="shopify" title="Shopify"
        description="Shopify is a popular e-commerce platform for creating and managing online stores." :level="4" />
    </div>
  </div>
</template>

<script>
import KnownTechItem from '../components/knownTechItem.vue';

export default {
  name: 'KnownTechs',
  title: 'Ioan Lipan | Tech-Knowledge',
  components: { KnownTechItem },
};
</script>
