var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var VisitRecord = require('../models/visitRecord');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/getMessage', function (req, res, next) {
    Message.findAll(function (err,message) {
        if(err){
            console.log(err);
        }else{
            res.jsonp(message);
        }
    });
});

router.post('/addMessage', function (req, res, next){
    var message = new Message({
        author: req.body.author,
        text: req.body.text,
        time : new Date(),
        ip: req.connection.remoteAddress,
        color: req.body.color,
        viewCount: 0,
        header:req.headers
    });

    if(message.author!=null&&message.author!=""&&message.text!=null&&message.text!=""){
        if(!message.color){
            message.color = 1;
        }
        message.save(function (err) {
            if (err){
                console.log(err);
            }else{
                res.jsonp({state:'success'});
            }
        });
    }else{
        res.write("please input the argument!");
        res.end();
    }
});

router.get('/visit',function (req, res, next) {
    var visitRecord = new VisitRecord({
        time: new Date(),
        ip: req.connection.remoteAddress,
        header: req.headers
    });

    visitRecord.save(function (err) {
        if (err){
            console.log(err);
        }else{
            res.write("success");
            res.end();
        }
    });
});

router.get('/visitNumber', function(req ,res, next){
    VisitRecord.getSize(function (err,date){
        if (err){
            console.log(err);
        }else{
            res.jsonp(date);
        }
    });
});

module.exports = router;
