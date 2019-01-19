var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var connection = require('./config/connection');

var PORT = process.env.PORT || 8080;


// Parse request body as JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

connection


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.listen(PORT, function(){
    console.log(`app listening on the PORT: ${PORT}`)
}) 