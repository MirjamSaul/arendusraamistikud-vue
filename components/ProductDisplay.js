app.component('product-display', {
    props: {
        premium: {
            type: Boolean, 
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!--attribute binding-->
        <img v-bind:src="image" :class="{ 'out-of-stock-img': !inStock }">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="onSale">{{ saleMessage }}</p>
        
        <p>Suurused</p>

        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <product-details :details="details"></product-details>
        <p>Värvid</p>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }">
        </div>

        <p v-show="onSale">Soodusmüük!</p>
        
        <p v-if="inStock">Laos</p>

        <p>Tarne: {{ shipping }}</p>
        <!--<p v-else-if="variants.quantity <= 10 variants.quantity > 0">Peaaegu otsas</p>-->
        <p v-else>Otsas</p>

        <a v-bind:href="url">Sokid</a>
      </div>
      <div>
        <p>Tootekirjeldus: {{ productDescription }}</p>
      </div>
      <button class="button" :disabled="!inStock" :class="{ disabledButton: !inStock }" @click="addToCart">Osta</button>
      <button class="removeButton" @click="removeFromCart">Eemalda</button>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        product: 'Sokid',
        brand: 'Heajuust',
        //image: './assets/images/socks_blue.jpg',
        selectedVariant: 0,
        details: ['50% puuvill', '50% mohäär'],
        productDescription: 'Need on väga head',
        //inStock: true,
        //inventory: 0,
        onSale: true,
        variants: [
            { id:1112, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id:1113, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        reviews: [],
        sizes: ['37-39', '40-42', '43-45'],
        url:'https://sokid.ee/'

    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
        this.selectedVariant = index
        
    },
    addReview(review) {
        this.reviews.push(review)
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
    },
    shipping() {
        if (this.premium) {
            return 'Tasuta'
        }
        return '4.99 EUR'
    }
}
})