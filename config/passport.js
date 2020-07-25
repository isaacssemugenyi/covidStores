const LocalStrategy = require('passport-local').Strategy;
const Staff = require('../models/staffModel');
const config = require('../config/db');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
    //Local Strategy
    passport.use(new LocalStrategy(function(username, password, done){
        //Match Username
        let query = {username : username};
        Staff.findOne(query, function(err, staff){
            if(err) throw err;
            if(!staff){
                return done(null, false, {message: 'Wrong Username or Password'});
            }

            //Match Password
            bcrypt.compare(password, staff.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, staff);
                }else{
                    return done(null, false, {message: 'Wrong Username or Password'});
                }
            });
        });
    }));

    passport.serializeUser(function(staff, done){
        done(null, staff.id);
    });

    passport.deserializeUser(function(id, done){
        Staff.findById(id, function(err, staff){
            done(err, staff);
        })
    })
}