<template>
  <div class="row mb-3">
    <div class="col-12">
      <p>Item Added</p>
      <div class="progress">
        <div class="progress-bar bg-success" :style="{width:(itemCount/maxItems) * 100 +'%'}"></div>
      </div>
      <div>{{itemCount}} / {{maxItems}}</div>
    </div>
  </div>
</template>
<script>
    export default {

        props: ['itemCount', 'maxItems']
    }
</script>
<style></style>
