<template>
  <div class="container">
    <div class="row">
      <TestItem :question="question" @checkAnswer="checkAnswer" :key="question.number" v-for="question in questions"/>
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
      questions: [
        {
          word: 'Space',
          number: 1,
          answers: [
            {word: 'Космос', correct: true},
            {word: 'Котик'},
            {word: 'Луна'},
            {word: 'Небо'}
          ]
        },
        {
          word: 'Space',
          number: 2,
          answers: [
            {word: 'Космос', correct: true},
            {word: 'Котик'},
            {word: 'Луна'},
            {word: 'Небо'}
          ]
        },
        {
          word: 'Space',
          number: 3,
          answers: [
            {word: 'Космос', correct: true},
            {word: 'Котик'},
            {word: 'Луна'},
            {word: 'Небо'}
          ]
        },
        {
          word: 'Space',
          number: 4,
          answers: [
            {word: 'Космос', correct: true},
            {word: 'Котик'},
            {word: 'Луна'},
            {word: 'Небо'}
          ]
        },
        {
          word: 'Space',
          number: 5,
          answers: [
            {word: 'Космос', correct: true},
            {word: 'Котик'},
            {word: 'Луна'},
            {word: 'Небо'}
          ]
        },
        {
          word: 'Space',
          number: 6,
          answers: [
            {word: 'Космос', correct: true},
            {word: 'Котик'},
            {word: 'Луна'},
            {word: 'Небо'}
          ]
        }
      ]
    }
  },
  methods: {
    checkAnswer (answer) {
      console.log(answer)
    }
  }
}
</script>

<style scoped>
  div.row {
    justify-content: center;
  }
</style>
