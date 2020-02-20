Vue.component('top-navigation', {

    template: `<nav class="nav">
        <div class="container nav__content">
            <ul class="nav__ul">
                <li class="nav__li"><a href="#" class="nav__li__link" @click.prevent="$root.setPage('main-page')">Home</a></li>
                <li class="nav__li">
                    <a href="#" class="nav__li__link" @click.prevent="$root.setPage('catalog-page')">Man</a>
                    <div class="drop">
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
                        <div class="drop__flex">
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav__li">
                <a href="#" class="nav__li__link" @click.prevent="$root.setPage('catalog-page')">Women</a>
                <div class="drop">
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
                        <div class="drop__flex">
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav__li"><a href="#" class="nav__li__link" @click.prevent="$root.setPage('catalog-page')">Kids</a></li>
                <li class="nav__li"><a href="#" class="nav__li__link" @click.prevent="$root.setPage('catalog-page')">Accoseriese</a></li>
                <li class="nav__li">
                <a href="#" class="nav__li__link" @click.prevent="$root.setPage('catalog-page')">Featured</a>
                <div class="drop drop_last">
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
                        <div class="drop__flex">
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav__li">
                <a href="#" class="nav__li__link" @click.prevent="$root.setPage('catalog-page')">Hot Deals</a>
                <div class="drop drop_last">
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
                        <div class="drop__flex">
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                            <h5 class="drop__h5">Women</h5>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`
});



