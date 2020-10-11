"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var isDev = process.env.NODE_ENV !== 'production';
var PORT = process.env.PORT || 5000;
var app = express();
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
// Answer API requests.
app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});
// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, function () {
    console.error("Node " + (isDev ? 'dev server' : 'cluster worker ' + process.pid) + ": listening on port " + PORT);
});
