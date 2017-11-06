var mongoose = require('mongoose');
var mongoDB = "mongodb://ravenstudios:4666basss@ds249545.mlab.com:49545/freecodecmap";

module.exports = function(arg){
  mongoose.connect(mongoDB, {
    useMongoClient: true
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  var Schema = mongoose.Schema;

  var urlSchema = new Schema({

    index: Number,
    url: String
  });

  var urlModel = mongoose.model("url", urlSchema);

  //see if arg is a url or index

  //if arg is a number then check database for the url

  //if arg is a url the validate url and see if its in the database

  //if url isnt in the database then add and return index

  //else return error with index number

}
