new Vue({
    el: '#app1',
    data: {
        manaRed: false,
        color: 'green',
    },
    computed: {
        divClasses: function () {
            return {
                do: this.manaRed,
                green: !this.manaRed
            }
        }
    }
});
new Vue({
    el: '#app2',
    data: {
        color2:'gray',
        width:100,
        height:100
    },
    computed: {
        customCss:function () {
            return{
                width: this.width+'px',
                height: this.height+'px',
                backgroundColor: this.color2
            }
        }
    }
})
