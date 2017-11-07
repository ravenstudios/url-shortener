var express = require("express");
var addUrl = require("./addUrl");
var getUrl = require("./getUrl");
var path = require("path");



var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});


app.get("/:shortenedUrl", function(req, res){
  getUrl(req.params.shortenedUrl, function(result){
    var pattern = new RegExp(/http[s]?:\/\/www\.\w*.*/g);
    if(pattern.test(result)){
      res.statusCode = 302;
      res.setHeader("Location", result);
      res.end();
    }
    else{
      res.render('index', { message: result });
    }
  });
});

app.get("/new/:url(*)", function(req, res){

  addUrl(req.params.url, function(result){
    res.render('index', { message: result });
  });
});

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log("server started");
});


// ******used for glitch************
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
