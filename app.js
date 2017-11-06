var express = require("express");
var addUrl = require("./addUrl");
var getUrl = require("./getUrl");


var app = express();

app.get("/:shortenedUrl", function(req, res){


  getUrl(req.params.shortenedUrl, function(result){

    var pattern = new RegExp(/http[s]?:\/\/www\.\w*.*/g);
    if(pattern.test(result)){
      res.statusCode = 302;
      res.setHeader("Location", result);
      res.end();
    }
    else{
      res.send(result);
    }
  });

});

app.get("/new/:url(*)", function(req, res){

  addUrl(req.params.url, function(result){
    res.send(result);
  });
});

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log("server started");
});
