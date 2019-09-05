<template>
  <div class="col-6">
    <ul>
      <li class="box-li" v-for="index in 5"> Servers index {{ index }}</li>
    </ul>
  </div>
  <!--</div>-->
</template>

<script>
    export default {}
</script>

<style scoped>
  .box-ul{
    border: 2px solid red;
    list-style: none;
  }
  .box-li{
    border: 1px solid  gray;
    padding: 10px;
    list-style: none;
  }
</style>
1
