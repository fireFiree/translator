<template>
  <div class="container">
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <th scope="col">Word</th>
        <th scope="col">Part of Speech</th>
        <th scope="col">Translation</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
        <tr :key="word._id" v-for="word in words">
          <td>{{word.word}}</td>
          <td>{{word.partOfSpeech}}</td>
          <td>{{word.translation}}</td>
          <td><button class="btn btn-primary mr-2">Edit</button><button class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    words: Array
  }
}
</script>

<style scoped>

</style>
