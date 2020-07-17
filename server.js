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
    res.sendFile(__dirname +'/homepage.html')
})

// Pug Default route
app.get('/pug', (req, res)=>{
    res.render('homepage')
})

//Login route
app.get('/login', (req, res)=>{
    res.sendFile(__dirname +'/staff_login.html')
})
app.get('/admin_panel', (req, res)=>{
    res.sendFile(__dirname + '/admin_panel.html')
})

//New products route
app.get('/new_product', (req, res)=>{
    res.sendFile(__dirname +'/new_edit_product.html')
})

//New client route
app.get('/client-register', (req, res)=>{
    res.sendFile(__dirname +'/client_registration.html');
})

//Listening to port
app.listen(3000, ()=>{console.log('Server started on port 3000')});

//Electronics, furniture, machinery, fitness