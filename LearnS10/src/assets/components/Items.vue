<template>

  <div class="col-sm-3 con-lg-3 col-12">
    <div class="card">
      <div class="card-body items">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .card-body{
    padding: 10px;
    font-family: 'iCiel Altus',cursive ;
    font-size: 24px;
    color: #333;
    overflow: hidden;
  }
  .card{
    margin-top: 20px;
    border: 1px solid rebeccapurple;
  }
  .items{
    cursor: pointer;
  }
  .items:hover{
    background-color: azure;
  }
</style>
