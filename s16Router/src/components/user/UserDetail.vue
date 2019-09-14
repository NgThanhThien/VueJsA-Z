<template>
  <div>
    <h1>Thien Profile</h1>
    <h2>UserID: {{ id }}</h2>
    <button class="btn btn-outline-info" @click="backToHome">Back Home</button>
  </div>
</template>
<script>
  export default {
      data(){
          return{
              id: this.$route.params.id
          }
      },
      methods:{
          backToHome(){
              this.$router.push('/')
          }
      },
      watch:{
          '$route'(to,from){
              this.id = to.params.id;
          }
      }
  }
</script>
