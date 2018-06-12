/*
 *
 * File Serving goes here
 * 
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var parksData = require('./parks');

var app = express();
var port = process.env.PORT || 3040;



var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUsername = process.env.MONGO_USERNAME || "cs290_smitbre2";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_smitbre2";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_smitbre2";

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null; 

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res, next){
	
	var parks = mongoDB.collection('parks');
	var parksCursor = parks.find({});
	parksCursor.toArray(function (err, parkDocs) {
	if (err) {
		res.status(500).send("Error fetching park from DB.");
	} else {
		console.log(parkDocs);
		res.status(200).render('parks_page', {

			parks: parkDocs
		});
	  }
	});

});

app.get('/parks/:park', function (req, res, next) {
  var park_input = req.params.park;
  var parks = mongoDB.collection('parks');
  var parksCursor = parks.find({park_name : park_input});
  parksCursor.next(function (err, parkDoc) {
  if (err) {
    res.status(500).send("Error fetching park from DB.");
  } else if (!parkDoc) {
    next();
  } else {
	console.log(parkDoc);
    res.status(200).render('parks_page', {
			parks: [parkDoc]
		});
  }
});

});

app.get('*', function (req, res, next) {
  res.status(404).render('404_page');
});



MongoClient.connect(mongoURL, function (err, client) {
	console.log("mongoURL== ", mongoURL);
	if(err) {
		throw err;
	}
	app.listen(port, function () {
		console.log("== Server is listening on port rendering the proper server", port);
	});
	
	mongoDB = client.db(mongoDBName);
});