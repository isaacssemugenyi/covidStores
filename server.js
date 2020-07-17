// Dependencies
const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/adminRoutes')
const clientRoutes = require('./routes/clientRoutes')
const productRoutes = require('./routes/productRoutes')
const staffRoutes = require('./routes/staffRoutes')

const app = express();

//configurations
app.set('view engine', 'pug'); //Using pug engine
app.set('views', './views');
const DB = require('./config/db');

//middlewares
app.use(express.static(path.join(__dirname , 'public'))); //Using static files
app.use(express.urlencoded({extended: true})) // Accessing form data

//Routes
app.use('/client', clientRoutes)
app.use('/staff', staffRoutes)
app.use('/product', productRoutes)
app.use('/admin', adminRoutes)

//Listening to port
app.listen(3000, ()=>{console.log('Server started on port 3000')});

//Electronics, furniture, machinery, fitness