var app = require("./server");
var PostModel = require("./models/Post");

module.exports = function(app) {
    app.get("/", function(req, res){
        PostModel.find({})
        .then((posts) => {
            res.json(posts);
        })
        .catch(error => console.log(error))
        
    });
    // app.post()

    // app.delete()
}