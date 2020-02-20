const express = require('express');
const fs = require('fs');
const router = express.Router();




//получить все товары
router.get('/', (req, res) => {
    fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});




//получить один товар по его id
router.get('/:id', (req, res) => {
    fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            let allProducts = JSON.parse(data);
            const find = allProducts.find(el => el.id_product === +req.params.id);
            //заодно отправим максимальный существующий id из всех товаров (будет нужно для генерации id нового товара при добавлении в корзину товара с выбранными пользователем параметрами на странице одного товара)
            const response = {product: find, max_products_id: getMaxProductsId(data)};
            res.send(JSON.stringify(response));

        }
    });
});



//получить максимально существующий id товаров (нужно для страницы одного товара при генерации нового товара)
function getMaxProductsId(data) {
    let maxId = 0;
    let allProducts = JSON.parse(data);
    allProducts.forEach((item) => {
        if (item.id_product > maxId) maxId = item.id_product;
    });
    return maxId;
}



module.exports = router;
