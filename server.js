// Dependencies
const express = require('express');
const path = require('path');
const {body, validationResult} = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');

//instantiations
const app = express();
app.set('view engine', 'pug'); //Using pug engine
app.set('views', './views');
const DB = require('./config/db');

const homeRoute = require('./routes/homeRoute')
const adminRoutes = require('./routes/adminRoutes')
const clientRoutes = require('./routes/clientRoutes')
const productRoutes = require('./routes/productRoutes')
const staffRoutes = require('./routes/staffRoutes')

//configurations
app.use('/uploads', express.static('uploads'));
app.use('/product/uploads', express.static('uploads'));

//http://localhost:3000/uploads/
app.use(express.static(path.join(__dirname , 'public'))); //Using static files
app.use(express.urlencoded({extended: true})) // Accessing form data

// Express session middleware
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

// Express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res); 
  next();
});


//Routing
app.use('/', homeRoute)
app.use('/client', clientRoutes)
app.use('/staff', staffRoutes)
app.use('/product', productRoutes)
app.use('/admin', adminRoutes)

//Listening to port
app.listen(3000, ()=>{console.log('Server started on port 3000')});
