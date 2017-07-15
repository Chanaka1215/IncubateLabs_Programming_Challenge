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


/**
 * the hotel controller for the hotel model
 * @param app
 */
module.exports.hotelControler = function (app) {

     /**
      * this method reteve data as a list
      * The end point for get hotel list by params ciity and orderBy
      * city => string
      * orderBy => number (1 -1)
      */
     app.get('/get/hotels/:city/:orderBy',function (req,res) {
         console.log("access the end point hotel ==> "+ req.url);
         utills.DBConnection();
         var sortOder = req.params.orderBy;
         var selection  ={city:req.params.city};
         var projection ={__v:false,_id:false};
         var option    ={sort: {hotelName: sortOder}};

         console.log(req.params.city+' hotel list is sorted ' + req.params.orderBy);
         hotelModel.Hotels.find(selection,projection,option,function (err,hotelList) {
             if(err){
                 console.log('eror occur when geting hotel list  ==> '+err.message );
                 res.status(200).send({message:'internal error',status:500,content:err});
             }else {
                 console.log('sucessfully retreved data');
                 res.status(200).send({message:'success',status:200,content:hotelList});
             }
         });
     });




     /**
      * The end point for save  new hotel
      */
     app.post('/post/hotel',function (req,res) {
         console.log("access the end point for post a hotel ==> "+ req.url);
         console.log(req.body)
         utills.DBConnection();
         var newHotel = hotelModel.Hotels({
             hotelName  :req.body.hName,
             address    :req.body.hAddress,
             city       :req.body.hLocation.toUpperCase(),
             enterBy   :req.body.enterBy,
             hDesc     :req.body.hDesc
         });

         //save the new Hotel object using hotel model
         newHotel.save(function (err) {
             utills.DBConnection();
             if(err){
                 console.log('error occur when saving new hotel data ==> '+err.message)
                 res.status(500).send({message:err.message,status:500,content:''})
             }else {
                 console.log('Sucesfully saved new hotel');
                 res.status(200).send({message:'successfully  saved new user',status:200,content:''})

             }
         });
     });


     /**
      * post method for end point for update a hotel
      */
     app.post('/post/update-hotel',function (req,res) {
         console.log("access the end point for update hotel ==> "+ req.url);
         utills.DBConnection();

         var selection = { hotelName:req.body.hName};
         var updateData = {
             address    :req.body.hAddress,
             city       :req.body.hLocation.toUpperCase(),
             enterBy    :req.body.enterBy,
             hDesc      :req.body.hDesc
         };
         var option ={
             upsert:false
         };
         //to find the hotel then update
         hotelModel.Hotels.findOneAndUpdate(selection, updateData, option, function(err, doc){
             if (err){
                 console.log('error  when updating'+err.message)
                 res.status(400).send({message:'did not match ',status:400,content: err });
             } else {
                 //return res.send("succesfully saved");
                 console.log('update successfully'+doc)
                 res.status(200).send({message:'success ',status:200,content: err });
             }
         });

     });



     /**
      * this method reteve fyull details related to the hotel
      * hotel name as a parameter
      */
     app.get('/get/hotels-name/:hotel',function (req,res) {
         console.log("Access the end point for get hotel by name ==> "+ req.url);
         utills.DBConnection();
         var result ={  // response object created
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
             if(err){
                 res.status(400).send({message:'error',status:400,content:''});
             }
             if(data){
                 result.hName    =data[0].hotelName;
                 result.hAddress = data[0].address;
                 result.hCity    = data[0].city;
                 result.hDesc    = data[0].hDesc;
                 result.hEnterBy = data[0].enterBy;


                 //get a user document by pasing usename
                 userController.FindaUserByUserName(data[0].enterBy,function (user) {
                     console.log('get user data by  '+data[0].enterBy);
                     if(user){
                         result.hEnterByE=user.eMail;
                     }else {
                         console.log('error ocuer while retreving data from usr collection');
                     }
                 });

                 //get a city object from database pasing city name
                 cityController.FindCityByName(data[0].city,function (city) {
                     console.log('result city '+city);
                     if(city){
                         result.hZip =city.zip;
                         result.hDist=city.district;
                         result.hPro=city.province;
                     }else {
                         console.log('error ocuer while retreving data from city collection')
                     }

                     // send the result object as  ia http
                     res.status(200).send({message:'success',status:200,content:result});
                 });
             }
         });
     });

     
 };