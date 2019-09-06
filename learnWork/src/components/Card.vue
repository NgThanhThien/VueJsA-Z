<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subTitle"> Title default</slot>
      </span>
    </div>
    <div class="content">
      <slot name="content"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props:['cardWords']
  }
</script>
<style scoped>
  div{
    margin-top:50px ;
    border: 2px solid aquamarine;
    padding: 30px;
    text-align: center;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.6);
  }
  h2 {
    color: olivedrab;
  }
</style>
