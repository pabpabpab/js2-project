Vue.component('pagination', {



    template: `<nav class="catalog_bottom_nav" v-if="$parent.$refs.products.customized.length > 1">
                <div class="left_pagination">
                    <a href="#" class="pagination_link" @click.prevent="$parent.$refs.products.showPage($parent.$refs.products.currentPage - 1)"><i class="fas fa-angle-left"></i></a>          
                    
                    
                    <a href="#" class="pagination_link pdl0 pdr0" 
                    @click.prevent="$parent.$refs.products.showPage(0)"
                    v-if="(($parent.$refs.products.customized.length > 9) && ($parent.$refs.products.currentPage > 4))">
                    1 ......
                    </a>
                    
                    
                    <a href="#" 
                    :class="$parent.$refs.products.paginationLinkCssArr[item - 1]" 
                    @click.prevent="$parent.$refs.products.showPage(item - 1)"
                    v-for="item of $parent.$refs.products.paginationLinksShot">
                    {{ item }}
                    </a>                    
                    
                    
                    <a href="#" class="pagination_link pdl0 pdr0"  
                    @click.prevent="$parent.$refs.products.showPage($parent.$refs.products.customized.length - 1)"
                    v-if="($parent.$refs.products.customized.length > 9) && (($parent.$refs.products.currentPage + 5) < $parent.$refs.products.customized.length)">
                    ...... {{$parent.$refs.products.customized.length}}
                    </a>
                    
                    
                    
                    <a href="#" class="pagination_link" @click.prevent="$parent.$refs.products.showPage($parent.$refs.products.currentPage + 1)"><i class="fas fa-angle-right"></i></a>
                </div>
                <div class="right_viewAll">
                    <a href="#" class="viewAll_link" @click.prevent="$parent.$refs.products.divideProductsIntoPages(1000000000);">View All</a>
                </div>
            </nav>`
});





/*

                    <a href="#" class="pagination_link active_pagination_link">1</a>
                    <a href="#" class="pagination_link">2</a>
                    <a href="#" class="pagination_link">3</a>
                    <a href="#" class="pagination_link">4</a>
                    <a href="#" class="pagination_link">5</a>
                    <a href="#" class="pagination_link pdr0">6</a>
                    <a href="#" class="pagination_link pdl0 pdr0">......</a>
                    <a href="#" class="pagination_link pdl0">20</a>

 */