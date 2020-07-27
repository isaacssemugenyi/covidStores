const passport = require('passport')

//Authentication
module.exports = function isAuthenticate(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else{
        req.flash('danger', 'Please login');
        res.redirect('/staff/login');
    }
}
