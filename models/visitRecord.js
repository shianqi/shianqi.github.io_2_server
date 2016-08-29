/**
 *
 * Created by killer on 2016/7/11.
 */
var mongoose = require('mongoose');
var visitRecordSchema = require('../schemas/visitRecord');

var VisitRecord = mongoose.model('VisitRecord',visitRecordSchema);
module.exports = VisitRecord;