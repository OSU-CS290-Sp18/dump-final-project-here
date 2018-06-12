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

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
	res.status(200).render('parks_page', {
		parks: parksData
	});
});

app.get('/parks/:park', function (req, res, next) {
  var park_input = req.params.park.toLowerCase();
  console.log("park_input == ", park_input);
  console.log("parksData.park_input ==", parksData.park_input);
  console.log("parksData ==", parksData);
  if(parksData[park_input]){
    res.status(200).render('parks_page', {
	parks: [parksData[park_input]] });
  }
  else{
    next();
  }
});

app.get('*', function (req, res, next) {
  res.status(404).render('404_page');
});

app.listen(port, function () {
  console.log("== Server is listening on port rendering the proper server", port);
});
