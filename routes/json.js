/**
 * Created by killer on 2016/7/10.
 */
var express = require('express');
var toJson = express.Router();

toJson.get('/',function (req, res, next) {
    res.jsonp({status:'json'});
});

module.exports = toJson;
