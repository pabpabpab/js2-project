Vue.component('catalog-page', {

    template: `
<DIV>        
    <bread-crumbs></bread-crumbs>
    
    <div class="container leftNav_and_catalogPage">
        <nav class="leftNav">
            <details class="leftNav_details" open>               
                <summary class="leftNav_summary">Category<span class="summary_arrow"></span></summary>
                <ul class="leftNav_details_ul">                    
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Accessories</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Bags</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Denim</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Hoodies & Sweatshirts</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Jackets & Coats</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Pants</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Polos</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Shirts</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Shoes</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Shorts</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Sweaters & Knits</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">T-Shirts</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Tanks</a></li>
                </ul>
            </details>
            
            <details class="leftNav_details">
                <summary class="leftNav_summary">Brand<span class="summary_arrow"></span></summary>
                <ul class="leftNav_details_ul">                    
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Accessories</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Bags</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Denim</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Hoodies & Sweatshirts</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Jackets & Coats</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Pants</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Polos</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Shirts</a></li>
                </ul>
            </details>
            <details class="leftNav_details">
                <summary class="leftNav_summary">Designer<span class="summary_arrow"></span></summary>
                <ul class="leftNav_details_ul">                    
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Accessories</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Bags</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Denim</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Hoodies & Sweatshirts</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Jackets & Coats</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Pants</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Polos</a></li>
                    <li class="leftNav_details_li"><a href="#" class="leftNav_details_li_link">Shirts</a></li>
                </ul>
            </details>
        </nav>
        <div class="catalogPage">
            <div class="catalogPage_topFilters">
                <div class="filter_one">
                    <p class="filterHeader">Trending now</p>
                    <div class="filterBody margin-left-minus13 margin-top-minus5">
                        <a href="#" class="filterLink">Bohemian</a>|<a href="#" class="filterLink">Floral</a>|<a href="#" class="filterLink">Lace</a><br>
                        <a href="#" class="filterLink">Floral</a>|<a href="#" class="filterLink">Lace</a>|<a href="#" class="filterLink">Bohemian</a>
                    </div>
                </div>
                <div class="filter_one">
                    <p class="filterHeader">Size</p>


                    <size-filter></size-filter>



                </div>
                <div class="filter_one">
                    <p class="filterHeader">Price</p>

                    <price-filter></price-filter>

                </div>
            </div>
            <div class="sortBar">
                <p class="sortBar_fieldName">Sort By</p>
                <p class="sortBy_input_wrapper">

                    <sort></sort>

                </p>
                
                <p class="sortBar_fieldName">Show</p>

                <product-quantity-per-page ref="qpp"></product-quantity-per-page>

            </div>





            <main>
            <div class="featured__content mt10">

                <products ref="products" mode="catalog"></products>

            </div>
            </main>




            <pagination></pagination>


        </div>
    </div>


    <div class="advantages">
        <div class="container advantages_content">
        <div class="advantage_one working_conditions_delivery">
            <div class="working_conditions_head">Free Delivery</div>
            <div class="working_conditions_text">Worldwide delivery on all. Authorit tively morph<br>next-generation innov tion with extensive models.</div>
        </div>
        <div class="advantage_one working_conditions_percent">
            <div class="working_conditions_head">Sales & discounts</div>
            <div class="working_conditions_text">Worldwide delivery on all. Authorit tively morph<br>next-generation innov tion with extensive models.</div>
        </div>
        <div class="advantage_one working_conditions_quality">
            <div class="working_conditions_head">Quality assurance</div>
            <div class="working_conditions_text">Worldwide delivery on all. Authorit tively morph<br>next-generation innov tion with extensive models.</div>
        </div>
        </div>                                                    
    </div>
</DIV>
    `
});





