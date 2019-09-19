<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center"> Vuex</h1>
      </div>
      <app-result/>
      <app-other/>
      <app-count/>
    </div>
  </div>
</template>
<script>
    import Result from "./assets/components/Result"
    import Count from "./assets/components/Count";
    import Other from "./assets/components/Other";

    export default {
        data() {

        },
        components: {
            appResult: Result,
            appCount: Count,
            appOther: Other
        }
    }
</script>
