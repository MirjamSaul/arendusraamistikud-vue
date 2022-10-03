const app = Vue.createApp({
    // data: function() 
    //ES6 shorthand of data: function()
        data() {
        return {
            product: 'Sokid',
            image: './assets/images/socks_blue.jpg',
            productDescription: 'Need on väga head',
            inStock: false,
            inventory: 8,
            onSale: true,
            url:'https://sokid.ee/'

        }
    }
})


