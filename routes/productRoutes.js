const express  = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const isAuthenticate = require('../config/authenticate');
const { isAuthorized } = require('../config/access');
const cloudinary = require('../config/cloundinary');
const fs = require('fs');

// Generate a random number to name
const name = ()=> Math.floor(Math.random()*10000); 

// Working with multer diskStorage method
const storage = multer.diskStorage({
     filename: function(req, file, cb){
         cb(null, name() + file.originalname);
     }
 });

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
                    image: product.pdt_image,
                    imageId: product.public_id,
                    serial: product.serial_no,
                    payplan: product.pay_interval
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
                    image: product.pdt_image,
                    imageId: product.public_id,
                    serial: product.serial_no,
                    payplan: product.pay_interval
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
                    image: product.pdt_image,
                    imageId: product.public_id,
                    serial: product.serial_no,
                    payplan: product.pay_interval
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
                    image: product.pdt_image,
                    imageId: product.public_id,
                    serial: product.serial_no,
                    payplan: product.pay_interval
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
                    image: product.pdt_image,
                    imageId: product.public_id,
                    serial: product.serial_no,
                    payplan: product.pay_interval
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
    const result = await cloudinary.uploader.upload(req.file.path);
    
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
    product.pdt_scheme = req.body.pdt_scheme;
    product.pdt_image = result.secure_url;
    product.imageId = result.public_id;
    product.pdt_desc = req.body.pdt_desc;

    try {
       await product.save((err)=>{
            if(err){
                console.log(err)
            } else {
                req.flash('success','Product Created')
                res.redirect('/product/new');
            }
        })
    } catch(err){
        console.log(err);
    }
})

//User View product route
router.get('/view/:id', isAuthenticate , (req, res)=>{
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

//Customer View product route
router.get('/views/:id', (req, res)=>{
    let query = req.params.id;
    Product.findById(query, (err, product)=>{
        if(err) {
            console.log(err);
        } else {
            res.render('product_view_customer', 
            {
                title: "Customer Product",
                product: product
            }
            )
        }
    })
})

//update product route
router.get('/edit/:id', isAuthenticate, isAuthorized, (req, res)=>{
    let query = req.params.id;
    Product.findById(query, (err, product)=>{
        if(err) {
            console.log(err);
        } else {
            res.render('edit_product', 
            {
                title: "Edit Product",
                product: product
            }
            )
        }
    })
})

//Product Edit route, done by admin
router.post('/edit/:id', isAuthenticate, isAuthorized, (req, res)=>{
    let id = req.params.id;
    Product.findOne({_id : id}, (err, product)=>{
        if(err) {
            throw err
        } else {
            if(!product){
                res.json('Product Not Found')
            }else {
                req.body.pdt_name != "" ? product.pdt_name = req.body.pdt_name : product.pdt_name;
                req.body.make != "" ? product.make = req.body.make : product.make;
                req.body.pdt_category != "" ? product.pdt_category = req.body.pdt_category : product.pdt_category;
                req.body.serial_no != "" ? product.serial_no = req.body.serial_no : product.serial_no;
                req.body.pdt_color !="" ? product.pdt_color = req.body.pdt_color : product.pdt_color;
                req.body.pdt_price != "" ? product.pdt_price = req.body.pdt_price : product.pdt_price;
                req.body.pdt_interval != "" ? product.pdt_interval = req.body.pdt_interval : product.pdt_interval;
                req.body.pdt_stock != "" ? product.pdt_stock = req.body.pdt_stock : product.pdt_stock;
                req.body.pdt_scheme != "" ? product.pdt_stock = req.body.pdt_stock : product.pdt_stock;
                req.body.pdt_desc ? product.pdt_desc = req.body.pdt_desc : product.pdt_desc;

                product.save((err)=>{
                    err ? console.log(err) : res.redirect('/product/view/'+id);
                })
            }
        }
    })
})

//deleting a product, done by admin
router.get('/delete/:id', isAuthenticate , isAuthorized ,async (req, res)=>{
    let query = req.params.id;
    try{
        const ProductToDelete = await Product.findById(query);
        await cloudinary.uploader.destroy({ where: { public_id: ProductToDelete.imageId }});
        await Product.findByIdAndDelete(ProductToDelete.id);
        req.flash('succces', "File deleted");
        res.redirect('/product/list');
    }catch(err){
        res.status(500).send(err.message);
    }
    // Uganda11@
})

module.exports = router
