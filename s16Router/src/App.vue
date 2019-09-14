<template>
  <div>
    <app-header></app-header>

  <div class="container mt-md-3">
    <div class="row">
      <div class="col-md-12 ">
        <h1 class="text-center">Vue Router</h1>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    import Headers from './components/layout/Header'

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
