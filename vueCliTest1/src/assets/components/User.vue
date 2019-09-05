<template>
  <div class="component">
    <h1> The User Component </h1>
    <p>My name {{name}} and my age: {{ age }}</p>
    <button class="btn-primary" @click="changeName" >Change my name</button>
    <hr>
    <div class="row">
      <div class="col-lg-6 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReverse="name = $event"
          :resetNameFn="resetName"
          :myAge ="age"
        ></app-user-detail>
      </div>
      <div class="col-lg-6 col-sm-6">
        <app-user-edit
          :myAge="age"
          @ageWasEdit=" age= $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
    import UserEdit from "./UserEdit";
    import UserDetails from "./UserDetails";

    export default {
        data:function(){
            return{
                name:'Huyền',
                age: 18
            }
        },
        components: {
            appUserEdit: UserEdit,
            appUserDetail: UserDetails
        },
        methods:{
            changeName:function () {
              this.name = 'Thien NT';
            },
            resetName(){
              this.name = 'Thien Nguyen'
            }
        }
    }
</script>

<style scoped>
  .component{
    background-color: #e4e8ff;
    width: 1000px;
    margin: auto;
    padding: 20px;
    border: 2px solid black;
  }
</style>
