<template>
  <div class="container border-box">
    <div class="row">
      <div class="col-md-12 text-center header">
        <h1>Filters</h1>
        <p> {{ msg | toLowerCase | toUpperCase }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-col-md-2">
        <h3>Filter Products</h3>
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
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
  import List from "./assets/component/List";
  import {productMixins} from "./assets/Mixins/productMixins";

  export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
    filters:{
      toLowerCase(text){
          return text.toLowerCase();
      }
    },
    components:{
      appList: List
    },
      mixins:[productMixins]
}
</script>

<style scoped>
.header{
  background-color: lightcyan;
}
  .border-box{
    border: 1px solid #333;
  }
</style>
