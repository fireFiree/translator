<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/layout/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  beforeCreate () {
    this.$store.dispatch('authorize')
  }
}
</script>

<style>
  #app {
    height: 100vh;
  }
</style>
