const express  = require('express');
const router = express.Router();

// Login route
router.get('/login', (req, res)=>{
    res.render('staff_login')
})

module.exports = router