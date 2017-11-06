var express = require("express");
var database = require("./database")

var app = express();


app.get("/new/:url", function(req, res){
  res.send(req.params.url);
});

app.get("/:shortenedUrl", function(req, res){

});

app.get("/get", function(req, res){

  urlModel.find(function(err, doc){
    if(err){
      console.error(err);
    }
    res.send(doc)
  });

});

app.get("/post", function(req, res){
  // var saveData = new urlModel({index: 123, url: "www.google.com"});
  urlModel.create({index: "123", url: "www.google.com"},function(err, result){
    res.send("saved" + result);
  });

});



// listen for requests :)
var listener = app.listen(3000, function () {
  console.log("server started");
});
