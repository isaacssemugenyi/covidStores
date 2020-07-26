const passport = require('passport')

//Access control
module.exports = function isAuthenticate(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else{
        req.flash('danger', 'Not Authorized');
        res.redirect('/staff/login');
    }
}
