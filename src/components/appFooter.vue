<template>
  <nav id="appFooter" class="grid grid-cols-1 sm:grid-cols-2 mt-auto
  md:flex md:flex-row gap-2 sm:gap-5 md:gap-2 md:justify-around bg-indigo-400 p-8 text-indi00">
    <FooterSocialLink name="Ioan Lipan" image="linkedin" url=https://www.linkedin.com/feed/ />
    <FooterSocialLink name="ioanlipan1@gmail.com" image="gmail" url="mailto:ioanlipan1@gmail.com" />
    <FooterSocialLink name="ioan.lipan" image="instagram" url="https://www.instagram.com/lipan.ioan/" />
    <FooterSocialLink name="IoanLipan" image="github" url="https://github.com/IoanLipan "/>
  </nav>
</template>

<script>
import FooterSocialLink from './footerSocialLink.vue';

export default {
  name: 'appFooter',
  components: { FooterSocialLink },
};
</script>
