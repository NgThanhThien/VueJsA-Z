<template>
  <div id="app">
    <div class="container" style="margin-top: 50px">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectComponent = 'appCard'">Card</button>
          <button class="btn btn-outline-danger" @click="selectComponent='appAbout'">About</button>
          <button class="btn btn-outline-danger" @click="selectComponent='appContact'">Contact</button>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 50px">
      <div class="row">
        <div class="col-sm-12">
<!--          <app-card card-words="Cat">-->
<!--            <h3 class="title-page">{{selectComponent}}</h3>-->
<!--            <h2 slot="title"> {{cardDes}}</h2>-->
<!--            <p> Hello cat</p>-->
<!--          </app-card>-->
          <keep-alive>
            <component :is="selectComponent"></component>

          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "./components/Card";
  import About from "./components/About";
  import Contact from "./components/Contact";
export default {
    data: function(){
       return{
           cardDes :'Black Cat',
           selectComponent:'CardPage'
       }
    },
  components:{
      appCard: Card,
      appAbout:About,
      appContact:Contact
  }
}
</script>
<style scoped>
  .title-page{
    color: greenyellow;
    border: 1px solid red;
    padding: 10px;
  }

</style>
