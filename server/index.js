var path = require("path");
var express = require("express");
var request = require("request");
//var bodyParser = require('body-parser');
//var pino = require('express-pino-logger')();
const { createProxyMiddleware } = require('http-proxy-middleware');

// Define
const PORT = 5000;
const LOCAL_PATH = path.join(__dirname, "..", "build");

var app = express(); // create express app
app.use(express.static(LOCAL_PATH));
app.use(express.static("public"));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(pino);

// PROXY

app.use('/api', createProxyMiddleware({ target: 'http://222.255.217.135:9117', changeOrigin: true }));
// app.use('/api', createProxyMiddleware({ target: 'http://superapp.minerva.vn:9218', changeOrigin: true }));
app.use('/cdn', createProxyMiddleware({ target: 'https://cloudapi.minerva.vn', changeOrigin: true }));

// REACT
app.get('/*', (req, res) => {
    res.sendFile(LOCAL_PATH + "/index.html");
})

// START
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})

//  "proxy": "http://222.255.217.135:9117",
    //const url = http://vdfs.vietbando.vn/api/v1/no_auth/streetview/${req.query.id || ''}?batch=full;
    //request.get(url).on('error', handleError).pipe(res);
