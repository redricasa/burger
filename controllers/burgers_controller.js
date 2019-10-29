//import express
var express = require('express');
//create router
var router = express.Router();
//import burger.js models/burger.js
var burger = require('../models/burger.js');

router.get('/', function(req, res){
    res.render('index');
})
//export.module to link to server.js
module.exports = router;