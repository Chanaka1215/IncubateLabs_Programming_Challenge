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

//the user model to store the new user  object
var user = new schema({
    userName :{type:String,require:true,unique:true},
    password :{type:String,require:true},
    eMail    :{type:String,require:true},
    regDate  :{type:String,require:true}
});

var User =mongoose.model('User',user);
exports.User = User;



// /**
//  * this method will pass a user  by user name
//  * @param enterdBy
//  * @param callback
//  * @constructor
//  */
// exports.FindaUserByUserName = function(enterdBy,callback){
//     console.log(" FindaUserByUserName mehod accesed");
//     utills.DBConnection();
//     var selection  ={userName:enterdBy};
//     var projection ={__v:false,_id:false,password:false};
//
//     User.findOne(selection,projection,function (err,user) {  //change find => findOne
//         if(err){
//             console.log('eror occur when geting a user data');
//         }else {
//             console.log('sucessfully retreved user data and finished ' + user[0]);
//             callback(user[0]);
//         }
//     });
// };


