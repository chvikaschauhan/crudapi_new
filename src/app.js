"use strict";
exports.__esModule = true;
var express = require("express");
var statusController = require("./controllers/status");
// Our Express APP config
var app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get('/', function (req, res) {
    res.send("Hi");
});
//more end pont add
app.get('/hi', statusController.hi);
app.get('/find', statusController.find);
app.get('/remove', statusController.remove);
// export our app
exports["default"] = app;
