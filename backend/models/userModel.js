/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

// var utills = require('../utills');
var mongoose = require('mongoose');
var schema  = mongoose.Schema;

var user = new schema({
    userName :{type:String,require:true,unique:true},
    password :{type:String,require:true},
    eMail    :{type:String,require:true,unique:true},
    regDate  :{type:String,require:true}
});

var User =mongoose.model('User',user);
exports.User = User;