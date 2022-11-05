<template>
  <div class="grid-of-12-container w-[100vw]">
    <article
      class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 2xl:mx-20
      p-4 md:p-6 bg-slate-700 border-slate-700
      rounded-3xl mb-10 font-mono text-slate-100"
    >
      <h3 class="text-3xl py-6 text-center text-red-500">
        Lets get your site up and running A.S.A.P.!
      </h3>
      <form class="flex flex-col gap-4">
        <label class="text-xl text-yellow-400">Name:</label>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
          class="p-3 rounded-2xl focus:outline-none focus:bg-yellow-200 text-black"
        />
        <label class="text-xl text-blue-400">Email:</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
          class="p-3 rounded-2xl focus:outline-none focus:bg-blue-200 text-black"
        />
        <label class="text-xl text-green-500">Your idea:</label>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Extraordinary idea ..."
          class="p-3 rounded-2xl focus:outline-none focus:bg-green-200 text-black"
        >
        </textarea>

        <input
          type="submit"
          value="Send"
          class="text-2xl p-2 bg-slate-500 w-1/2 self-center rounded-xl focus:bg-red-400"
        />
      </form>
    </article>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactMe',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendEmail(e) {
      const SERVICE_ID = 'service_ut4yb7j';
      const TEMPLATE_ID = 'template_zglhvp7';
      const USER_ID = 'tyHAdDh5Ey0ViOR3i';

      try {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID, {
          name: this.name,
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
