const app = Vue.createApp({
    // data: function() 
    //ES6 shorthand of data: function()
        data() {
        return {
            cart: 0,
            product: 'Sokid',
            image: './assets/images/socks_blue.jpg',
            productDescription: 'Need on väga head',
            inStock: false,
            inventory: 0,
            onSale: true,
            details: ['50% puuvill', '30% vill', '20% mohäär'],
            variants: [
                { id:1112, color: 'green', image: './assets/images/socks_green.jpg' },
                { id:1113, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: ['37-39', '40-42', '43-45'],
            url:'https://sokid.ee/'

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            this.cart -=1
        }
    }
})


