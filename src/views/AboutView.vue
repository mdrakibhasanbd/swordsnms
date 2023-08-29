<template>
    <!-- <section class="max-w-xl p-3 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 mt-20">

          <div class="flex justify-center mt-6">
            <h3 class="font-bold text-lg">Are you Sure Remove This Node?</h3>
          </div>
          <div class="flex justify-end mt-6">
            <button
              class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Ok</button>
          </div>

      </section> -->

      <div class="relative">
        <select class="w-64 border border-gray-300 focus:border-indigo-500 bg-white h-10 pl-5 pr-10 rounded-lg text-base">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      
      

</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>