<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div v-if="!editingGroupDescription">
        <h3>{{wordGroup.name}}</h3>
        <p class="text-justify">{{wordGroup.description}}</p>
        <button class="btn btn-primary" @click='startEditing'>Edit description</button>
      </div>

      <div v-else>
        <label>Name</label>
        <input class="form-control" type="text" v-model="editingGroupDescription.name">
        <label>Description</label>
        <textarea v-model="editingGroupDescription.description" class="form-control"></textarea>
        <br/>
        <button class="btn btn-success" @click='save'>Save</button>
        <button class="btn btn-danger" @click='cancelEditing'>Cancel</button>
      </div>
      <h4 class="text-center ">Words</h4>
      <WordsList :words="words"/>
      <button @click="openTest" class="btn btn-success">Test</button>
    </div>
  </div>
</template>

<script>
import WordsList from '@/components/WordsList'

export default {
  components: {
    WordsList
  },
  data () {
    return {
      editingGroupDescription: null,
      wordGroup: {
        name: 'Space',
        description: 'description some text some text description, description,,, description',
        words: [
          {word: 'w11111111111', partOfSpeech: '1', translation: '1'},
          {word: 'w2', partOfSpeech: '1', translation: '1'},
          {word: 'w3', partOfSpeech: '2', translation: '1'},
          {word: 'w4', partOfSpeech: '2', translation: '1'}
        ]
      },
      edit: false
    }
  },
  computed: {
    words () {
      return this.wordGroup.words
    }
  },
  methods: {
    startEditing () {
      this.editingGroupDescription = {
        name: this.wordGroup.name,
        description: this.wordGroup.description
      }
    },
    cancelEditing () {
      this.editingGroupDescription = null
    },
    save () {
      this.wordGroup.name = this.editingGroupDescription.name
      this.wordGroup.description = this.editingGroupDescription.description
      this.editingGroupDescription = null
    },
    openTest () {
      this.$router.push('/test')
    }
  }
  /* props: {
    wordGroup: Object
  } */
}
</script>

<style>
</style>
