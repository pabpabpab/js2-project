Vue.component('size-filter', {

    data(){
        return {
            userSizeSearch: [],
        }
    },

    template: `<div class="filterBody">
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="XXS" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">XXS</span></label>
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="XS" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">XS</span></label>
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="S" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">S</span></label>
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="M" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">M</span></label><br>
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="L" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">L</span></label>
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="XL" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">XL</span></label>
                        <label class="checkbox_label"><input type="checkbox" class="checkbox_input" value="XXL" v-model="userSizeSearch" @change="$parent.$refs.products.sizeFilter(userSizeSearch)"/><span class="checkbox_text">XXL</span></label>
                    </div>`
});
