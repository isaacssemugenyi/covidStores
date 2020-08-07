const express = require('express');
const router = express.Router();

//Require in the product model
const Product = require('../models/productModel');

//Default route
router.get('/', (req, res)=>{
    Product.find((err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    id: product.id,
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    image: product.pdt_image,
                    serial: product.serial_no,
                    payplan: product.pay_interval
                }
            })
        }
        res.render('homepage', {title: "Home", context: context})
    }).sort({"_id":-1})
    // .limit(8)
})
module.exports = router;