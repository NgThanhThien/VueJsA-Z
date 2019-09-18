<template>
  <div>
    <h1>User Detail</h1>
    <h5>UserID: {{ $route.params.id }}</h5>
    <!--    <button class="btn btn-outline-info" @click="backToHome">Back Home</button>-->
    <hr>
    <router-link
      tag="button"
      class="btn btn-block btn-warning"
      :to="{name: 'userEdit', params:{id: this.$route.params.id}, query:{ locate: 'vi', browser: 'chrome'}, hash:'#hello'}">
      Edit User
    </router-link>
  </div>
</template>
<script>
    export default {
        methods: {
            backToHome() {
                this.$router.push('/')
            }
        },
        beforeRouteEnter(to, from, next) {
            if (true) next();
            else next(false);
        }
    }
</script>
