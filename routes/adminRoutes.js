const express  = require('express');
const router = express.Router();

//Models
const Product = require('../models/productModel');
const Staff = require('../models/staffModel')

//Admin_panel route
router.get('/', (req, res)=>{
  const products =  Product.countDocuments({}, (err, count) => {
    //   const staff = Staff.count({}, staff => staff)   
    res.render('admin_panel', {
        title: "Admin Panel", 
        count: count
    })
})
})

module.exports = router