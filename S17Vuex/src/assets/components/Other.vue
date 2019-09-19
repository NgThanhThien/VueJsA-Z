<template>
  <div class="col-md-8 offset-md-2">
    <hr>
    <p> Result Other: {{tenResult}}</p>
    <p>Name: {{ nameResult }}</p>
  </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(["tenResult", "nameResult"])
        }
    }
</script>
