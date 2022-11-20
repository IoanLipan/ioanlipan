<!-- eslint-disable max-len -->
<template>
  <div class="grid-of-12-container w-[100vw]">
    <article
      class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 2xl:mx-20 p-4 md:p-6 bg-slate-700 border-slate-700 rounded-3xl my-10 font-mono text-slate-100"
    >
      <form
        class="flex flex-col gap-4"
        :action="FORM_ENDPOINT"
        @submit="handleSubmit"
        method="POST"
        target="_blank"
      >
        <h3 class="text-3xl py-6 text-center text-red-500">
          Let's get your site up and running A.S.A.P.!
        </h3>
        <label class="text-xl text-yellow-400">Name:</label>
        <input
          name="name"
          type="text"
          ref="name"
          placeholder="Your Name ..."
          maxlength="30"
          class="p-3 rounded-2xl focus:outline-none focus:bg-yellow-200 text-black"
        />
        <label class="text-xl text-blue-400">Email:</label>
        <input
          name="email"
          type="email"
          ref="emailInput"
          placeholder="Your Email ..."
          maxlength="30"
          class="p-3 rounded-2xl focus:outline-none focus:bg-blue-200 text-black"
        />
        <label class="text-xl text-green-500">Your idea:</label>
        <textarea
          ref="messageInput"
          name="message"
          rows="5"
          placeholder="Your extraordinary idea (max 250 characters) ..."
          maxlength="250"
          @keypress="getMessageInputLength"
          @keyup="getMessageInputLength"
          @paste="getMessageInputLength"
          class="p-3 rounded-2xl focus:outline-none focus:bg-green-200 text-black"
        />
        <div :class="'relative text-end bottom-12 right-4 ' + getMessageColor">
          maximum characters {{ messageInputLength }}/250
        </div>
        <div
          class="relative bottom-6 text-red-600 text-center text-lg bg-amber-400 w-2/3 p-3 rounded-3xl mx-auto"
          v-if="noName"
        >
          ⛔️ You know my name. Let me know yours!
        </div>
        <div
          class="relative bottom-6 text-red-600 text-center text-lg bg-amber-400 w-2/3 p-3 rounded-3xl mx-auto"
          v-if="noEmail"
        >
          ⛔️ You should choose a valid email!
        </div>
        <div
          class="relative bottom-6 text-red-600 text-center text-lg bg-amber-400 w-2/3 p-3 rounded-3xl mx-auto"
          v-if="noMessage"
        >
          ⛔️ You should type a message!
        </div>
        <button
          type="submit"
          :class="
            'text-2xl p-2 bg-slate-500 w-1/2 self-center rounded-xl focus:bg-red-400 ' +
            SubmitButtonClass
          "
          @click="verifyEmail"
        >
          Send
        </button>
      </form>
      <div v-if="submitted" class="text-center mt-10">
        <h2 class="text-2xl">Thank you!</h2>
        <div class="text-md">We'll be in touch soon.</div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      messageInputLength: 0,
      submitted: false,
      FORM_ENDPOINT: 'https://public.herotofu.com/v1/2004e660-6504-11ed-891b-4f350712a1f0',
      isEmailValid: false,
      noName: false,
      noEmail: false,
      noMessage: false,
    };
  },
  computed: {
    getMessageColor() {
      return this.messageInputLength > 249 ? 'text-red-500' : 'text-slate-400';
    },
    SubmitButtonClass() {
      return this.isEmailValid ? 'cursor-pointer' : 'cursor-not-allowed';
    },
  },
  methods: {
    async verifyEmail() {
      const API_KEY = '8a3a19de71f34deebdad56d55880563c';
      const email = this.$refs.emailInput.value;
      if (!email) {
        return false;
      }
      const API_URL = `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}`;
      const fullURL = `${API_URL}&email=${email}`;
      const apiResponse = await fetch(fullURL);
      const data = await apiResponse.json();
      const isValid = data.is_valid_format.value && data.deliverability === 'DELIVERABLE';
      this.isEmailValid = isValid;
      return isValid;
    },
    handleSubmit(e) {
      if (!this.$refs.messageInput.value) {
        this.noMessage = true;
        e.preventDefault();
      } else this.noMessage = false;

      if (!this.$refs.name.value) {
        this.noName = true;
        e.preventDefault();
      } else this.noName = false;

      if (!this.isEmailValid) {
        this.noEmail = true;
        e.preventDefault();
        return;
      }
      this.noEmail = false;

      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
    getMessageInputLength() {
      this.messageInputLength = this.$refs.messageInput.value.length;
    },
  },
};
</script>
