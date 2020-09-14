var path = require("path");
var express = require("express");
var request = require("request");
//var bodyParser = require('body-parser');
//var pino = require('express-pino-logger')();
const { createProxyMiddleware } = require('http-proxy-middleware');

// Define
const PORT = 5000;
const LOCAL_PATH = path.join(__dirname, "../dist");
console.log('LOCAL_PATH:',LOCAL_PATH);

var app = express(); // create express app
app.use(express.static(LOCAL_PATH));
app.use(express.static("public"));

// PROXY

var env = require("../config/env");
// console.log('CURRENT_ENV:', env.NODE_ENV);
// console.log('MODE_ENV:', env.MODE_ENV);

app.use('/api', createProxyMiddleware({ target: env.MODE_ENV.api, changeOrigin: true }));
app.use('/cdn', createProxyMiddleware({ target: env.MODE_ENV.cloudapi, changeOrigin: true }));

// REACT
app.get('/*', (req, res) => {
    res.sendFile(LOCAL_PATH + "/index.html");
})

// START
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})


