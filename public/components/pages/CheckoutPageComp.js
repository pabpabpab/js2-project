Vue.component('checkout-page', {



    mounted(){
        this.$parent.getJson(`/api/checkout`)
            .then(data => {
                alert(`получено ${JSON.stringify(data, null, 4)}`);
            });
    },


    template: `
<DIV>
    <bread-crumbs></bread-crumbs>


    <main class="container checkout">


        <ol class="checkout__ul">
            <li class="checkout__li">
                <details class="checkout__details" open>
                    <summary class="checkout__summary">Shipping Adress</summary>
                    <div class="checkout__detailsContent">
                        <div class="checkout__detailsContent__left">
                            <h5 class="checkout__h5">Check as a guest or register</h5>
                            <p class="checkout__text">Register with us for future convenience</p>
                            <form action="#">
                                <div class="checkout__usertype">
                                    <label class="checkout__radioboxLabel"><input name="usertype" type="radio" class="checkout__radioboxInput"><span class="checkout__fieldName checkout__fieldName_radiobox">checkout as guest</span></label>
                                    <label class="checkout__radioboxLabel"><input name="usertype" type="radio" class="checkout__radioboxInput" checked><span class="checkout__fieldName checkout__fieldName_radiobox">register</span></label>
                                </div>
                                <h5 class="checkout__h5">register and save time!</h5>
                                <p class="checkout__text">Register with us for future convenience</p>
                                <p class="checkout__text"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</p>
                                <p class="checkout__text pdt0"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</p>
                                <button type="submit" class="checkout__button">Continue</button>
                            </form>
                        </div>
                        <div class="checkout__detailsContent__right">
                            <h5 class="checkout__h5">Already registed?</h5>
                            <p class="checkout__text">Please log in below</p>
                            <form action="#">
                                <label for="checkoutEmail" class="checkout__fieldName checkout__fieldName_required">EMAIL ADDRESS</label>
                                <input type="email" id="checkoutEmail" class="checkout__input">
                                <label for="checkoutPassword" class="checkout__fieldName checkout__fieldName_required">PASSWORD</label>
                                <input type="password" id="checkoutPassword" class="checkout__input">
                                <p class="checkout__text checkout__text_requiredFields">* Required Fileds</p>
                                <button type="submit" class="checkout__button checkout__button_login">Log in</button>
                                <a href="#" class="checkout__forgotPassword">Forgot Password ?</a>
                            </form>
                        </div>
                    </div>
                </details>
            </li>


            <li class="checkout__li">
                <details class="checkout__details">
                    <summary class="checkout__summary">BILLING INFORMATION</summary>
                    <div class="checkout__details__content">
                        <br><br><br>
                    </div>
                </details>
            </li>

            <li class="checkout__li">
                <details class="checkout__details">
                    <summary class="checkout__summary">SHIPPING INFORMATION</summary>
                    <div class="checkout__details__content">
                        <br><br><br>
                    </div>
                </details>
            </li>

            <li class="checkout__li">
                <details class="checkout__details">
                    <summary class="checkout__summary">PAYMENT METHOD</summary>
                    <div class="checkout__details__content">
                        <br><br><br>
                    </div>
                </details>
            </li>

            <li class="checkout__li">
                <details class="checkout__details">
                    <summary class="checkout__summary">ORDER REVIEW</summary>
                    <div class="checkout__details__content">
                        <br><br><br>
                    </div>
                </details>
            </li>
        </ol>

    </main>
</DIV>`
});





