<script setup></script>
<template>
  <div>
    <form class="p-5 rounded w-full">
      <h1 class="font-extrabold text-4xl text-slate-800 dark:text-slate-200">
        I&apos;m ready to
        <span class="text-raspberry dark:text-frost">work for you</span>
      </h1>
      <p
        class="text-base text-slate-800 dark:text-slate-200 font-light tracking-tight"
      >
        This form is provided solely for business purposes. Alternatively, I can
        be contacted at
        <a
          href="mailto:sweet@openteknik.com"
          class="text-raspberry dark:text-frost font-medium"
          >sweet@openteknik.com</a
        >. Serious inquiries only, please.
      </p>
      <div class="relative z-0 mb-6 mt-5 w-full group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-frost focus:outline-none focus:ring-0 focus:border-raspberry peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-raspberry dark:peer-focus:text-frost peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <textarea
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-frost focus:outline-none focus:ring-0 focus:border-raspberry peer"
          placeholder=" "
          required
          id="floating_message"
        />
        <label
          for="floating_message"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-raspberry dark:peer-focus:text-frost peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Your message</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-raspberry hover:bg-magenta focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-void dark:bg-frost dark:hover:bg-mint dark:focus:ring-green-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>
