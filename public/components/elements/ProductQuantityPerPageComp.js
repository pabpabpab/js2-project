Vue.component('product-quantity-per-page', {
    data(){
        return {
            userProductQuantityPerPage: 9
        }
    },


    template: `<p class="sortBy_input_wrapper">
                    <select name="sortBy" class="sortBy_input" v-model="userProductQuantityPerPage" @change="$parent.$refs.products.divideProductsIntoPages(userProductQuantityPerPage)">
                        <option v-for="n in 15" :value="n">{{n < 10 ? '0' + n : n}}</option>
                    </select>
                </p>`
});


