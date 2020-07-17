// Requires packages
const express = require('express');
const app = express();

//Using pug engine
app.set('view engine', 'pug');
app.set('views', './views');

//Using static files
app.use(express.static('public'));

// Accessing form data
app.use(express.urlencoded({extended: true}))

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