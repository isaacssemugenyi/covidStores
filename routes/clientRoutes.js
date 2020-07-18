const express  = require('express');
const router = express.Router();

// Default route
router.get('/register', (req, res)=>{
    res.render('client_registration', {title: "New Client"})
})

module.exports = router