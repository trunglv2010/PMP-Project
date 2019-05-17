<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
      <ul v-else>
        <li v-for="product in products">{{product.title}} - {{product.price}} - {{product.inventory}}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="addProductToCart(product)">Add to cart</button>
        </li>
      </ul>
    </div>
</template>

<script>
import store from '../store/pmpKnowledge'


export default {
    // data(){
    // return {
    //     products:[]
    //     }
    // },
    // created() {
    //     shop.getProducts(products => {
    //         this.products = products;
    //     })
    // }
    data(){
        return {
            loading: false
        }
    },
    computed: {
      products () {
        return store.state.products
        // return store.getters.availableProducts
      }
    },
      created () {
        this.loading = true;
        store.dispatch('fetchProducts')
        .then(() => this.loading = false);
    },
    methods: {
        addProductToCart(product) {
            store.dispatch('addToCart', product);
        }
    }
}
</script>

