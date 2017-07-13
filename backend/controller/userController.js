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
    app.get('/get/user/:email',function (req,res) {
        console.log("kkkkkk");
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

    });

    /**
     * assign new user data to the user model
     */
    app.post('/post/register',function (req,res) {
        utills.DBConnection();
        console.log(req.body);
        var newUser = userModel.User({
            userName :req.body.userName,
            password :req.body.password,
            eMail    :req.body.email,
            regDate  :new Date().toString()
        });

        /**
         * this method will save the model into database
         */
        console.log('rea');
        newUser.save(function (err) {
            if(err){
                if(err.code == 11000){
                    res.status(200).send({message:err.message,status: 202, content:''});
                }else {
                    console.log('error occur**** '+err.message+"****"+err.code +"**"+err.collection)
                    res.status(500).send({message:err.message,status:500,content:''})
                }

            }else {
                console.log('Sucesfully saved new user');
                res.status(200).send({message:'successfully  saved new user',status:200,content:''})

            }
        });
    });


    app.post('/post/login',function (req,res) {
        utills.DBConnection();
        console.log(req.body);
        var selection  ={
            userName:req.body.name,
            password:req.body.password
        };
        var projection ={__v:false,_id:false};

        userModel.User.find(selection,projection,function (err,users) {
            var mess ;
            console.log(' geting a user' + users);

            if(err){
                mess=500;
                console.log('eror occur when geting a user ***' + err.message );
                res.status(500).send({message:'internal error',status:mess,content:err});
            }else {
                if(users.length == 0){
                    mess = 400;
                }else if(users.length ==1){
                    mess = 200;
                } else {
                    mess = 500;
                }
                console.log('sucessfully retreved user data'+mess);
                res.status(200).send({message:'success',status:mess,content:''});
            }
        });


    });







};