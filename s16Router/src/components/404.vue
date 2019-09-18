<template>
  <div>
    <h2> 404 Error</h2>
    <p> Have some error..</p>
    <hr>
    <button class="btn btn-block btn-outline-info" @click="$router.push({name: 'homepage'})">Go to home</button>
  </div>
</template>
<script>
export default {
    data:{}
}
</script>
