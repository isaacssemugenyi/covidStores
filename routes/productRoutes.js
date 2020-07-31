const express  = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const isAuthenticate = require('../config/authenticate');
const { isAuthorized } = require('../config/access');
const fs = require('fs');

// Generate a random number to name
const name = ()=> Math.floor(Math.random()*10000); 

// Working with multer diskStorage method
const storage = multer.diskStorage({
     destination: function(req, file, cb){
         cb(null, 'uploads/');
    },
     filename: function(req, file, cb){
         cb(null, name() + file.originalname);
        //  console.log(file);
     }
 });
//  const option = req.file ? storage : 'uploads/product_image.jpg';

const fileFilter = (req, file, cb)=>{
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === '') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

 const upload = multer({
     storage: storage,
     limits: {fileSize: 1024 * 1024 * 7},
     fileFilter: fileFilter
 });

//Require in the product model
const Product = require('../models/productModel');

//fitness route
router.get('/', (req, res)=>{
    Product.find({pdt_scheme: 'LTPP'},(err, products)=>{
        var context = {
            products: products.map(product => {
                return {
                    id: product.id,
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    image: product.pdt_image
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
                    id: product.id,
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    image: product.pdt_image
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
                    id: product.id,
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    image: product.pdt_image
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
                    id: product.id,
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    image: product.pdt_image
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
                    id: product.id,
                    name: product.pdt_name,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    image: product.pdt_image
                }
            })
        }
        res.render('electronics', {title: "Electronics", context: context})
    }).sort({"_id":-1})
})

//product list access by admin with full right to edit and delete
router.get('/list', isAuthenticate, (req, res)=>{
    Product.find((err, products)=>{
        var context = {
            products: products.map(product => {
                // const displayYear = () => {
                //    return `${product.entry_date.getDate()} - ${product.entry_date.getMonth()} - ${product.entry_date.getFullYear()}` };
                return {
                    id: product._id,
                    serial: product.serial_no,
                    name: product.pdt_name,
                    category: product.pdt_category,
                    price: product.pdt_price,
                    scheme: product.pdt_scheme,
                    entry: product.entry_date                  
                }
            })
        }
        res.render('product_list', {title: "Product List", context: context})
    }).sort({"_id":-1})
})

//product list access by staff/ agent with search and viewing right //Pending

//Serving the product create page
router.get('/new', isAuthenticate, isAuthorized , (req, res)=>{
    res.render('new_product', {title: "New Product"})
})

//Creating new product done by admin, and editing
router.post('/new', isAuthenticate, isAuthorized ,upload.single('pdt_image'), async (req, res)=>{
    // End working on image
    const product = new Product();
    product.pdt_name = req.body.pdt_name;
    product.make = req.body.make; 
    product.entry_date = Date.now(); 
    product.pdt_category = req.body.pdt_category;
    product.serial_no = req.body.serial_no;
    product.pdt_color = req.body.pdt_color;
    product.pdt_price = req.body.pdt_price;
    product.pay_interval = req.body.pay_interval;
    product.pdt_stock = req.body.pdt_stock;
    product.pdt_scheme = req.body.pdt_scheme
    product.pdt_image = req.file.path;
    product.pdt_desc = req.body.pdt_desc;
    // console.log(req.file.path);
    try {
       await product.save((err)=>{
            if(err){
                console.log(err)
            } else {
                req.flash('success','Product Created')
                res.redirect('/product/new');
                //res.render('new_product')
            }
        })
    } catch(err){
        console.log(err);
    }
})

//update product route
router.get('/view/:id', isAuthenticate, (req, res)=>{
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

//Product Edit route, done by admin
//to be workedon today

//deleting a product, done by admin
router.get('/delete/:id', isAuthenticate , isAuthorized , async (req, res)=>{
    let query = req.params.id;
    Product.findByIdAndRemove(query, (err, product)=>{
        if(err){
            console.log(err);
        }else {
            fs.unlink(product.pdt_image , function (err) {
            if (err) throw err;
            // if no error, show flash message and redirect to product list
            req.flash('succces', "File deleted");
            res.redirect('/product/list');
            });  
        }
    })
})

module.exports = router