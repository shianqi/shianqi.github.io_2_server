/**
 * Created by killer on 2016/7/10.
 */
var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    name:String,
    message:String,
    time:String,
    viewCount:String
});

// messageSchema.pre('save',function (next) {
//     if(this.isNew){
//         this.time = Date.now();
//     }
//     next();
// });

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