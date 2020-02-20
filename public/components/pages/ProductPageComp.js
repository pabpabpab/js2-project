Vue.component('product-page', {

    template: `
<DIV>
    <bread-crumbs></bread-crumbs>

    <single-product></single-product>

    <section class="also">
        <h4 class="also_h4">you may like also</h4>
        <products ref="products" mode="you-may-like-also"></products>
    </section>
</DIV>`
});





