//import express
var express = require('express');
var path = require('path');
//create router
var router = express.Router();
//import burger.js models/burger.js
var burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.all(function(burger_data){
        // console.log(burger_data);
        res.render('index',{burger_data});
    })
})
//updates web page in /burgers/update page
router.put('/burgers/update', function(req, res){
    // console.log(req.body);
    burger.update(req.body.burger_id, function(result){
        // console.log(result);
        //server responds by redirecting page to the home route
        res.redirect('/');
    });
});
router.post('/burgers/create', function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    });
});
router.get("/images/:image",function(req, res){
    res.sendFile(path.join(__dirname + "/../public/assets/images/" + req.params.image))
})
//export.module to link to server.js
module.exports = router;