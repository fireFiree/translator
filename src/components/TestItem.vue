<template>
    <div class="card col-sm-6 p-3 m-1 " :class="{'border border-success': isAnswered && isCorrect, 'border border-danger': isAnswered && !isCorrect}">
      <div class="card-body">
        <h5 class="card-title">Question {{question.number}}</h5>
        <br/>
        <p class="card-text text-center">How we can translate <b>{{question.word}}</b>?</p>
        <br/>
        <div v-if="!isAnswered" class="d-flex justify-content-center">
          <button @click="checkAnswer(answer)" class="btn btn-primary mr-2" v-for="answer in question.answers" :key="answer.word">{{answer.word}}</button>
        </div>
        <div v-else class="d-flex justify-content-center">
          <div v-if="isCorrect" class="alert alert-success">
            {{answeredWord}} is {{question.word}} !
          </div>
          <div v-else class="alert alert-danger">
            Oooops, {{answeredWord}} is not {{question.word}} :с
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    question: Object
  },
  data () {
    return {
      isAnswered: false,
      isCorrect: false,
      answeredWord: ''
    }
  },
  computed: {
    nebo () {
      return null
    }
  },
  methods: {
    checkAnswer (answer) {
      this.isAnswered = true
      this.isCorrect = answer.correct || false
      this.answeredWord = answer.word

      this.$emit('checkAnswer', {number: this.number, word: this.word, answer})
    }
  }
}
</script>

<style>
  .card {
    max-width: 400px;
  }
</style>
