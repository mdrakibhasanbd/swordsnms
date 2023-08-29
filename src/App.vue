<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavCom from './components/NavCom.vue';

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <NavCom/>

    </div>
  </header>

  <RouterView />

</template>

<style scoped>



</style>
