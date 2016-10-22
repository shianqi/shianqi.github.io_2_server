/**
 * Created by killer on 2016/7/10.
 */
var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    author:String,
    text:String,
    time:Date,
    ip:String,
    color: Number,
    viewCount:Number,
    header:{}
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
    },
    delById: function (id, cb) {
        return this
            .findOne({_id:id})
            .remove()
            .exec(cb);
    }
};

module.exports = messageSchema;