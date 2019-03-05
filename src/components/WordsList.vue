<template>
  <div>
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <th scope="col">Word</th>
        <th scope="col">Part of Speech</th>
        <th scope="col">Translation</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
        <tr :key="word._id" v-for="word in words">
          <template v-if="editingWord !== word">
            <td>{{word.word}}</td>
            <td>{{word.partOfSpeech}}</td>
            <td>{{word.translation}}</td>
            <td><button @click="editWord(word)" class="btn btn-primary mr-2">Edit</button><button @click="deleteWord(word)" class="btn btn-danger">Delete</button></td>
          </template>
          <template v-else>
            <td><input class="form-group form-control" type="text" v-model="wordName"></td>
            <td><input class="form-group form-control" type="text" v-model="wordPartOfSpeech"></td>
            <td><input class="form-group form-control" type="text" v-model="wordTranslation"></td>
            <td><button  @click="saveEditing(word)" class="btn btn-primary mr-2">Save</button><button @click="cancelEditing" class="btn btn-danger">Cancel</button></td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    words: Array
  },
  data () {
    return {
      wordName: '',
      wordPartOfSpeech: '',
      wordTranslation: '',
      editingWord: null
    }
  },
  methods: {
    editWord (word) {
      this.editingWord = word

      this.wordName = word.word
      this.wordPartOfSpeech = word.partOfSpeech
      this.wordTranslation = word.translation
    },
    cancelEditing () {
      this.editingWord = null
      this.wordName = ''
      this.wordPartOfSpeech = ''
      this.wordTranslation = ''
    },
    saveEditing (word) {
      word.word = this.wordName
      word.partOfSpeech = this.wordPartOfSpeech
      word.translation = this.wordTranslation

      this.cancelEditing()
    },
    deleteWord (word) {

    }
  }
}
</script>

<style scoped>
  input {padding: 0; margin: 0; border: 0; width: 100%; border: 1px solid red;}
</style>
