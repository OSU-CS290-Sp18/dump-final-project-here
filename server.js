
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

/* Below block is for MongDB when implemented*/ 
/*
var MongoClient = reqiure('mongodb').MongoClient;


var mongoHost = process.env.MONGO_HOST;
var monoPort = process.env.MONGO_PORT || '3000';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONG_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" +
      mongHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;
*/

var app = express();
var port = process.env.PORT || 42069;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res, next) {
	 res.status(200).render('index');  
});

app.listen(port, function() {
	console.log("== Server is running on port: ", port);
});
