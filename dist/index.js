/**
 * Created by Chanaka Fernando on 4/13/2017.
 */
var express =require('express');
var config =require('./config');
var cors =require('cors');
var app =express();

app.use(cors());
app.use(express.static(__dirname ));


const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
};


app.use(forceSSL());



app.get('/*',function (req,res) {
    console.log(req.url);
    res.sendFile(__dirname + '/index.html');
    res.status(200);
});

app.listen(config.SERVER_PORT,function (res,err) {
    if(err){
        console.log('error');
        res.status(500);
    }else {
        console.log("App runs on port "+config.SERVER_PORT);
    }

});