const express  = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');



const staffRegister = require('../models/staffModel');

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
    //staff.c_password = req.body.c_password;

    try{
        await bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(staff.password, salt, (error, hash)=>{
                if(error){
                    console.log(error)
                } else {
                    staff.password = hash;
                    staff.save((err)=>{
                        if(err) {
                            console.log(err);
                            return;
                        }else {
                            req.flash('success', 'Staff Added');
                            res.redirect(303, '/staff/list')
                        }
                    })
                }  
            });
        })
    } catch(error){
        console.log(error)
    }
})


// Login page route
router.get('/login', (req, res)=>{
    res.render('staff_login')
})

//Login process
router.post('/login', (req, res, next)=>{
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/staff/login',
        failureFlash: true
    })(req, res, next);
})

//Staff Logout
router.get('/logout', (req, res)=>{
    req.logout();
    req.flash('Success', 'You are logged out');
    res.redirect('/staff/login');
})

//Delete route for staff

module.exports = router