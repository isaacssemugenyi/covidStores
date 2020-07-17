const express  = require('express');
const router = express.Router();

// Default route
router.get('/register', (req, res)=>{
    res.render('client_registration')
})

module.exports = router