Vue.component('single-product', {
    data(){
        return {
            product: {},
            imgPath: './img/',
            currentPhotoIndex: 0,
            productImg: '',
            inputColor: '',
            inputSize: '',
            inputQuantity: 0,
            cartAPI: this.$root.$refs.header.$refs.cart,
            maxProductsId: 0, // максимальный id из всех товаров (нужно для генерации нового товара)
        }
    },

    methods: {
        //при нажатии на кнопку "Add to cart"
        addProduct(product) {
            let message = '';
            if (!this.inputColor)
                message += "- Не выбран цвет товара;<br>";
            if (!this.inputSize)
                message += "- Не выбран размер товара;<br>";
            if (!this.inputQuantity)
                message += "- Не указано количество товара;<br>";
            if (message) {
                message += "Товар не добавлен.";
                this.$root.$refs.message.setMessage(message);
                return;
            }

            /**
             здесь смотрю на Название товара,
             так как на этой странице данный товар может быть размножен под разными сгенерированными id
             (при выборе пользователем разных его параметров (цвет и размер) и добавлении в корзину)
             */
            let find = this.cartAPI.cartItems.find(el => el.product_name === product.product_name);
            let find2 = this.cartAPI.cartItems.find(el => ((el.product_name === product.product_name) && (el.color === this.inputColor)  && (el.size === this.inputSize.split(',')[0])));
            switch (true) {
                case (!find): //добавляем как абсолютно новый товар если: нет такого товара с таким названием в корзине
                    this.addNewProduct(product, product.id_product);
                    this.$root.$refs.message.setMessage('Товар добавлен.');
                    break;
                case (!find2): //если есть, но цвет или размер другой, то тоже добавляем как абсолютно новый товар с новым id
                    this.addNewProduct(product, this.getNewProductId());
                    this.$root.$refs.message.setMessage('Товар добавлен,<br>но добавлен как новый с новым id, потому что цвет или размер не совпадает с таким же товаром в корзине.');
                    break;
                default: //если все параметры с найденным в корзине совпадают, то просто увеличить кол-во товара
                    this.$root.putJson(`/api/cart/${find2.id_product}`, {quantity: +this.inputQuantity})
                        .then(data => {
                            if (data.result === 1) {
                                find.quantity = data.newQuantity;
                            }
                        });
                    //find.quantity += +this.inputQuantity;
                    this.$root.$refs.message.setMessage('Количество товара увеличено.');
            }
        },


        //формируем новый товар с введенными пользователем параметрами и с новым id
        addNewProduct(product, newId) {
            let newProduct = Object.assign({quantity: +this.inputQuantity}, this.product);
            newProduct.color = this.inputColor;
            newProduct.size = this.inputSize.split(',')[0];
            newProduct.size_number = +this.inputSize.split(',')[1];
            newProduct.id_product = newId;
            this.$root.postJson('/api/cart', newProduct)
                .then(data => {
                    if (data.result === 1) {
                        this.cartAPI.cartItems.push(newProduct);
                    }
                });
        },

        //генерируем новый id для нового товара при добавлении в корзину
        getNewProductId() {
            let maxId = this.maxProductsId;
            this.cartAPI.cartItems.forEach((item) => {
                if (item.id_product > maxId) maxId = item.id_product;
            });
            return maxId + 1;
        },



        //листаем фото товара
        nextPhoto(currentIndex) {
            this.currentPhotoIndex = currentIndex + 1;
            if (this.currentPhotoIndex >= this.product.img.length) this.currentPhotoIndex = 0;
            this.makeProductImg();
        },
        prevPhoto(currentIndex) {
            this.currentPhotoIndex = currentIndex - 1;
            if (this.currentPhotoIndex < 0) this.currentPhotoIndex = this.product.img.length - 1;
            this.makeProductImg();
        },
        //делаю html-разметку фото
        makeProductImg() {
            //класс css (плавное появление) отрабатывает только при полной замене html-разметки фото
            //если просто менять src у фото или делать фото отдельным компонентом передавая ему src - то класс css не отрабатывает
            //поэтому так
            this.productImg = "<img src=\"" + this.imgPath + this.product.img[this.currentPhotoIndex] + "\" alt=\"product\" class=\"product_img appearance\">";
        }
    },

    mounted(){
        //вытянуть один товара по его id (this.id получен как входной параметр компонента)
        this.$root.getJson(`/api/products/${this.$root.id_product}`)
            .then(data => {
                //на сервере const response = {product: find, max_products_id: getMaxProductsId(data)};
                this.product = Object.assign({}, data.product);
                //заодно получаем максимальный id из всех товаров (нужно для генерации id нового товара)
                this.maxProductsId = data.max_products_id;
                //html фото товара при загрузке
                this.productImg = "<img src=\"" + this.imgPath + this.product.img[this.currentPhotoIndex] + "\" alt=\"product\" class=\"product_img\">";
            });
    },


    template: `
    <main>
        <div class="singleProduct">
            <div class="container singleProduct_img_container">
                <a href="" class="product_img_link" @click.prevent="nextPhoto(currentPhotoIndex)" v-html="productImg"></a>
            </div>     
            <a href="#" class="left_flyer" @click.prevent="prevPhoto(currentPhotoIndex)"><i class="fas fa-angle-left"></i></a>
            <a href="#" class="right_flyer" @click.prevent="nextPhoto(currentPhotoIndex)"><i class="fas fa-angle-right"></i></a>   
        </div>
        
        <div class="container singleProduct_info">
            <p class="collection_name">WOMEN COLLECTION</p>
            <div class="flatFlyer">
                <a href="#" class="flatFlyer_link"></a>
                <a href="#" class="flatFlyer_link flatFlyer_link_active"></a>
                <a href="#" class="flatFlyer_link"></a>
            </div>
            <h2 class="singleProduct_name_h2">{{product.product_name}}</h2>
            <div class="singleProduct_description_wrapper">
                <p class="singleProduct_description">
                    Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate 
                    collaborative architectures before cutting-edge services. Completely visualize parallel core competencies 
                    rather than exceptional portals. 
                </p>
            </div>
            <div class="material_and_designer">
                <div class="material">MATERIAL:<p class="material_value">{{product.material}}</p></div>
                <div class="designer">DESIGNER:<p class="designer_value">{{product.designer}}</p></div>
            </div>
            
            <p class="singleProduct_price">\${{product.price}}</p>
            
            <div class="parametersBox_wrapper">
            <div class="parametersBox">
                <div class="parametersBox_one">
                    <p class="parameterName">CHOOSE COLOR</p>
                    <p class="color_input_wrapper">
                    <select class="color_input" v-model="inputColor">
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Black</option>
                    </select>
                    </p>
                </div>
                <div class="parametersBox_one">
                    <p class="parameterName">CHOOSE SIZE</p>
                    <p class="color_input_wrapper">
                    <select class="color_input" v-model="inputSize">
                        <option value="XXS,1">XXS</option>
                        <option value="XS,2">XS</option>
                        <option value="S,3">S</option>
                        <option value="M,4">M</option>
                        <option value="L,5">L</option>
                        <option value="XL,6">XL</option>
                        <option value="XXL,7">XXL</option>
                    </select>
                    </p>
                </div>
                <div class="parametersBox_one parametersBox_one_last">
                    <p class="parameterName">QUANTITY</p>
                    <input type="number"min="1" max="999" step="1" required class="quantity_input" v-model="inputQuantity">
                </div>
            </div>            
            </div>
            
            <div class="singleProduct__Cart__link__wrapper">
                <a href="cart.html" class="singleProduct__Cart__link" @click.prevent="addProduct(product)">
                    <img :src="imgPath + 'red_cart.svg'" alt="cart" class="red_cart_img"> Add to Cart
                </a>
            </div>
            
        </div>    
   </main>`

});


