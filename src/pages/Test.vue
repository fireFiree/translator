<template>
  <div class="container">
    <div class="row">
      <TestItem :key="answer._id" v-for="answer in arr"/>
    </div>
    <br/>
    <div class="row">
      <button class="btn btn-success">Finish Test</button>
    </div>
    <br/>
  </div>
</template>

<script>
import TestItem from '@/components/TestItem'

export default {
  components: {
    TestItem
  },
  data () {
    return {
      arr: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
</script>

<style scoped>
  div.row {
    justify-content: center;
  }
</style>
