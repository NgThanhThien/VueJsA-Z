<template>
  <div>
    <h2>User Management</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam, at blanditiis commodi, dolor dolorem
      doloribus eaque esse exercitationem iste magnam minima modi nemo odio quibusdam quos tempore ullam vel?
    </p>
    <hr>
    <button class="btn btn-outline-info btn-block" @click="backToHome">Back Home</button>
    <hr>
   <router-view/>
  </div>
</template>
<script>
  // import UserIndex from './UserIndex'
  export default {
      methods:{
          backToHome(){
              this.$router.push({name: 'homepage'})
          }
      },
      // components:{
      //   userIndex: UserIndex
      // }
  }
</script>
<style></style>
