const express  = require('express');
const router = express.Router();

//Admin_panel route
router.get('/admin', (req, res)=>{
    res.render('admin_panel')
})

module.exports = router