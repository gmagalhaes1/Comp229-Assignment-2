const express = require('express');
const bp = require('body-parser');

//creating app
const app = express();

//conf parser

app.use(bp.json({limit:'10mb'}))
app.use(bp.urlencoded({extended: false}));


//conf frontend
app.set('view engine','ejs');
app.set('views','views');

//static file
app.use(express.static('public'));

//call routs

app.use('/',(req,res) => {

    return res.send('Hello World Welcome Marketplace Aplication')
   // return res.render('insert');


});


module.exports = app;