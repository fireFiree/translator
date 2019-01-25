<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
  #app {
    height: 100vh;
  }
</style>
