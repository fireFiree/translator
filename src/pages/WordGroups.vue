<template>
  <div class="container">
    <div class="row">
      <WordGroupsItem :key="wordGroup._id" v-for="wordGroup in wordGroups" :wordGroup="wordGroup"/>
    </div>
  </div>
</template>

<script>
import WordGroupsItem from '@/components/WordGroupsItem'

export default {
  components: {
    WordGroupsItem
  },
  data () {
    return {}
  },
  computed: {
    wordGroups () {
      return [
        {
          name: 'Space',
          description: 'description some text some text description, description,,, description',
          words: [
            {word: 'w1', partOfSpeech: '1', translation: '1'},
            {word: 'w2', partOfSpeech: '1', translation: '1'},
            {word: 'w3', partOfSpeech: '2', translation: '1'},
            {word: 'w4', partOfSpeech: '2', translation: '1'}
          ]
        },
        {name: 'Group', description: 'description some text some text description, description,,, description text some text description, description text some text description, description'},
        {name: 'Group2', description: 'description some text some text description, description,,, description'},
        {name: 'Group3', description: 'description some text some text description, description,,, description text some text description, description'},
        {name: 'Group', description: 'description some text some text description, description,,, description text some text description, description text some text description, description'},
        {name: 'Group2', description: 'description some text some text description, description,,, description'},
        {name: 'Group3', description: 'description some text some text description, description,,, description text some text description, description'}
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
