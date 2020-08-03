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
      const clientTotal = await ClientSale.countDocuments((err, clientCount) => clientCount);
      // Product total
      const products =  await Product.countDocuments((err, count) => count)

      ClientSale.find({}, (err, clients) => {
        res.render('staff_panel', { 
          title: "Staff Panel", 
          count: products, 
          staff: staff, 
          client : clientTotal, 
          fname: req.user.fname, 
          role: req.user.role,
          clients : clients
        })
      });
  } catch(err){
    throw err;
  }
})

module.exports = router