const add = (cart, req) => {
    cart.contents.push(req.body);
    return {
        newCart: JSON.stringify(cart, null, 4),
        newQuantity: req.body.quantity,
        logProduct: req.body,
        logAction: 'add new product'
    };
};




const change = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);

    //изменить кол-во товара
    let logAction = '';
    if (req.body.newQuantityValue) {
        //ввод кол-ва из input'а со страницы корзины
        find.quantity = +req.body.newQuantityValue;
        //для статистики
        logAction = `the product quantity is set to ${req.body.newQuantityValue}`;
    } else {
        //ввод кол-ва по кнопке "плюс" "минус"
        find.quantity += req.body.quantity;
        //для статистики
        logAction = (req.body.quantity > 0) ? `add ${req.body.quantity} more` : `remove  ${req.body.quantity}`;
    }


    return {
        newCart: JSON.stringify(cart, null, 4),
        newQuantity: find.quantity,
        logProduct: find,
        logAction: logAction
    };
};





const remove = (cart, req) => {
    if (req.params.id === 'clearCart') {
        cart.contents.length = 0;
        return {
            newCart: JSON.stringify(cart),
            newQuantity: 0,
            logProduct: {},
            logAction: 'clear cart completely'
        };
    } else {
        const find = cart.contents.find(el => el.id_product === +req.params.id);
        cart.contents.splice(cart.contents.indexOf(find), 1);
        return {
            newCart: JSON.stringify(cart, null, 4),
            newQuantity: 0,
            logProduct: find,
            logAction: 'remove product completely'
        };
    }
};





module.exports = {
    add,
    change,
    remove,
};
