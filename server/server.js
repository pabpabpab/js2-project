const express = require('express');
const featuredRouter = require('./featuredRouter');
const alsoProductsRouter = require('./alsoProductsRouter');
const catalogRouter = require('./catalogRouter');
const cartRouter = require('./cartRouter');
const checkoutRouter = require('./checkoutRouter');
const feedbackRouter = require('./feedbackRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/featured-products', featuredRouter);
app.use('/api/also-products', alsoProductsRouter);
app.use('/api/products', catalogRouter);
app.use('/api/cart', cartRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/feedback-list', feedbackRouter);




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

