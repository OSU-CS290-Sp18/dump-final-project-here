/*
 *
 * File Serving goes here
 * 
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUsername = process.env.MONGO_USERNAME || "cs290_smitbre2";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_smitbre2";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_smitbre2";

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null; 

var parksData = require('./parks');

var app = express();
var port = process.env.PORT || 27017;

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));



app.get('/', function(req, res, next) {
	res.status(200).render('parks_page', {
		parks: parksData
	});
});

app.get('/here', function(req, res, next){
	res.status(200).render('parks_page', {
		parks: parksData
	});
});

app.get('*', function(req, res, next) {
	res.status(404).send('404 Page Not Found');
});

app.get('/parks/:park', function (req, res, next) {
  var park = require.params.park.toLowerCase(); 
  var parksCollection = mongoDB.collection('parks');

  parksCollection.find({id: park}).toArray(function(err, parksDocs) {
  	if (err) {
		res.status(500).send("Error fetching park from DB.");
	}
	else {
		res.status(200).render('parks_page', parksDocs[0]);
	}
  })
});


MongoClient.connect(mongoURL, function (err, client) {
	if(err) {
		throw err;
	}

	mongoDB = client.db(mongoDBName);
	app.listen(port, function () {
	  	console.log("== Server is listening on port rendering the proper server", port);
	});
})
