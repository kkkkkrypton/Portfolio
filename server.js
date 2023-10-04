process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

let port = process.env.PORT || 5000;
app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:5000/');
