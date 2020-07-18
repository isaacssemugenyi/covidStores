const express  = require('express');
const router = express.Router();

//Default route
router.get('/', (req, res)=>{
    res.render('homepage')
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