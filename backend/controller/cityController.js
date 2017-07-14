/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */


var utills = require('../utills');
var cityModel = require('../models/cityModel');

module.exports.cityControler = function (app) {

    /**
     * this method reteve one city via hiip
     */
    app.get('/get/city:name',function (req,res) {
        utills.DBConnection();
        var selection  ={eMail:req.params.name};
        var projection ={__v:false,_id:false};

        cityModel.City.find(selection,projection,function (err,user) {
            if(err){
                console.log('eror occur when geting a city');
                res.status(500).send({message:'internal error',status:500,content:err});
            }else {
                console.log('sucessfully retreved city data');
                res.status(200).send({message:'success',status:200,content:user});
            }
        });


    });

    /**
     * assign new user data to the user model
     */
    app.post('/post/city',function (req,res) {
        var newCity = cityModel.City({
            zip         :req.body.zip,
            cityName    :req.body.name,
            district    :req.body.district,
            province    :req.body.zprovince,
            entredBy    :req.body.enterBy
        });

        /**
         * this method will save the model into database
         */
        newCity.save(function (err) {
            utills.DBConnection();
            if(err){
                console.log('error occur'+err.message)
                res.status(500).send({message:err.message,status:500,content:''})
            }else {
                console.log('Sucesfully saved new city');
                res.status(200).send({message:'successfully  saved city',status:200,content:''})

            }
        });
    });


    var findaCityByName= function(location){
         utills.DBConnection();
        var selection  ={eMail:location};
        var projection ={__v:false,_id:false};

        userModel.User.find(selection,projection,function (err,city) {
            if(err){
                console.log('eror occur when geting a city');
                return err
                // res.status(500).send({message:'internal error',status:500,content:err});
            }else {
                console.log('sucessfully retreved city data');
                //res.status(200).send({message:'success',status:200,content:user});
                return city;
            }
        });
    };

    exports.FindCityByName = findaCityByName;

};