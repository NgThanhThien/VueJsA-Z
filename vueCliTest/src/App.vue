<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
  <!--</div>-->
</template>

<script>
    import Header from "./assets/components/Layout/Header";
    import Footer from "./assets/components/Layout/Footer";

    import Servers from "./assets/components/Servers/Servers";
    import ServerDetail from "./assets/components/Servers/ServerDetail";

    export default {
        components: {
            appHeader: Header,//app-Header
            Servers,//servers
            'app-server-details': ServerDetail,
            'app-footer': Footer,
        }
    }
</script>

<style>
</style>
