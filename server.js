
// Dependencies
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app=express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000...超能');
