Vue.component('main-page', {

    template: `       
    <main>
        <section>
            <div class="promo">
                <div class="container promo__content">
                    <div class="promo__left">
                        <h2>THE BRAND</h2>
                        <h3>OF LUXERIOUS</h3> </div>
                </div>
            </div>
        </section>

            <div class="hot">
                <div class="container hot__content">
                    <div class="hot__content__left">
                        <div class="hot__one hot__first ">
                            <div class="hot__sticker">
                                <p class="hot__sticker__text1">hot deal</p>
                                <p class="hot__sticker__text2">for men</p>
                            </div>
                        </div>
                        <div class="hot__one hot__second">
                            <div class="hot__sticker">
                                <p class="hot__sticker__text1">LUXIROUS & trendy</p>
                                <p class="hot__sticker__text2">ACCESORIES</p>
                            </div>
                        </div>
                    </div>
                    <div class="hot__content__right">
                        <div class="hot__one hot__third">
                            <div class="hot__sticker">
                                <p class="hot__sticker__text1">30% offer</p>
                                <p class="hot__sticker__text2">women</p>
                            </div>
                        </div>
                        <div class="hot__one hot__fourth">
                            <div class="hot__sticker">
                                <p class="hot__sticker__text1">new arrivals</p>
                                <p class="hot__sticker__text2">FOR kids</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









        <section>
            <div class="featured">
                <div class="container featured__head">
                    <h4>Featured Items</h4>
                    <p class="featured__head__text">Shop for items based on what we featured in this week</p>
                </div>
                

                <products ref="products" mode="featured-products"></products>


            </div>
            <div class="content browse_all"> <a href="catalog/catalog.html" class="link_button browse_all_arrow">Browse All Product</a> </div>
        </section>





        <section>
            <div class="container discount">
                <div class="discount__left">
                    <h2 class="discount__h2">OFFER</h2>
                    <h3 class="discount__h3">FOR WOMEN</h3> </div>
                <div class="discount__right">
                    <div class="working_conditions working_conditions_delivery">
                        <div class="working_conditions_head">Free Delivery</div>
                        <div class="working_conditions_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                    <div class="working_conditions working_conditions_percent">
                        <div class="working_conditions_head">Sales & discounts</div>
                        <div class="working_conditions_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                    <div class="working_conditions working_conditions_quality">
                        <div class="working_conditions_head">Quality assurance</div>
                        <div class="working_conditions_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </div>
            </div>
        </section>
    </main>`
});





