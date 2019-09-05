<template>
  <div>
    <h1>User Details!</h1>
    <p>My detail!!!!!!!!!!!</p>
    <p> My name {{ myName }} and my age: {{ myAge }}</p>
    <button class="btn-secondary" @click="reverseName"> Reverse Name</button>
    <button class="btn-primary" @click="resetNameFn()"> Reset Name</button>
  </div>
  <!--</div>-->
</template>

<script>
    import {eventBus} from "../../main";

    export default {
        props: {
            myName: {
                type: String,
                default: 'Thien Nguyen'
            },
            resetNameFn: Function,
            myAge:Number
        },
        methods: {
            reverseName() {
                this.myName = this.myName.split("").reverse().join('');
                this.$emit('nameWasReverse', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdit',(age)=>{
                this.myAge = age;
            })
        }
    }
</script>

<style scoped>
  div {
    border: 2px solid gray;
    padding: 20px;
    background-color: aquamarine;
  }
</style>
