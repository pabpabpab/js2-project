Vue.component('bottom-section', {

    template: `
        <div class="container bottom_section">
        <div class="about_company">
            <div class="bottom_logo_div"><a href="#" @click.prevent="$root.setPage('main-page')"><img src="img/logo.png" alt="logo" class="logo_img"></a> <a href="#" class="logo_text" @click.prevent="$root.setPage('main-page')">BRAN</a></div>
            <p class="about_company_text">
                Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                <br><br> 
                Efficiently plagiarize 24/365 action items and focused infomediaries.
                Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
            </p>
        </div>
        <nav class="bottom_nav">
            <div class="bottom_nav_column">
                <p class="bottom_nav_column_head">COMPANY</p>
                <ul class="bottom_menu_ul">
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link" @click.prevent="$root.setPage('main-page')">Home</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">Shop</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">About</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">How It Works</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">Contact</a></li>
                </ul>
            </div>
            <div class="bottom_nav_column">
                <p class="bottom_nav_column_head">INFORMATION</p>
                <ul class="bottom_menu_ul">
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">Tearms & Condition</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">Privacy Policy</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">How to Buy</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">How to Sell</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link">Promotion</a></li>
                </ul>
            </div>
            <div class="bottom_nav_column">
                <p class="bottom_nav_column_head">SHOP CATEGORY</p>
                <ul class="bottom_menu_ul">
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link" @click.prevent="$root.setPage('catalog-page')">Men</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link" @click.prevent="$root.setPage('catalog-page')">Women</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link" @click.prevent="$root.setPage('catalog-page')">Child</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link" @click.prevent="$root.setPage('catalog-page')">Apparel</a></li>
                    <li class="bottom_menu_li"><a href="#" class="bottom_menu_li_link" @click.prevent="$root.setPage('catalog-page')">Browse All</a></li>
                </ul>
            </div>
        </nav>
    </div>`
});



