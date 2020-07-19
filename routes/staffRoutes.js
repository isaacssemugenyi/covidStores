const express  = require('express');
const router = express.Router();
const staffRegister = require('../models/staffModel');

// Login route
router.get('/login', (req, res)=>{
    res.render('staff_login')
})

//New staff route
router.get('/new', (req, res)=>{
    res.render('new_staff', {title: "New Staff"})
})

//Staff list route
router.get('/list', (req, res)=>{
    res.render('staff_list', {title: "Staff List"})
})

// New staff members
router.post('/new', async(req, res)=>{
    const staff = new staffRegister();
    staff.fname = req.body.fname;
    staff.lname = req.body.lname;
    staff.username = req.body.username;
    staff.email = req.body.email;
    staff.phone = req.body.phone;
    staff.eid = req.body.eid;
    staff.nid = req.body.nid;
    staff.password = req.body.password;
    staff.c_password = req.body.c_password;

    try{
        await staff.save((err, result)=>{
            if(err) {
                console.log(err)
            }else {
                req.flash('success', 'Staff Added');
                res.redirect(303, '/staff/list')
            }
        })
    } catch(error){
        console.log(error)
    }
})

//Delete route for staff

module.exports = router