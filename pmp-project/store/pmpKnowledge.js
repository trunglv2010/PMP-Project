import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../api/shop'
import { resolve } from 'path';
import { rejects } from 'assert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: [],
    //{id, quantity}
    cart: []
  },

  getters: { // = computed properties
    // productsCount () {
    //   // ...
    // }

    // availableProducts(state, getters){
    //     return state.products.filter(product => product.inventory > 0)
    // }

  },

  actions: { // = methods

    fetchProducts ({commit}) {

        return new Promise((resolve, rejects) =>{
            // make the call
            // call setProducts mutation
              shop.getProducts(products => {
              commit('setProducts', products);
              resolve();
            })
        })
    },

    addToCart(context, product){
        console.log(product);
        if(product.inventory > 0){

            const cartItem = context.state.cart.find(item => item.id === product.id)

            //find cartItem
            if(!cartItem) {
                //push Product to cart
                context.commit('pushProductToCart', product.id);
            }else{
                //increment item quantity
                context.commit('incrementItemQuantity', cartItem);
            }

            context.commit('decrementProductInventory', product);
        }
    }
  },

  mutations: {
    setProducts (state, products) {
      // update products
      state.products = products
    },
    pushProductToCart(state, productId){
        state.cart.push({
            id: productId,
            quantity: 1
        })
    },
    incrementItemQuantity(state, productId){
        cartItem.quantity++;
    },
    decrementProductInventory(state, productId){
        product.inventory--
    }
  }
})