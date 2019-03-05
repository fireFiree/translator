<template>
  <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto">Translator</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link  to="/" class="p-2 text-dark" href="#">Words</router-link>
      <a class="p-2 text-dark" href="#">Results</a>
    </nav>
    <div class="my-2 my-md-0 mr-md-3">
      <div v-if="user">
        <b class="mr-2 my-0">{{ user.name }}</b>
        <button @click="logOut" class="btn btn-outline-secondary">Log out</button>
      </div>

      <div v-else>
        <router-link  to="/login" class="btn btn-outline-primary" href="#">Login</router-link>
        <router-link  to="/registration" class="btn btn-outline-secondary" href="#">Registration</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<style scoped>

</style>
