Vue.component('drop-cart', {

    data(){
      return {
          cartItems: [],
          showCart: false,
          cartPath: './catalog/',
          imgPath: './img/',
      }
    },

    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity = data.newQuantity; //реальное кол-во товара с сервера
                        }
                    });
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },


        remove(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (!find) return 0;

            if (find.quantity > 1) {
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity = data.newQuantity; //реальное кол-во товара с сервера
                        }
                    });
            } else {
                this.$root.deleteJson(`/api/cart/${find.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            //на всякий случай еще раз проверка на реальное кол-во товара с сервера
                            if (data.newQuantity < 1)
                                this.cartItems.splice(this.cartItems.indexOf(find), 1);
                            else
                                find.quantity = data.newQuantity;
                        }
                    });
            }
        },


        //ввод кол-ва в input на странице корзины
        inputProductQuantity(item, quantity) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (!find) return 0;

            if (quantity > 0) {
                this.$root.putJson(`/api/cart/${find.id_product}`, {newQuantityValue: quantity})
                    .then(data => {
                        if (data.result === 1) {
                            //на всякий случай присваиваем реальное кол-во товара с сервера
                            find.quantity = data.newQuantity;
                        }
                    });
            } else {
                this.$root.deleteJson(`/api/cart/${find.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            //на всякий случай еще раз проверка на реальное кол-во товара с сервера
                            if (data.newQuantity < 1)
                                this.cartItems.splice(this.cartItems.indexOf(find), 1);
                            else
                                find.quantity = data.newQuantity;
                        }
                    });
            }
        },


        //очистить корзину полностью на странице корзины
        clearCart() {
            this.$root.deleteJson(`/api/cart/clearCart`)
                .then(data => {
                    if (data.result === 1) {
                        //this.cartItems.length = 0; //не работает
                        this.cartItems.splice(0,this.cartItems.length);
                    }
                });
            window.scrollBy(0,-100000);
        },



        //кол-во товара по его id
        getProductQuantity(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (!find) return 0;
            return find.quantity;
        },

        getProductQuantityString(product){
            let quantity = this.getProductQuantity(product);
            if (quantity === 0) return '';
            if (quantity > 0) return `(${quantity})`;
        },

        //subTotal price для одного товара на странице корзины
        calcSubtotalPrice(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (!find) return 0;
            return find.quantity * find.price;
        },

    },




    computed: {
        //итоговая цена корзины
        totalPrice() {
            return this.cartItems.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0);
        },
        //всего вещей в корзине (для иконки корзиныв верху страниц, красный кружок с цифрой)
        goodsQuantity() {
            return this.cartItems.reduce((goodsQuantity, product) => goodsQuantity + (+product.quantity), 0);
        },
    },





    mounted(){
        this.$root.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },



    template: `<div>
                <a href="#" class="cart_link" @click.prevent="$root.setPage('cart-page')">
                    <img :src="imgPath + 'cart.svg'" alt="cart" class="cart">
                    <div class="cart_quantity" v-show="goodsQuantity">{{ goodsQuantity }}</div>
                </a>
                <div class="drop_cart">
                    <template v-if="cartItems.length">
                        <cart-item  
                        v-for="item of cartItems" 
                        :key="item.id_product"
                        :cart-item="item" 
                        @remove="remove">
                        </cart-item>                  
                    
                        <div class="drop_cart_totalPrice">
                            <p class="drop_cart_totalPrice_left">TOTAL</p>
                            <p class="drop_cart_totalPrice_right">\${{ totalPrice }}</p>
                        </div>
                        <a :href="cartPath + 'checkout.html'" class="drop_cart_checkOut">Checkout</a>
                        <a href="#" class="drop_cart_goToCart" @click.prevent="$root.setPage('cart-page')">Go to cart</a>
                    </template>
                    <div class="drop_cart_empty" v-else>
                        Корзина пуста
                    </div>
                </div>
</div>`
});







Vue.component('cart-item', {
    props: ['cartItem'],
    data() {
        return {
            catalogPath: './catalog/',
            imgPath: './img/',
        };
    },


    template: `<div class="drop_cart_product">
                        <a href="#" @click.prevent="$root.setPage('product-page', cartItem.id_product)">
                        <img :src="imgPath + cartItem.img[0]" alt="product" class="drop_cart_product_img"></a>
                        <div class="drop_cart_product_info">
                            <a href="#" class="drop_cart_product_name" @click.prevent="$root.setPage('product-page', cartItem.id_product)">{{cartItem.product_name}}</a>
                            <p class="drop_cart_stars"></p>
                            <div class="drop_cart_quantity_price">
                                <p class="drop_cart_quantity">{{cartItem.quantity}}</p>
                                <p class="drop_cart_price">\${{cartItem.price}}</p>
                            </div>
                        </div>
                        <a href="#" class="drop_cart_closer" @click.prevent="$emit('remove', cartItem)"></a>
                    </div>
    `

});
