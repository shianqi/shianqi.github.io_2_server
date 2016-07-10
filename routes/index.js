var express = require('express');
var router = express.Router();
var Message = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
    var message = new Message({
        name:'shianqi',
        message: 'Hello',
        time : '2016.7.10',
        viewCount: '22'
    });

    // message.save(function (err) {
    //     if (err) // ...
    //         console.log('meow');
    // });


    Message.findAll(function (err,message) {
        if(err){
            console.log(err);
        }else{
            console.log(message[1].name);
            res.render('index', { title: message[1].name});
        }
    });
});

module.exports = router;
