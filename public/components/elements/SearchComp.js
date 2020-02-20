Vue.component('search', {
    data(){
        return {
            userSearch: ''
        }
    },

    template: `<form action="#" class="header__form">
                    <div class="browse">
                        Browse
                        <div class="drop drop_browse">
                            <div class="drop__flex">
                                <h5 class="drop__h5">Women</h5>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__link">Dresses</a></li>
                                    <li><a href="#" class="drop__link">Tops</a></li>
                                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li><a href="#" class="drop__link">Blazers</a></li>
                                    <li><a href="#" class="drop__link">Denim</a></li>
                                    <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__link">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <input type="text" placeholder="Search for item..." class="searched_text_input" v-model="userSearch" @keyup="$root.$refs.dynamic.$refs.products.filter(userSearch)" v-if="$root.currentPage === 'catalog-page'">
                    <input type="text" placeholder="Search for item..." class="searched_text_input" v-model="userSearch" @keyup="$root.setPage('catalog-page')" v-else>

                    <button type="submit" class="search_button" @click.prevent="$root.$refs.dynamic.$refs.products.filter(userSearch)" v-if="$root.currentPage === 'catalog-page'">
                        <i class="fas fa-search search-rotate"></i>
                    </button>
                    <button type="submit" class="search_button" @click.prevent="$root.setPage('catalog-page')" v-else>
                        <i class="fas fa-search search-rotate"></i>
                    </button>
                </form>






`
});



//@keyup.stop="$root.setPage('catalog-page');"
//$root.$refs.dynamic.$refs.products.filter(userSearch);