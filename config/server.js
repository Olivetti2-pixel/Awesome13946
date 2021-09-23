var express = require('express');
var app = express();
var porta = process.env.PORT||5555;

app.use(express.static('./'));

module.exports = {app,porta}
