const app = Vue.createApp({
    // data: function() 
    //ES6 shorthand of data: function()
        data() {
        return {
            cart: 0,
            product: 'Sokid',
            brand: 'Heajuust',
            //image: './assets/images/socks_blue.jpg',
            selectedVariant: 0,
            productDescription: 'Need on väga head',
            //inStock: true,
            //inventory: 0,
            onSale: true,
            details: ['50% puuvill', '30% vill', '20% mohäär'],
            variants: [
                { id:1112, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id:1113, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            sizes: ['37-39', '40-42', '43-45'],
            url:'https://sokid.ee/'

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            
        },
        removeFromCart() {
            this.cart -=1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' on soodushinnaga!';
            }
        }
    }
})


