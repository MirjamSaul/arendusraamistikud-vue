const app = Vue.createApp({
    // data: function() 
    //ES6 shorthand of data: function()
        data() {
        return {
            product: 'Sokid',
            image: './assets/images/socks_blue.jpg',
            productDescription: 'Need on väga head',
            //inStock: false,
            inventory: 8,
            onSale: true,
            details: ['50% puuvill', '30% vill', '20% mohäär'],
            variants: [
                { id:1112, color: 'roheline' },
                { id:1113, color: 'sinine' },
            ],
            sizes: ['37-39', '40-42', '43-45'],
            url:'https://sokid.ee/'

        }
    }
})


