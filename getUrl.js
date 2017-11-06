var urlModel = require("./schema");
module.exports = function(arg, callback){

  if(parseInt(arg) / 1 === parseInt(arg)){//arg is a number

    urlModel.findOne({index: parseInt(arg)}, function(err, url){
      if(err){
        return err;
      }
      if(url === null){
        callback("Please enter a valid existing shortened url.");
        return;
      }

      callback(url.url);
      return;
    })
  }
  else{
    callback("Please enter a valid existing shortened url.");
    return;
  }
}
