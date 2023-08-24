<!-- eslint-disable max-len -->
<template>
  <div class="grid-of-12-container py-10 font-mono">
    <div class="col-start-3 col-span-8">
      <ol class="relative border-l border-gray-200">
        <TimeLineItem
          title="Engineer Diploma"
          period="2022"
          svgName="diploma"
          description="My final thesis was a Traffic Sign Detection Application that used a CNN (Convolutional Neural Network) to train a model to detect traffic signs."
        />
        <TimeLineItem
          title="Polytehnic University of Bucharest"
          period="2018 - 2022"
          svgName="graduated"
          description="I graduated the Faculty of Electronics, Telecommunications and Technology Information, and during the 4 years I encountered a lot of programming subjects: OOP, MatLab, Python This helped me better understand the concepts and I found my passion."
        />
        <TimeLineItem
          title="National High-School 'Ferdinand I', Bacau"
          period="2014 - 2018"
          svgName="openBook"
          description="I finished the mathematical-informatical profile, scoring 10/10 in the mathematics Bacalaureate."
        />
      </ol>
    </div>
  </div>
</template>

<script>
import TimeLineItem from '../components/timeLineItem.vue';

export default {
  name: 'EngineerPage',
  title: 'Ioan Lipan | Engineer',
  components: { TimeLineItem },
};
</script>
