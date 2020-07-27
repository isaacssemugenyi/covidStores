const express  = require('express');
const router = express.Router();
const isAuthenticate = require('../config/authenticate');
const { adminDenied } = require('../config/access')

// Default route
router.get('/register', isAuthenticate , adminDenied , (req, res)=>{
    res.render('client_registration', {title: "New Client"})
})

// A post route for client registration and purchase

module.exports = router