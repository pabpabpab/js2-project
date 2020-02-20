Vue.component('cart-body', {

    data(){
        return {
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },


    template: `<div>         
         <template v-if="cartAPI.goodsQuantity">   
            <cart-page-item  
            v-for="item of cartAPI.cartItems" 
            :key="item.id_product"
            :cart-item="item">
            </cart-page-item>         

            <div class="container shoppingCart_clear_and_continue">
                <a href="#" @click.prevent="cartAPI.clearCart()" class="shoppingCart_clear">cLEAR SHOPPING CART</a>
                <a href="#" class="shoppingCart_continue" @click.prevent="$root.setPage('catalog-page')">cONTINUE sHOPPING</a>
            </div>
        </template>
        <div class="shoppingCart_is_empty" v-else>
             the cart is empty 
        </div>
</div>`

});






Vue.component('cart-page-item', {
    props: ['cartItem'],
    data() {
      return {
          cartAPI: this.$root.$refs.header.$refs.cart,
          imgPath: './img/',
      };
    },





    template: `<div class="shoppingCart__item">
                <div class="shoppingCart__item__productDetails">
                    <a href="#" class="shoppingCart__productImg__link" @click.prevent="$root.setPage('product-page', cartItem.id_product)">
                        <img :src="imgPath + cartItem.img[0]" alt="product_1" class="shoppingCart__productImg">
                    </a>
                    <div class="shoppingCart__productParametersBox">
                        <a href="#" class="shoppingCart__productName" @click.prevent="$root.setPage('product-page', cartItem.id_produc)">{{cartItem.product_name}}</a>
                        <p class="shoppingCart__productColor">Color: <span class="shoppingCart__productColor__value">{{cartItem.color}}</span></p>
                        <p class="shoppingCart__productSize">Size: <span class="shoppingCart__productSize__value">{{cartItem.size}}</span></p>
                    </div>
                </div>
                <div class="shoppingCart__item__unitPrice">\${{cartItem.price}}</div>
                <div class="shoppingCart__item__quantity"><input type="number" v-model="cartItem.quantity" min="1" max="999" @input="cartAPI.inputProductQuantity(cartItem, cartItem.quantity)" required class="shoppingCart__item__quantity_input"></div>
                <div class="shoppingCart__item__shipping">FREE</div>
                <div class="shoppingCart__item__subtotal">\${{cartAPI.calcSubtotalPrice(cartItem)}}</div>
                <div class="shoppingCart__item__action"><a href="#"  @click.prevent="cartAPI.remove(cartItem)" class="drop_cart_closer top0"></a></div>
            </div>`

});
