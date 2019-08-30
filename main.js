new Vue({
    el: '#object',
    data: {
        title: "bài viết về vấn đề cá nhân",
        dicription: "Chúng ta đang nói cái quần què gì k biết",
        linkfb: "https://www.facebook.com/tieuquy.xunghe",
        testHtml: "<a href='https://con-ga'>Get con ga</a>",
    },
    methods: {
        changeValue: function (event) {
            this.mes = event.target.value;
        },
        showPost: function () {
            this.title = " Bai viet duoc cap nhat";
            return this.title;
        }
    }
});
//=========== lang nghe su kien v-on =====================
new Vue({
    el: '#obj1',
    data: {
        dem: 0,
        x: 0,
        y: 0,
        valueText:''
    },
    methods: {
        tangGiaTri: function () {
            this.dem++;
        },
        tinhToaDo: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        showValueText:function (event) {
        }
    }
})
