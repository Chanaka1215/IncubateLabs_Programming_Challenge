/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */


/**
 * the entru point of the API
 * @type {*}
 */
var express =require('express');                //import express from node mpdule => express 4+
var bodyParser = require('body-parser');        //import body parser
const cors = require('cors');                   // import cors


var config = require('./app-config.json');      //import configuration
var utills = require('./utills');               //import DB utillity class
var controllers = require('./controller/index'); // import the index file


var app = express();                                      //get Express 4 framework nstance to app
app.use(bodyParser.json({limit:'1mb'}));                  //use body paser in this app to send jason data via body
app.use(bodyParser.urlencoded({extended:true, limit:'1mb'}));
app.use(cors());                                            // active CORS


//acces the controller index file
controllers.controllers(app);


/**
 * create a server to response for the object
 */
app.listen(config.SERVER_PORT,function (res,err){
    if(err){
        console.log('Server did not started');
        console.log('Please Check the error'+ err.message);
        res.status(500);
    }else {
        console.log('listnnig on port ' +config.SERVER_PORT)
    }


});