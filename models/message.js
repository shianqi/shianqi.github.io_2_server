/**
 *
 * Created by killer on 2016/7/10.
 */
var mongoose = require('mongoose');
var MessageSchema = require('../schemas/message');

var Message = mongoose.model('Message',MessageSchema);

module.exports = Message;