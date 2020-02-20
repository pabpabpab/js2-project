Vue.component('price-filter', {

    data(){
        return {
            userPriceLimit: 80,
        }
    },


    template: `<div class="filterBody margin-top-minus5">
                       <input type="range" min="35" max="80" step="5"  class="range_input" v-model="userPriceLimit"  @change="$parent.$refs.products.priceFilter(userPriceLimit)"/>
                       <div class="range_price_container">
                           <p id="price_left">$35</p>
                           <p>\${{userPriceLimit}}</p>
                           <p id="price_right">$80</p>
                       </div>
                    </div>`
});
