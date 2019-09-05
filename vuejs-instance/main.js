var temp = {
    template: '<h1> Hello word </h1>'
}
new Vue({
    el: '#app',
    data: {
        title: 'Vue Js Instance',
        showPage: false
    },
    components:{
        'hello':temp
    },
    methods: {
        show: function () {
            return this.showPage = true;

        }
    },
    computed: {},
    watch: {}
})
