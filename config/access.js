const Staff = require('../models/staffModel');

module.exports.isAuthorized  = function(req, res, next) {

  Staff.findById(req.user.id).exec(function (error, user) {
      if (error) {
          return next(error);
      } else {      
          if (user.role === 'Admin') {   
              return next();  
          } else {
            req.flash('danger', 'Not authorised to view this page')
            res.redirect('back');
          }
      }
  });
}











// const AccessControl = require('accesscontrol');
// const ac = new AccessControl();

// exports.roles = (function(){
//     ac.grant('Agent')
//     .readAny('client/register')
//     .readAny('product')
//     .createAny("client/register")
  
//   ac.grant("Admin")
//   .extend("Agent")
//   .readAny(["staff", "admin"])
//   .createAny(["staff","product"])
//   .updateAny(["staff","product"]) 
  
//   return ac;
// })();
