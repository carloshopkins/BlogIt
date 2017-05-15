var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Post = new Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type:String
    }
});

var PostModel = mongoose.model('PostModel', Post);
module.exports = PostModel;