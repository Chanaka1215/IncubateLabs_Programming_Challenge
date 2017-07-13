/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */
 var utills = require('../utills');
 var hotelModel = require('../models/hotelModel');

 module.exports.hotelControler = function (app) {

     /**
      * this method reteve data as a list
      */
     app.get('/get/hotels',function (req,res) {
         utills.DBConnection();
         var selection  ={city:req.params.hLocation};
         var projection ={__v:false,_id:false};
         hotelModel.Hotels.find(selection,projection,function (err,hotelList) {
             if(err){
                 console.log('eror occur when geting hotel list');
                 res.status(500).send({message:'internal error',status:500,content:err});
             }else {
                 console.log('sucessfully retreved data');
                 res.status(200).send({message:'success',status:200,content:hotelList});
             }
         });

         utills.DBConnection().close();
         
     });

     /**
      * assign new data to the model
      */
     app.post('/post/new-hotel',function (req,res) {
         var newHotel = hotelModel.Hotels({ hotelName  :{type:String,require:true,unique:true},
             rooms      :req.body.rooms,
             address    :req.body.hAddress,
             city       :req.body.hLocation,
             enterdBy   :req.body.enterBy
         });

         /**
          * this method will save the model into database
          */
         newHotel.save(function (err) {
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