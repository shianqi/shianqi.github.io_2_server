/**
 * Created by killer on 2016/7/11.
 */
var mongoose = require('mongoose');

var visitRecord = new mongoose.Schema({
    time:Date,
    ip:String,
    header:{}
});

visitRecord.statics={
    findAll: function (cb) {
        return this
            .find({})
            .sort('time')
            .exec(cb);
    },
    getSize: function (cb) {
        return this
            .count()
            .exec(cb);
    },
    getList: function (page, pageSize, cb) {
        var skipNumber = parseInt(page)*parseInt(pageSize);

        return this
            .find({})
            .sort('time')
            .limit(parseInt(pageSize))
            .skip(skipNumber)
            .exec(cb);
    }
};

module.exports = visitRecord;