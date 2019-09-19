<template>
  <div class="col-md-8 offset-md-2">
    <hr>
    <button class="btn btn-outline-success" @click="add">Add</button>
    <button class="btn btn-danger" @click="asyncSub">Sub</button>
    <hr>
    <input type="text" v-model="value">
    <p>Text: {{ value }}</p>
  </div>
</template>
<script>
    import {mapActions} from 'vuex'

    export default {
        computed: {
            value: {
                get() {
                  return  this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        methods: {
            ...mapActions(['add', 'asyncSub'])
            // ,
            // ...mapMutations(['sub'])
        }
    }
</script>
