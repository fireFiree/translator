<template>
    <div class="card col-sm-6 p-5 m-1">
      <div class="card-body">
        <h5 class="card-title">Question {{number}}</h5>
        <br/>
        <p class="card-text text-center">How we can translate <b>{{question.word}}</b>?</p>
        <br/>
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary mr-2" v-for="answer in question.answers" :key="answer.word">{{answer.word}}</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  /* props: {
    question: Object,
    number: Number
  }, */
  data () {
    return {
      number: 5,
      question: {
        word: 'Space',
        answers: [
          {word: 'Космос', correct: true},
          {word: 'Котик'},
          {word: 'Луна'},
          {word: 'Небо'}
        ]
      }
    }
  },
  computed: {
    nebo () {
      return null
    }
  }
}
</script>

<style>
  .card {
    max-width: 400px;
  }
</style>
