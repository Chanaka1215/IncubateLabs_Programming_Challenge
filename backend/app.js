/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

var express =require('express');
var bodyParser = require('body-parser');
const cors = require('cors');


var config = require('./app-config.json');
var utills = require('./utills');
var controllers = require('./controller/index');


var app = express();
app.use(bodyParser.json({limit:'1mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'1mb'}));
app.use(cors());


controllers.controllers(app);


app.listen(config.SERVER_PORT,function (res,err){
    if(err){
        console.log('Server did not started');
        console.log('Please Check the error'+ err);
        res.status(500);
    }else {
        console.log('listnnig on port ' +config.SERVER_PORT)
    }


});