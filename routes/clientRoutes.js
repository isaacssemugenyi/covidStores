const express  = require('express');
const generator = require('meaningful-string')
const router = express.Router();
const isAuthenticate = require('../config/authenticate');
const { adminDenied } = require('../config/access')
const ClientSale = require('../models/clientModel')
const Product = require('../models/productModel');

//Generating a Random Reference number on register
var options = { "min":5, "max":7, "capsWithNumbers":true }
const customerReference = 'CS-' + generator.random(options);

// Default route
router.get('/register', isAuthenticate , adminDenied , async(req, res)=>{
    try{
        const products = await Product.find((err, products)=> products);
        await ClientSale.find((err, clients)=>{
            if(err) throw err;
            res.render('client_registration', {title: "New Client", clients: clients, products: products})
        })
    } catch(err){
        console.log(err);
    }
})

// A post route for client registration and purchase registered by agent
router.post('/register', isAuthenticate, adminDenied, async(req, res)=>{
    const customer = new ClientSale();
    customer.cname = req.body.cname
    customer.clocation = req.body.clocation
    customer.cphone = req.body.cphone
    customer.cemail = req.body.cemail
    customer.cinitialPay = req.body.cinitialPay
    customer.cnid =req.body.cnid
    customer.citemName = req.body.citemName //do a datalist for product
    customer.itemSerial = req.body.itemSerial //do a datalist for itemSerial number
    customer.dateOfPay = req.body.dateOfPay
    customer.nextPayDate = req.body.nextPayDate
    customer.nextPayAmt = req.body.nextPayAmt
    customer.refereeNo = req.body.refereeNo 
    customer.crefNo = customerReference 
    
    // post data to db
    try{
       await customer.save((err) => {
            if(err) throw err;
            req.flash('success', 'Product sold')
            // Redirect to single page for buy and receipt print
            res.redirect('/client/register')
        })
    } catch(error){
        throw error
    }
})

module.exports = router