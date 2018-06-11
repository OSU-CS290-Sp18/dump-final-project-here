/*
 *
 * File Serving goes here
 * 
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var twitData = require('./twitData');

var app = express();
var port = process.env.PORT || 3040;

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next){
	res.status(200).render('layouts/main', {
	is404: false,
	isAllTwits: true,
	nSingleTwit: true,
	twits: twitData
	});
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});