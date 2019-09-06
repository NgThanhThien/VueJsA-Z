<template>
  <div>
    <h2>This is Contact Page</h2>
    <button class="btn btn-primary" @click="counter++">add</button>
    <p>{{counter}}</p>
  </div>
</template>
<script>
export default {
    data: function(){
        return{
            counter:0
        }
    }
}
</script>
<style scoped>
  h2{
    border: 1px solid chartreuse;
    color: #cccccc;
    padding: 20px;
  }
</style>
