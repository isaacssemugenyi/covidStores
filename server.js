// Dependencies
const express = require('express');
const app = express();

//configurations
app.set('view engine', 'pug'); //Using pug engine
app.set('views', './views');

//middlewares
app.use(express.static('public')); //Using static files
app.use(express.urlencoded({extended: true})) // Accessing form data

//Routes
// Default route
app.get('/', (req, res)=>{
    res.render('homepage')
})

// Login route
app.get('/login', (req, res)=>{
    res.render('staff_login')
})

//Admin_panel route
app.get('/admin', (req, res)=>{
    res.render('admin_panel')
})

app.get('/new_product', (req, res)=>{
    res.render('new_edit_product')
})

// Default route
app.get('/register', (req, res)=>{
    res.render('client_registration')
})

//Listening to port
app.listen(3000, ()=>{console.log('Server started on port 3000')});

//Electronics, furniture, machinery, fitness