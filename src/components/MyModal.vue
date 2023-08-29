<template>
    <dialog id="my_modal_3" class="modal">
        <form method="dialog" class="modal-box">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 class="font-bold text-lg">Add Spliter</h3>
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
                <option>Green</option>
                <option>Brown</option>
              </select>
            </div>
    
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Fiber Cable Code</label>
              <input id="emailAddress" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
    
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Transmission Box Code</label>
              <input id="emailddress" type="text"
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
    
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Splitter Core
              </label>
              <select
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>2</option>
                <option>4</option>
                <option>8</option>
                <option>16</option>
              </select>
            </div>
    
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Comment</label>
              <textarea id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
          </div>
    
        </div>
    
        <div class="flex justify-end mt-6">
          <button
            class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
    </dialog>
  </template>
  
  <script>
  export default {
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
 