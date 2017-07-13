/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

var mongoose = require('mongoose');
var schema   = mongoose.Schema;

var hotel = new schema({
    hotelName  :{type:String,require:true,unique:true},
    rooms      :{type:Number,require:true},
    address    :{type:String,require:true},
    city       :{type:String,require:true},
    enterdBy   :{type:string, require:true}
});

exports.Hotels = mongoose.model('Hotel',hotel);
