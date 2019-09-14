<template>
  <div>
    <h2>User</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam, at blanditiis commodi, dolor dolorem
      doloribus eaque esse exercitationem iste magnam minima modi nemo odio quibusdam quos tempore ullam vel?
    </p>
    <hr>
    <button class="btn btn-outline-info" @click="backToHome">Back Home</button>
    <button class="btn btn-outline-warning" @click="goToProfile">Thien Profile</button>
  </div>
</template>
<script>
  import UserIndex from './UserIndex'
  export default {
      methods:{
          backToHome(){
              this.$router.push('/')
          },
          goToProfile(){
              this.$router.push('/user/1')
          }
      },
      components:{
          
      }
  }
</script>
<style></style>
