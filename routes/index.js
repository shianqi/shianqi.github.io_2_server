var express = require('express');
var router = express.Router();
var Message = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getMessage', function (req, res, next) {
    Message.findAll(function (err,message) {
        if(err){
            console.log(err);
        }else{
            res.jsonp(message);
        }
    });
});

router.get('/addMessage', function (req, res, next){
    var message = new Message({
        name: req.query.name,
        message: req.query.message,
        time : new Date(),
        ip: req.connection.remoteAddress,
        viewCount: 22
    });

    if(message.name!=null&&message.name!=""&&message.message!=null&&message.message!=""){
        message.save(function (err) {
            if (err){
                console.log(err);
            }else{
                res.write("success");
                res.end();
            }
        });
    }else{
        res.write("please input the argument!");
        res.end();
    }
});

router.get('/visit',function (req, res, next) {
    console.log(req.headers);
    res.write("please input the argument!");
    res.end();
});

module.exports = router;
