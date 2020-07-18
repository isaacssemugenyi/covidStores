const express  = require('express');
const router = express.Router();

//Default route
router.get('/', (req, res)=>{
    res.render('homepage', {title: "Home"})
})

//fitness route
router.get('/fitness', (req, res)=>{
    res.render('fitness', {title: "Fitness"})
})

//machinery route
router.get('/machinery', (req, res)=>{
    res.render('machinery', {title: "Machinery"})
})

//Furniture route
router.get('/furniture', (req, res)=>{
    res.render('furniture', {title: "Furniture"})
})

//electronics route
router.get('/electronics', (req, res)=>{
    res.render('electronics', {title: "Electronics"})
})

//product list access by admin with full right to edit and delete
router.get('/product', (req, res)=>{
    res.render('product_list')
})

//product list access by staff/ agent with search and viewing right
//Pending

//Creating new product done by admin, and editing
router.get('/new', (req, res)=>{
    res.render('new_edit_product')
})

//deleting a product, done by admin

//deleting multiple products done by admin also

module.exports = router