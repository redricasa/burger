//import express
var express = require('express');
//create router
var router = express.Router();
//import burger.js models/burger.js
var burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })
})
//export.module to link to server.js
module.exports = router;