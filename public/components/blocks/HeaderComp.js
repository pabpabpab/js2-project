Vue.component('header-section', {

    template: `
<header class="header">
        <div class="container header_content">
            <div class="header__left">
                <a href="#" @click.prevent="$root.setPage('main-page')"><img src="img/logo.png" alt="logo" class="logo_img"></a> <a href="#" class="logo_text" @click.prevent="$root.setPage('main-page')">BRAN</a>

                

                <search ref="search"></search>


            </div>
            <div class="header__right">
            <div class="header__right__cart">





                <drop-cart ref="cart"></drop-cart>





            </div>
            <div class="header__right__myaccount">
                <a href="#" class="link_button my_account_arrow">My Account</a>
            </div>
            </div>
        </div>
</header>`
});


