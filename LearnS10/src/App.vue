<template>
  <div class="container">
    <app-header :max-items="maxItems" :item-count="items.length"></app-header>
    <app-new-item @addedItem="addItems" :items="items"></app-new-item>
    <app-items-layout :items="items" @removeItem="removeItem"></app-items-layout>
    <div class="alert alert-info text-center mt-3">
      Info: Click on a item delete it!
    </div>
  </div>
</template>

<script>
    import Header from "./assets/components/Header";
    import ItemsLayout from "./assets/components/ItemsLayout";
    import NewItem from "./assets/components/NewItem";

    export default {
        data: function () {
            return {
                items: [],
                maxItems: 10
            }
        },
        components: {
            appHeader: Header,
            appItemsLayout: ItemsLayout,
            appNewItem: NewItem
        },
        methods: {
            addItems(item) {
                if(this.items.length>=this.maxItems){
                    return alert('full slot');
                }else this.items.push(item);
            },
            removeItem(index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
