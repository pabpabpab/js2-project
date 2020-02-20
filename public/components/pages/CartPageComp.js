Vue.component('cart-page', {

    template: `
<DIV>
    <bread-crumbs></bread-crumbs>
    <main class="container shoppingCart">

            <div class="shoppingCart__header">
                <div class="shoppingCart__item__productDetails shoppingCartTile">Product Details</div>
                <div class="shoppingCart__item__unitPrice shoppingCartTile">unite Price</div>
                <div class="shoppingCart__item__quantity shoppingCartTile">Quantity</div>
                <div class="shoppingCart__item__shipping shoppingCartTile">shipping</div>
                <div class="shoppingCart__item__subtotal shoppingCartTile">Subtotal</div>
                <div class="shoppingCart__item__action shoppingCartTile">ACTION</div>
            </div>


            <cart-body></cart-body>
            <checkout></checkout>
    </main>
</DIV>`
});





