const express = require('express');
const router = express.Router();

//Default route
router.get('/', (req, res)=>{
    res.render('homepage', {title: "Home"})
})

module.exports = router;