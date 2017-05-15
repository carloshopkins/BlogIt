require("dotenv").config();
var express = require("express");
var routes = require("./routes");
var mongoose = require("mongoose");

var app = express();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/blogit`, function(error){
    if(error){
        console.log(error)
    }else{
        console.log("connected to mongo");
    }
});

routes(app);

app.listen(4040, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("server is running on port 4040");
    }
});

module.exports = app;
