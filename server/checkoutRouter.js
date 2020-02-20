const express = require('express');
const fs = require('fs');
const router = express.Router();
const logger = require('./logger');
const file = "./server/db/userCheckout.json";


router.get('/', (req, res) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});



router.post('/', (req, res) => {
   let userData = JSON.stringify(req.body, null, 4);
   fs.writeFile(file, userData, (err) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            logger(req.body, 'user send checkout data');
            res.send(`{"result": 1}`);
        }
    })
});




module.exports = router;
