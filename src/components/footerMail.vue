<!-- eslint-disable max-len -->
<template>
  <div class="grid-of-12-container w-[100vw]">
    <article
      class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 2xl:mx-20 p-4 md:p-6 bg-primary bg-opacity-90 rounded-3xl my-10 text-accent">
      <form class="flex flex-col gap-4" :action="VUE_APP_FORM_ENDPOINT" method="POST">
        <h3 class="text-3xl py-6 text-center tracking-wide">
          Contact me and lets start working on your idea!
        </h3>
        <label class="form-label">Name:</label>
        <input name="name" type="text" ref="name" required @keyup="catchForbiddenWords()" @paste="catchForbiddenWords()"
          placeholder="Your Name ..." maxlength="30" class="form-input" />
        <label class="form-label">Email (verify first):</label>
        <div class="flex">
          <input name="email" type="email" ref="emailInput" required placeholder="Your Email ..." maxlength="30"
            class="form-input" @change="isEmailValid = false" />
          <SvgIcon @click="verifyEmail" class="flex items-center ml-3 p-3 rounded-2xl" :class="verifyEmailButtonClass"
            name="check" />
        </div>
        <label class="form-label">Your idea:</label>
        <textarea ref="messageInput" name="message" rows="5"
          placeholder="Your extraordinary idea (max 250 characters) ..." maxlength="250" required
          @keypress="getMessageInputLength()" @keyup="getMessageInputLength(); catchForbiddenWords()"
          @paste="getMessageInputLength(); catchForbiddenWords();" class="form-input" />
        <div :class="'relative text-end bottom-12 right-4 w-full ' + getMessageColor">
          maximum characters {{ messageInputLength }}/{{ messageMaxLength }}
        </div>
        <div class="alert" v-if="!isEmailValid && isEmailValid !== 0">
          ⛔️ You should choose a valid email!
        </div>
        <div class="alert" v-if="forbiddenWords">
          ⛔️ Let's speak like adults!
        </div>
        <button v-if="isFormOk" type="submit" class="text-2xl p-2 w-1/2 self-center cursor-pointer bg-green-600 rounded-2xl"
          @click="handleSubmit">
          Send
        </button>
        <div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
        </div>
      </form>
      <div v-if="submitted" class="text-center mt-10">
        <h2 class="text-2xl">Thank you!</h2>
        <div class="text-md">We'll be in touch soon.</div>
      </div>
    </article>
  </div>
</template>

<script>
import FORBIDDEN_WORDS from './forbiddenWords';
import SvgIcon from './svgIcon.vue';

export default {
  name: 'ContactMe',
  components: { SvgIcon },
  data() {
    return {
      messageInputLength: 0,
      messageMaxLength: 250,
      submitted: false,
      VUE_APP_FORM_ENDPOINT: process.env.VUE_APP_FORM_ENDPOINT,
      isEmailValid: 0,
      forbiddenWords: false,
      lastEmailVerified: 0,
      canVerifyEmail: true,
    };
  },
  created() {
    this.VUE_APP_FORM_ENDPOINT = process.env.VUE_APP_FORM_ENDPOINT;
  },
  computed: {
    verifyEmailButtonClass() {
      return this.canVerifyEmail ? 'bg-green-900 hover:bg-green-800' : 'bg-gray-500 cursor-not-allowed';
    },
    getMessageColor() {
      return this.messageInputLength > (this.messageMaxLength - 1) ? 'text-negative' : 'text-textcolor text-opacity-50';
    },
    isFormOk() {
      return this.isEmailValid && !this.forbiddenWords && this.messageInputLength;
    },
  },
  methods: {
    async verifyEmail() {
      const now = Date.now();
      if (now - this.lastEmailVerified < 5000) {
        return;
      }

      this.lastEmailVerified = now;
      this.canVerifyEmail = false;

      try {
        const API_KEY = process.env.VUE_APP_ABSTRACT_API_KEY;
        const email = this.$refs.emailInput.value;
        const API_URL = `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`;
        const apiResponse = await fetch(API_URL);

        if (!apiResponse.ok) {
          return;
        }

        const data = await apiResponse.json();
        this.isEmailValid = data.is_valid_format && data.is_valid_format.value && data.deliverability === 'DELIVERABLE';
      } catch (error) {
        this.isEmailValid = false;
      } finally {
        setTimeout(() => {
          this.canVerifyEmail = true;
        }, 4000);
      }
    },
    handleSubmit(e) {
      if (!this.isEmailValid) {
        e.preventDefault();
        return;
      }
      if (this.forbiddenWords) {
        e.preventDefault();
        return;
      }
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
    getMessageInputLength() {
      this.messageInputLength = this.$refs.messageInput.value.length;
    },
    catchForbiddenWords() {
      const messageContent = this.$refs.messageInput.value.toLowerCase();
      const nameContent = this.$refs.name.value.toLowerCase();
      const isNameForbidden = FORBIDDEN_WORDS.some((forb) => nameContent.includes(forb));
      const isMessageForbidden = FORBIDDEN_WORDS.some((forb) => messageContent.includes(forb));
      if (isNameForbidden || isMessageForbidden) {
        this.forbiddenWords = true;
      } else this.forbiddenWords = false;
    },
  },
};
</script>
