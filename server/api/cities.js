var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();

// API end point to get info - GET is used to retrieve data from the server
router.get('/', function(req, res){
    Cities.retrieveAll(function(err, cities) {
        if(err)
            return res.json(err);
        return res.json(cities); 
    });
});

// API end point to add - POST used to send data to the server
router.post('/', function(req, res){
    var city = req.body.city;

    Cities.insert(city, function(err, result) {
        if(err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router; 