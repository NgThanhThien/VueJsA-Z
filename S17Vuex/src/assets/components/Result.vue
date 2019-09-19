<template>
  <div class="col-md-8 offset-md-2">
    <hr>
    <p> Result: {{ tenResult}}</p>
  </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(['tenResult'])
        }
    }
</script>
