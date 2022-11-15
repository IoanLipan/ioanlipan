<template>
  <div class="grid-of-12-container w-[100vw]">
    <article
      class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 2xl:mx-20 p-4 md:p-6
      bg-slate-700 border-slate-700 rounded-3xl my-10 font-mono text-slate-100"
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
          placeholder="Your Name ..."
          required
          class="p-3 rounded-2xl focus:outline-none focus:bg-yellow-200 text-black"
        />
        <label class="text-xl text-blue-400">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Your Email ..."
          required
          class="p-3 rounded-2xl focus:outline-none focus:bg-blue-200 text-black"
        />
        <label class="text-xl text-green-500">Your idea:</label>
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Your extraordinary idea ..."
          required
          class="p-3 rounded-2xl focus:outline-none focus:bg-green-200 text-black"
        />
        <button
          type="submit"
          class="text-2xl p-2 bg-slate-500 w-1/2 self-center rounded-xl focus:bg-red-400"
        >
          Send
        </button>
      </form>
      <div v-if="submitted" class="text-center mt-10">
        <h2 class="text-2xl">Thanks you!</h2>
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
      submitted: false,
      FORM_ENDPOINT: 'https://public.herotofu.com/v1/2004e660-6504-11ed-891b-4f350712a1f0',
    };
  },
  methods: {
    handleSubmit() {
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
  },
};
</script>
