process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", function () {
    console.log('Server running at http://localhost:5000/');
});


module.exports = app;

/*app.listen(5000);

console.log('Server running at http://localhost:5000/');*/

