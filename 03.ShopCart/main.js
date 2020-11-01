const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: "滑鼠",
            date: '2020-08',
            price: 400.00,
            count: 1
        }, {
            id: 2,
            name: "滑鼠",
            date: '2020-08',
            price: 400,
            count: 1
        }, {
            id: 3,
            name: "滑鼠",
            date: '2020-08',
            price: 90.00,
            count: 1
        }, {
            id: 4,
            name: "滑鼠",
            date: '2020-08',
            price: 50.00,
            count: 1
        }, ]
    },
    computed: {
        totalPrice() {
            let totalprice = 0
            // 1.
            // for (let i = 0; i < this.books.length; i++) {
            //     totalprice += this.books[i].price * this.books[i].count
            // }
            // 2.
            // for (let i in this.books) {
            //     totalprice += this.books[i].price * this.books[i].count
            // }
            // 1.2.必用。
            // return totalprice
            // 3.
            return this.books.reduce((PreValue, books) => {
                return PreValue + books.price * books.count
            }, 0)
        }
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2)
        // }
        decrement(index) {
            this.books[index].count++
        },
        increment(index) {
            this.books[index].count--
        },
        removeItem(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },

})

// const nums = [10, 20, 111, 222, 444, 50, 60]
// 1.
// let newNums = nums.filter(function (n) {
//     return n < 100
// })

// console.log(newNums)
// 2.
// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total)