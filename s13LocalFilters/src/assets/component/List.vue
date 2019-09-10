<template>
  <div class="col-md-6 offset-col-md-2 ">
    <h3>Filter Products by List Component</h3>
    <input type="text" class="input-control mb-md-3" v-model="filterProduct">
    <div class="card">
      <div class="card-header text-center">Filter</div>
      <div class="card-body">
        <ul>
          <li v-for="product in filteredProducts">{{ product }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {productMixins} from "../Mixins/productMixins";
  export default {
      mixins:[productMixins]
  }
</script>

<style scoped>
  .border-box{
    border: 1px solid #333;
  }
</style>
