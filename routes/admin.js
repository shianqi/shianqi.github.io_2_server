/**
 * 管理员界面
 * Created by killer on 2016/7/10.
 */
var express = require('express');
var Admin = express.Router();

Admin.get('/',function (req, res, next) {
    res.render('index');
});

module.exports = Admin;
