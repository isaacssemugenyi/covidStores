const express  = require('express');
const router = express.Router();

  //Require in the product model
const Product = require('../models/productModel');

//fitness route
router.get('/', (req, res)=>{
    Product.find({pdt_scheme: 'LTPP'},(err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme
                }
            })
        }
        res.render('ltpp', {title: "LTPP", context: context})
    }).sort({"_id":-1})
})

//fitness route
router.get('/fitness', (req, res)=>{
    Product.find({pdt_category: 'fitness'},(err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme
                }
            })
        }
        res.render('fitness', {title: "Fitness", context: context})
    }).sort({"_id":-1})
})

//machinery route
router.get('/machinery', (req, res)=>{
    Product.find({pdt_category: 'machinery'},(err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme
                }
            })
        }
        res.render('machinery', {title: "Machinery", context: context})
    }).sort({"_id":-1})
})

//Furniture route
router.get('/furniture', (req, res)=>{
    Product.find({pdt_category: 'furniture'},(err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme
                }
            })
        }
        res.render('furniture', {title: "Furniture", context: context})
    }).sort({"_id":-1})
})

//electronics route
router.get('/electronics', (req, res)=>{
    Product.find({pdt_category: 'electronics'},(err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme
                }
            })
        }
        res.render('electronics', {title: "Electronics", context: context})
    }).sort({"_id":-1})
})

//product list access by admin with full right to edit and delete
router.get('/list', (req, res)=>{
    Product.find((err, products)=>{
        var context = {
            products: products.map(product => {
                const displayYear = () => {
                   return `${product.entry_date.getDate()} - ${product.entry_date.getMonth()} - ${product.entry_date.getFullYear()}` };
                return {
                    id: product._id,
                    serial: product.serial_no,
                    name: product.pdt_name,
                    category: product.pdt_category,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    entry: displayYear()                  
                }
            })
        }
        res.render('product_list', {title: "Product List", context: context})
    }).sort({"_id":-1})
})

//product list access by staff/ agent with search and viewing right
//Pending

//Serving the product create page
router.get('/new', (req, res)=>{
    res.render('new_product', {title: "New Product"})
})

//Creating new product done by admin, and editing
router.post('/new', async (req, res)=>{
    const product = new Product(req.body);
    try {
       await product.save((err)=>{
            if(err){
                console.log(err)
            } else {
                req.flash('success','Product Created')
                res.redirect('/product/list')
            }
        })
    } catch(err){
        console.log(err);
    }
})

//update product route
router.get('/view/:id', (req, res)=>{
    let query = req.params.id;
    Product.findById(query, (err, product)=>{
        if(err) {
            console.log(err);
        } else {
            res.render('view_product', 
            {
                title: "View Product",
                product: product
            }
            )
        }
    })
})

//deleting a product, done by admin

//deleting multiple products done by admin also


module.exports = router