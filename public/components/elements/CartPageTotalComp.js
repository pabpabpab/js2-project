Vue.component('cart-page-total', {

    data(){
        return {
            cartAPI: this.$root.$refs.cart,
        }
    },


    template: `
            <div class="shoppingCart_grandTotal">
                <p class="shoppingCart_grandTotal_subTotal">Sub total <span class="shoppingCart_grandTotal_subTotal_value">\${{cartAPI.calcTotalPrice()}}</span></p>
                <p class="shoppingCart_grandTotal_grandTotal">GRAND TOTAL<span class="shoppingCart_grandTotal_grandTotal_value">\${{cartAPI.calcTotalPrice()}}</span></p>
                <a href="checkout.html" class="shoppingCart_proceed">proceed to checkout</a>
            </div>`

});



