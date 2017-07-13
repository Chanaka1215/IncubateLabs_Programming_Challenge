/**
 * Created by         : Chanaka Fernando.
 * Date               : Fri, 7/14/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

var city  = require('./cityController');
var hotel = require('./hotelController');
var user  =require('./userController');

module.exports.controllers = function(app){

    city.cityControler(app);
    user.userControler(app);
    hotel.hotelControler(app);

};