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
 var cityController =require('./cityController');
 var userController = require('./userController');

 module.exports.hotelControler = function (app) {

     /**
      * this method reteve data as a list
      */
     app.get('/get/hotels/:city',function (req,res) {
         utills.DBConnection();
         var selection  ={city:req.params.city};
         var projection ={__v:false,_id:false};
         hotelModel.Hotels.find(selection,projection,function (err,hotelList) {
             if(err){
                 console.log('eror occur when geting hotel list');
                 res.status(200).send({message:'internal error',status:500,content:err});
             }else {
                 console.log('sucessfully retreved data');
                 res.status(200).send({message:'success',status:200,content:hotelList});
             }
         });

         
     });

     /**
      * assign new data to the model
      */
     app.post('/post/hotel',function (req,res) {
         console.log(req.body)
         utills.DBConnection();
         var newHotel = hotelModel.Hotels({
             hotelName  :req.body.hName,
             address    :req.body.hAddress,
             city       :req.body.hLocation.toUpperCase(),
             enterBy   :req.body.enterBy,
             hDesc     :req.body.hDesc
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
         });
     });




     /**
      * this method reteve fyull details
      */
     app.get('/get/details/:hotel',function (req,res) {
         console.log("accesss to the method");
         utills.DBConnection();
         var result ={
             hName:'',
             hAddress:'',
             hDesc :'',
             hCity :'',
             hDist :'',
             hPro  :'',
             hZip :'',
             hEnterBy:'',
             hEnterByE:''
         };

         var selection  ={hotelName:req.params.hotel};
         var projection ={__v:false,_id:false};
         console.log("parameres"+ req.params.hotel);

         hotelModel.Hotels.find(selection,projection,function (err,data) {

             console.log("hotel data object"+ data);
             if(err){
                 res.status(400).send({message:'error',status:400,content:result});
             }else {
                 result.hName    =data[0].hotelName;
                 result.hAddress = data[0].address;
                 result.hCity    = data[0].city;
                 result.hDesc    = data[0].hDesc;

                 var cityObject =cityController.FindCityByName(data[0].city);
                 console.log(cityObject);
                 if(cityObject != null){
                     result.hZip =cityObject.zip;
                     result.hDist=cityObject.district;
                     result.hPro=cityObject.province;
                 }else {
                     console.log('error ocuer while retreving data from city collection')
                 }

                 userController.FindaUserByUserName(data[0].enterBy,function (user) {
                     console.log('user object enter data[0].enterBy '+data[0].enterBy);
                     console.log('user object '+user);
                     if(user){
                         console.log(user.eMail);
                         result.hEnterByE=user.eMail;
                     }else {
                         console.log('error ocuer while retreving data from usr collection');
                     }

                 });



                 res.status(200).send({message:'success',status:200,content:result});

             }
         });


     });



     
 };