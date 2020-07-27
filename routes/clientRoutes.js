const express  = require('express');
const router = express.Router();

// Default route
router.get('/register', (req, res)=>{
    res.render('client_registration', {title: "New Client"})
})

// A post route for client registration and purchase

module.exports = router