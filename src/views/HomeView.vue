<script setup>

</script>

<template>
  <h1 class="text-green-800 text-center text-5xl">Dashboard</h1>

  <!-- component -->
  <!-- <section class="max-w-3xl p-6 mx-auto  rounded-md shadow-md dark:bg-gray-800 mt-20">
  <h1 class="text-xl font-bold text-gray-700 capitalize dark:text-gray-700">Account settings</h1>
  <form>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
              <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div>
              <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
              <input id="emailAddress" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
              <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>
          <div>
              <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Color</label>
              <input id="color" type="color" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>
          <div>
              <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Select</label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>Blue</option>
                  <option>Orange</option>
                  <option>text-green-800</option>
                  <option>Bandung</option>
              </select>
          </div>
          <div>
              <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Text Area</label>
              <textarea id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
          </div>
      </div>

      <div class="flex justify-end mt-6">
          <button class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
      </div>
  </form>
</section> -->

  <!-- You can open the modal using ID.showModal() method -->
  <button class="btn btn-accent" onclick="my_modal_3.showModal()">open modal</button>
  <dialog id="my_modal_3" class="modal">
    <form method="dialog" class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h3 class="font-bold text-lg">Rename</h3>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-gray-700 dark:text-gray-200" for="username">Old Name</label>
          <input id="username" type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="emailAddress">New Name</label>
          <input id="emailAddress" type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>
    </div>

    <div class="flex justify-end mt-6">
      <button
        class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
    </div>
  </form>
</dialog>

  <section class="max-w-2xl p-6 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-gray-700">Add Spliter</h2>

    <form>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-gray-700 dark:text-gray-200" for="username">Node Name</label>
          <input id="username" type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Select</label>
          <select
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            <option>Blue</option>
            <option>Orange</option>
            <option>text-green-800</option>
            <option>Bandung</option>
          </select>
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Fiber Cable Code</label>
          <input id="emailAddress" type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Transmission Box Code</label>
          <input id="emailAddress" type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="password">Lattitude</label>
          <input id="password" type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Longitude</label>
          <input id="passwordConfirmation" type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button
          class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
      </div>
    </form>
  </section>



</template>
