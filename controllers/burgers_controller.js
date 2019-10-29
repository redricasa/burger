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
//updates web page in /burgers/update page
router.put('/burgers/update', function(req, res){
    console.log(req.body)
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        //server responds by redirecting page to the home route
        res.redirect('/');
    })
})

//export.module to link to server.js
module.exports = router;