<template>
  <div class="col-md-3 border rounded m-2 p-2">
    <img src="https://www.azonano.com/images/Article_Images/ImageForArticle_4983(1).jpg" class="card-img-top">
    <h2>{{wordGroup.name}}</h2>
    <br/>
    <p>{{wordGroup.description}}</p>
    <p><button @click="showWords" class="btn btn-primary text-center" href="#" role="button">Show words</button></p>
  </div>
</template>

<script>
export default {
  /* props: {
    id: {
      type: String,
      require: true
    }
  }, */
  methods: {
    showWords () {
      this.$router.push({
        name: 'WordGroup'
      })
    }
  },
  props: {
    wordGroup: Object
  }
}
</script>
