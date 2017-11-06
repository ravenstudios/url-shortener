var mongoose = require('mongoose');
var mongoDB = "mongodb://ravenstudios:4666basss@ds249545.mlab.com:49545/freecodecmap";
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

module.exports =mongoose.model("url", urlSchema);
