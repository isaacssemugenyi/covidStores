//Requiring middleware
const express  = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//Authentication and Authorization middleware
const isAuthenticate = require('../config/authenticate');
const { isAuthorized } = require('../config/access');

//
const staffRegister = require('../models/staffModel');
const StaffRoles = require('../models/roleModel');

//New staff route
router.get('/new', isAuthenticate , isAuthorized ,async (req, res)=>{
    try {
        await StaffRoles.find((err, roles)=>{
            if(err) throw err;
            res.render('new_staff', {title: "New Staff", roles: roles})
        }).sort({"_id":-1})
    } catch(error){
        console.log(err);
    }
    
})

//Staff list route
router.get('/list', isAuthenticate , isAuthorized , (req, res)=>{
    staffRegister.find((err, members)=>{
        if(err) throw err;
        res.render('staff_list', {title: "Staff List", members : members})
    })
})

// New staff members
router.post('/new', isAuthenticate , isAuthorized , async(req, res)=>{
    const staff = new staffRegister();
    staff.fname = req.body.fname;
    staff.lname = req.body.lname;
    staff.username = req.body.username;
    staff.email = req.body.email;
    staff.phone = req.body.phone;
    staff.eid = req.body.eid;
    staff.nid = req.body.nid;
    staff.role = req.body.role;
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

//GET staff edit form
router.get('/edit/:id', isAuthenticate, isAuthorized, (req, res)=>{
    let query = req.params.id;
    staffRegister.findById(query, (err, staff)=>{
        if(err) {
            console.log(err);
        } else {
            res.render('edit_staff', {
                    title: "Edit Staff",
                    staff: staff
                }
            )
        }
    })
})

//POST: Update the database
router.post('/edit/:id', isAuthenticate, isAuthorized, (req, res)=>{
    let id = req.params.id;
    staffRegister.findOne({_id : id}, (err, staff)=>{
        if(err) {
            throw err
        } else {
            if(!staff){
                res.json('Staff Not Found')
            }else {
                req.body.fname != "" ? staff.fname = req.body.fname : staff.fname;
                req.body.lname != "" ? staff.lname = req.body.lname : staff.lname;
                req.body.username != "" ? staff.username = req.body.username : staff.username;
                req.body.email != "" ? staff.email = req.body.email : staff.email;
                req.body.phone !="" ? staff.phone = req.body.phone : staff.phone;
                req.body.eid != "" ? staff.eid = req.body.eid : staff.eid;
                req.body.nid != "" ? staff.nid = req.body.nid : staff.nid;
                req.body.role != "" ? staff.role = req.body.role : staff.role;
               
                staff.save((err)=>{
                    err ? console.log(err) : res.redirect('/staff/list');
                })
            }
        }
    })
})

// /staff/delete/"+staff.id
router.get('/delete/:id', isAuthenticate , isAuthorized ,async (req, res)=>{
    let query = req.params.id;
    staffRegister.findByIdAndRemove(query, (err)=>{
        if(err){
            console.log(err);
        }else {
            req.flash('succces', "Staff deleted");
            res.redirect('/staff/list');
        }
    })
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