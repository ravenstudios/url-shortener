var urlModel = require("./schema");
var index;

module.exports = function(arg, callback){

  getNextIndex();
  var pattern = new RegExp(/http[s]?:\/\/www\.\w*.*/g);
  if(pattern.test(arg)){
    urlModel.findOne({url: arg}, function(err, url){
      if(err){
        return err;
      }
      if(url === null){
        urlModel.create({index: index, url: arg},function(err, result){
          callback("Saved: " + result);
          return;
        });
      }
      else{
        callback("URL already in database. The index is " + url.index);
        return;
      }
    })
  }
  else{
    callback("Please enter a valid address. I.E. http:\/\/www.website.com or https:\/\/www.website.com");
    return;
  }
}

function getNextIndex(){
  urlModel.find(function(err, doc){
    if(err){
      console.error(err);
    }

    var arr = [];
    for(var i in doc){
      arr.push(doc[i].index);
    }

    arr.sort(function(a, b){return b - a});
    var result = arr[0] + 1;
    index = result;
  });
}
