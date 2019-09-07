<template>
  <div class="row">
    <app-item v-for="(item,index) in items" @click.native="deleteItem(index)">{{ item }}</app-item>
  </div>
</template>
<script>
    import Items from "./Items";
    export default {
        props: ['items'],
        components:{
            appItem:Items
        },
        methods:{
            deleteItem(index){
                this.$emit('removeItem',index)
            }
        }
    }
</script>
<style>

</style>
