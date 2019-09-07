<template>
  <form>
    <label for=""> U can saying ....</label>
    <textarea class="form-group" v-model="item" name="" id=""></textarea>
    <button class="btn btn-success" @click.prevent="createNewItem">Add</button>
  </form>
</template>
<script>
    export default {
        props: ['items'],
        data: function () {
            return {
                item: ""
            }
        },
        methods: {
            createNewItem() {
                this.item = this.item.toLocaleLowerCase();
                if (this.item == "") {
                    return false;
                }else if(this.items.includes(this.item)){
                    return alert("This item is existed!");
                }
                else {
                    this.$emit('addedItem', this.item);
                    this.item = "";
                }
            }
        }
    }
</script>
<style scoped>
  textarea {
    width: 100%;
    resize: none;
  }
</style>
