Vue.component('products', {
    props: ['mode'],
    data(){
        return {
            products: [],
            filtered: [],
            customized: [[],[],[]], //товары из filtered, но разбитые по страницам, в соответствии с productQuantityPerPage
            containerClass: 'container featured__content',
            userSizeArr: [], //установки пользователя в фильтре размеров
            userPriceLimit: 80,  //установка пользователя в фильтре цены


            productQuantityPerPage: 9, //установка пользователем в выпадающем списке кол-ва товаров на страницу
            currentPage: 0, //текущая страница в пагинаторе
            activePaginationLinkCss: "pagination_link active_pagination_link",
            inactivePaginationLinkCss: "pagination_link",
            paginationLinkCssArr: ['','',''],
            paginationLinksShot: [1, 2, 3, 4, 5, 6], // активный кадр ссылок пагинации
        }
    },

    methods: {

        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));

            //разбиваем товары по страницам
            this.divideProductsIntoPages(this.productQuantityPerPage);
        },


        //фильтрация по размеру
        sizeFilter(userSizeArr){
            this.userSizeArr = userSizeArr; //сохранить переданные данные (для составного фильтра)

            if (userSizeArr.length > 0)
                this.filtered = this._sizeFilterCore(this.products, userSizeArr);
            else
                this.filtered = [...this.products];

            //если фильтр цены установлен, то применить и его
            if (this.userPriceLimit > 0) {
                this.filtered = this._priceFilterCore(this.filtered, this.userPriceLimit);
            }

            //разбиваем товары по страницам
            this.divideProductsIntoPages(this.productQuantityPerPage);
        },


        //фильтрация по цене
        priceFilter(userPriceLimit){
            this.userPriceLimit = userPriceLimit; //сохранить переданные данные (для составного фильтра)

            this.filtered = this._priceFilterCore(this.products, userPriceLimit);

            //если фильтр по размерам установлен, то применить и его
            if (this.userSizeArr.length > 0) {
                this.filtered = this._sizeFilterCore(this.filtered, this.userSizeArr);
            }

            //разбиваем товары по страницам
            this.divideProductsIntoPages(this.productQuantityPerPage);
        },



        _priceFilterCore (products, priceLimit) {
            return products.filter(el => el.price <= priceLimit);
        },
        _sizeFilterCore(products, sizeArr) {
            return products.filter(el => sizeArr.includes(el.size));
        },


        //сортировка
        sort(userSort){
            switch (userSort) {
                case 'Name':
                    this.filtered.sort((prev, next) => {
                        if (prev.product_name < next.product_name) return -1;
                        if (prev.product_name < next.product_name) return 1;
                    });
                    break;
                case 'Price':
                    this.filtered.sort((prev, next) => prev.price - next.price);
                    break;
                case 'Size':
                    this.filtered.sort((prev, next) => prev.size_number - next.size_number);
                    break;
            }

            //разбиваем товары по страницам
            this.divideProductsIntoPages(this.productQuantityPerPage);
        },

        //разбить товары по страницам
        divideProductsIntoPages(userProductQuantityPerPage) {
            if ((this.mode) === 'catalog')
            this.$root.$refs.dynamic.$refs.qpp.userProductQuantityPerPage = userProductQuantityPerPage; //поменять это значение при вызове метода из другого компонента
            this.productQuantityPerPage = userProductQuantityPerPage;
            this.currentPage = 0;
            this.customized.splice(0, this.customized.length);//очистить массив товаров
            this.paginationLinkCssArr.splice(0, this.paginationLinkCssArr.length);//очистить css ссылок пагинации

            //разбиваем товары по страницам в соответствии с новым this.productQuantityPerPage
            let page_counter = 0, product_counter = 0;
            for (let el of this.filtered) {
                if (product_counter === this.productQuantityPerPage) { //страница заполнена
                    product_counter = 0;
                    page_counter++;
                }
                if (product_counter === 0) {
                    this.customized.push([]);//начинаем следующую страницу товаров
                    this.paginationLinkCssArr.push(this.inactivePaginationLinkCss);//сделать ссылку на эту страницу товаров неактивной
                }
                this.customized[page_counter].push(el);//пушим товар в страницу
                product_counter++;
            }

            //установить активную ссылку
            this.paginationLinkCssArr[this.currentPage] = this.activePaginationLinkCss;

            // сформировать активный кадр ссылок пагинации
            this.makePaginationLinksShot();
        },


        //сформировать активный кадр ссылок пагинации
        makePaginationLinksShot() {
            let border1, border2, wing = 3;
            this.paginationLinksShot.splice(0, this.paginationLinksShot.length); //очистить

            if (this.customized.length <= wing * 3) {
                for (let i = 1; i <= this.customized.length; i++) this.paginationLinksShot.push(i);

            } else if ((this.currentPage + 1 + wing + 2) > this.customized.length) {
                border1 = ((this.currentPage + 1 - wing) > (this.customized.length - wing * 2)) ? (this.customized.length - wing * 2) : (this.currentPage + 1 - wing);
                border2 = this.customized.length;
                for (let i = border1; i <= border2; i++) this.paginationLinksShot.push(i);
            } else if (this.currentPage + 1 - wing - 2 < 1) {
                border1 = 1;
                border2 = ((this.currentPage + 1 + wing) < (wing * 2)) ? (wing * 2) : (this.currentPage + 1 + wing);
                for (let i = border1; i <= border2; i++) this.paginationLinksShot.push(i);
            } else {
                border1 = this.currentPage + 1 - wing;
                border2 = this.currentPage + 1 + wing;;
                for (let i = border1; i <= border2; i++) this.paginationLinksShot.push(i);
            }
        },






        //пагинация: какую страницу товара показать
        showPage(index) {
            if (index < 0) index = 0;
            if (index >= this.customized.length) index = this.customized.length - 1;
            this.currentPage = index;
            this._resetPaginationLinkCss();
            Vue.set(this.paginationLinkCssArr, index, this.activePaginationLinkCss);

            // сформировать активный кадр ссылок пагинации
            this.makePaginationLinksShot();
        },
        //сбросить css ссылок пагинации
        _resetPaginationLinkCss() {
            for (let i = 0; i < this.paginationLinkCssArr.length; i++)
                Vue.set(this.paginationLinkCssArr, i, this.inactivePaginationLinkCss);
        },

    },

    mounted(){
        let productsUrl;
        switch (this.mode) {
            case 'featured-products':
                this.containerClass = 'container featured__content';
                productsUrl = "/api/featured-products";
                break;
            case 'you-may-like-also':
                this.containerClass = 'container also_content';
                productsUrl = "/api/also-products";
                break;
            default:
                this.containerClass = 'featured__content mt10 min-width-100';
                productsUrl = "/api/products";
        }


        this.$root.getJson(productsUrl)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }

                //разбиваем товары по страницам
                this.divideProductsIntoPages(this.productQuantityPerPage);
            });
    },

    template: `
        <div :class="containerClass">
            <product v-for="item of customized[currentPage]" :key="item.id_product" :product="item" :mode="mode"></product>
        </div>
    `
});










Vue.component('product', {
    props: ['product', 'mode'],
    data() {
      return {          
          cartAPI: this.$root.$refs.header.$refs.cart,
          catalogPath: '',
          imgPath: '',
          oneProductClass: '',
      };
    },


    mounted(){

        switch (this.mode) {
            case 'featured-products':
                this.catalogPath = 'catalog/';
                this.imgPath = 'img/';
                this.oneProductClass = 'featured__one';
                break;
            case 'you-may-like-also':
                this.catalogPath = './../catalog/';
                this.imgPath = './../img/';
                this.oneProductClass = 'featured__one also__one';
                break;
            default:
                this.catalogPath = './../catalog/';
                this.imgPath = './../img/';
                this.oneProductClass = 'featured__one';

        }

    },

    template: `<div :class="oneProductClass">
                        <a href="#" class="featured__one__imgLink" @click.prevent="$root.setPage('product-page', product.id_product)">
                        <img :src="imgPath + product.img[0]" alt="product" class="featured__one__img"></a>
                        <div class="featured__one__textdiv"> 
                            <a href="#" class="featured__one__nameLink" @click.prevent="$root.setPage('product-page', product.id_product)">{{product.product_name}}</a>
                            <p class="featured__one__price">\${{product.price}}</p>
                        </div>
                        <a href="#" class="featured__one__whiteCart__link" @click.prevent="cartAPI.addProduct(product)"> 
                            <img :src="imgPath + 'white_cart.svg'" alt="cart" class="white_cart_img"> 
                            Add to Cart
                        </a>
                        <div class="good_quantity_control" v-if="cartAPI.getProductQuantity(product)">
                            <div class="good_quantity_control__btn_left" @click="cartAPI.addProduct(product)">+</div>
                            <div class="good_quantity_control__value">{{cartAPI.getProductQuantity(product)}}</div>
                            <div class="good_quantity_control__btn_right" @click="cartAPI.remove(product)">-</div>
                        </div>
                    </div>
    `
});





