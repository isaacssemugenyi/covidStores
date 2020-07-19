const express  = require('express');
const router = express.Router();

//Admin_panel route
router.get('/', (req, res)=>{
    res.render('admin_panel', {title: "Admin Panel"})
})

module.exports = router