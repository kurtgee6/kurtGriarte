//dependencies

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

//server
var PORT = process.env.PORT || 8080;

//parse application
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static('apps/public'));

//gets the HTML file stored in htmlRoute.js so users sees display
require('./apps/routing/htmlRoutes.js')(app);

//PORT listener
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
