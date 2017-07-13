/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

var utills = require('../utills');
var userModel = require('../models/userModel');

module.exports.userControler = function (app) {

    /**
     * this method reteve one user
     */
    app.get('/get/user',function (req,res) {
        utills.DBConnection();
        var selection  ={eMail:req.params.email};
        var projection ={__v:false,_id:false};

        userModel.User.find(selection,projection,function (err,user) {
            if(err){
                console.log('eror occur when geting a user');
                res.status(500).send({message:'internal error',status:500,content:err});
            }else {
                console.log('sucessfully retreved user data');
                res.status(200).send({message:'success',status:200,content:user});
            }
        });

        utills.DBConnection().close();

    });

    /**
     * assign new user data to the user model
     */
    app.post('/post/user',function (req,res) {
        var newUser = hotelModel.Hotels({
            userName :req.body.userName,
            password :req.body.password,
            eMail    :req.body.email,
            regDate  :new Date().toString()
        });

        /**
         * this method will save the model into database
         */
        newUser.save(function (err) {
            utills.DBConnection();
            if(err){
                console.log('error occur'+err.message)
                res.status(500).send({message:err.message,status:500,content:''})
            }else {
                console.log('Sucesfully saved new hotel');
                res.status(200).send({message:'successfully  saved new user',status:200,content:''})

            }
            utills.DBConnection().close();
        });
    });







};