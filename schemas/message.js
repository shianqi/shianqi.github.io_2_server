/**
 * Created by killer on 2016/7/10.
 */
var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    name:String,
    message:String,
    time:Date,
    ip:String,
    viewCount:Number
});

messageSchema.statics ={
    findAll: function (cb) {
        return this
            .find({})
            .sort('time')
            .exec(cb);
    },
    findById: function (id,cb) {
        return this
            .findOne({_id:id})
            .exec(cb);
    }
};

module.exports = messageSchema;