const express  = require('express');
const router = express.Router();
const staffRegister = require('../models/staffModel');

// Login route
router.get('/login', (req, res)=>{
    res.render('staff_login')
})

router.get('/new', (req, res)=>{
    res.render('new_edit_staff')
})

router.post('/new', async(req, res)=>{
    const staff = new staffRegister(req.body);
    try{
        await staff.save((err, result)=>{
            if(err) console.log(err)
            res.json(result);
        })
    } catch(error){
        console.log(error)
    }
})

module.exports = router