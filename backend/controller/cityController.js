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


/**
 * this will be acted as a controller of the city model
 * and manage http requests comes to
 * @param app
 */
module.exports.cityControler = function (app) {

    /**
     * this method reteve a city
     * name of the city should be a attached to the  url
     * :name
     */
    app.get('/get/city/:name',function (req,res) {
        console.log('access the get method for '+req.url);
        utills.DBConnection();
        var selection  ={city:req.params.name};
        var projection ={__v:false,_id:false};

        cityModel.City.find(selection,projection,function (err,user) {
            if(err){
                console.log('eror occur when geting a city');
                res.status(400).send({message:'internal error',status:500,content:err});
            }else {
                console.log('sucessfully retreved city data');
                res.status(200).send({message:'success',status:200,content:user});
            }
        });


    });

    /**
     * this post method is used to save new city
     */
    app.post('/post/city',function (req,res) {
        utills.DBConnection();
        var newCity = cityModel.City({
            zip         :req.body.zip,
            cityName    :req.body.name.toUpperCase(),
            district    :req.body.district,
            province    :req.body.province,
            enterBy    :req.body.enterBy
        });

        /**
         * this method will save the model into database
         */
        newCity.save(function (err) {
            if(err){
                console.log('error occur'+err.message)
                res.status(400).send({message:'error',status:500,content:err})
            }else {
                console.log('Sucesfully saved new city');
                res.status(200).send({message:'successfully  saved city',status:200,content:''})

            }
        });
    });


    /**
     * to find a city by its name
     * city name is unique
     * @param location
     * @param callback
     */
    var findaCityByName= function(location,callback){
         utills.DBConnection();
        var selection  ={cityName:location};
        var projection ={__v:false,_id:false};

        cityModel.City.find(selection,projection,function (err,city) {
            if(err){
                console.log('eror occur when geting a city');
                //return err
                // res.status(500).send({message:'internal error',status:500,content:err});
            }else {
                console.log('sucessfully retreved city data'+city[0]);
                // //res.status(200).send({message:'success',status:200,content:user});
                // return city;
                callback(city[0]);
            }
        });
    };

    exports.FindCityByName = findaCityByName;


};