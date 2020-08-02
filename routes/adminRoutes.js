const express  = require('express');
const router = express.Router();
const isAuthenticate = require('../config/authenticate');

//Models
const Product = require('../models/productModel'); //Product register model
const StaffRegister = require('../models/staffModel') //Staff register model
const ClientSale = require('../models/clientModel') //Client buy model

//Admin_panel route
router.get('/', isAuthenticate, async (req, res)=>{
  try{
    // Number of staff
      const staff = await StaffRegister.countDocuments((err, staffCount) => staffCount);
      // Number of clients
      const client = await ClientSale.countDocuments((err, clientCount) => clientCount);
      
      const products =  Product.countDocuments({}, (err, count) => {
   
        res.render('staff_panel', {
            title: "Staff Panel", 
            count: count,
            staff: staff,
            client : client,
            fname: req.user.fname,
            role: req.user.role
        })
    })
  } catch(err){
    throw err;
  }
})

module.exports = router