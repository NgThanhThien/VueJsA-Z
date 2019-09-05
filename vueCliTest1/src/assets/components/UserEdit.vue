<template>
  <div>
    <h1>User Edit!</h1>
    <p>Edit me!!!!!!!!!</p>
    <p> My Age: {{ myAge }}</p>
    <button class="btn-primary" @click="editAge">Change My Age</button>
  </div>
  <!--</div>-->
</template>

<script>
    import {eventBus} from "../../main";

    export default {
        props: {
            myAge: Number
        },
        methods: {
            editAge() {
                this.myAge = 30;
                // this.$emit('ageWasEdit',this.myAge);
                // eventBus.$emit('ageWasEdit',this.myAge);
                eventBus.changeAge(this.myAge);
            }
        }
    }
</script>

<style scoped>
  div {
    border: 2px solid greenyellow;
    padding: 20px;
    background-color: white;
  }
</style>
