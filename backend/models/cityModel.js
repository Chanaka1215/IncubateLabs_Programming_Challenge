/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

var mongoose = require('mongoose');
var schema  = mongoose.Schema;

var city = new schema({
    zip         :{type:String,require:true,unique:true},
    cityName    :{type:String,require:true},
    district    :{type:String,require:true},
    province    :{type:String,require:true},
    entredBy    :String

});

exports.City = mongoose.model('City',city);
