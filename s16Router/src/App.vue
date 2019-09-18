<template>
  <div>
    <router-view name="page-header"/>

  <div class="container mt-md-3">
    <div class="row">
      <div class="col-md-12 ">
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>


    export default {
        data() {

        },
        components: {
            appHeader: Headers
        }
    }
</script>
<style>

</style>
