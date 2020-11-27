const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const connect = require('./connection');
port = 3000;


const indexRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use("/student", indexRoutes);

app.listen(port, ()=> console.log('Express Server is running on Port: ' +port));