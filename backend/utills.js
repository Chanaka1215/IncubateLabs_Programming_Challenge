/**
 * Created by         : Chanaka Fernando.
 * Date               : Thu, 7/13/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : backend.
 * Package            : .
 */

function dbConnection() {

    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting (soucre) My credentials were invalid, it was giving 4, which I can't find in officials docs or anywhere else


    var mongoose = require( 'mongoose' );
    mongoose.Promise = global.Promise;
    if(mongoose.connection.readyState){
        return true;
    }else{
        mongoose.Promise = global.Promise;
        mongoose.connect(config.DB_HOST+':'+config.DB_PORT+'/'+config.DB_NAME);

        // When successfully connected
        mongoose.connection.on('connected', function () {
            logger('Mongoose default connection open ',200);
        });
        // If the connection throws an error
        mongoose.connection.on('error',function (err) {
            logger('connection error:',500,err);
        });
        // When the connection is disconnected
        mongoose.connection.on('disconnected', function () {
            logger('Mongoose default connection disconnected',500);
        });
        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', function() {
            mongoose.connection.close(function () {
                logger('Mongoose default connection disconnected through app termination',200);
                process.exit(0);
            });
        });
    }
}
exports.DBConnection=dbConnection;