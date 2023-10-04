process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

const port = process.env.PORT || 5000;
const host = '0.0.0.0';
app.listen(port, host, function () {
    console.log('Server running at http://localhost:5000/');
});
module.exports = app;

// console.log('Server running at http://localhost:5000/');
