process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;

console.log('Server running at http://localhost:3000/');
