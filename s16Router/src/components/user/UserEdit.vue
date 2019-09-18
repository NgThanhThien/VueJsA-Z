<template>
  <div>
    <h1>Edit User</h1>
    <ul>
      <li><p>Location: {{ this.$route.query.locate}}</p></li>
      <li><p>Browser: {{ this.$route.query.browser}}</p></li>
    </ul>
    <div class="btn btn-block btn-outline-danger" @click="show">Some thing data</div>
    <div style="height: 700px"></div>
    <h3 id="hello"> Hello word</h3>
    <div style="height: 2000px"></div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                status: false
            }
        },
        methods: {
            show(){
                this.status = false;
                alert('Hello');
            }
        },
        beforeRouteLeave(to, from, next) {
            if (this.status) next();
            else if (confirm('are u sure?')) next();
            else next(false);
        }
    }
</script>
