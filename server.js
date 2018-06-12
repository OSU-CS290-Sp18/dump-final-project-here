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

app.use(express.static('public'));

app.get('/here', function(req, res, next){
	res.status(200).render('parks_page', {
		parks: parksData
	});
});

app.get('/parks/:park', function (req, res, next) {
  var park = req.params.park.toLowerCase();
  if (parksData[park]) {
    res.status(200).render('parks_page', parksData[park]);
  } else {
    next();
  }
});

app.listen(port, function () {
  console.log("== Server is listening on port rendering the proper server", port);
});
